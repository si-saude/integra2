import { Directive, HostListener, EventEmitter, Output, ElementRef, SimpleChanges, OnChanges, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Helper } from './../generic/helper';

@Directive( {
    selector: '[numberFormat]',
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: NumberFormatDirective,
        multi: true
    }]
} )

export class NumberFormatDirective implements ControlValueAccessor, OnChanges {
    private helper: Helper;
    private loaded = false;
    private detailModeLoaded = false;
    onChange: any;
    onTouched: any;

    @Input() ngModel;
    @Input() component;
    @Input() disabled = false;
    @Output() changeValue = new EventEmitter();

    constructor( private el: ElementRef ) {
        this.helper = new Helper();
    }

    ngOnInit() {

    }

    ngOnChanges( changes: SimpleChanges ) {
        if (changes['ngModel'] && changes['ngModel']['currentValue'] !== undefined && !this.loaded) {
            this.loaded = true;
            this.input(changes['ngModel']['currentValue']);
        }

        if (changes['component'] && changes['component']['currentValue'] && !this.detailModeLoaded) {
            this.detailModeLoaded = true;
            this.el.nativeElement.disabled = changes['component']['currentValue']['_detailMode'];
        }

        if (changes['disabled'] && changes['disabled']['currentValue']) {
            this.el.nativeElement.disabled = this.disabled;
        }
    }

    writeValue( value: any ): void {

    }

    registerOnChange( fn: any ): void {
        this.onChange = fn;
    }

    registerOnTouched( fn: any ): void {
        this.onTouched = fn;
    }

    @HostListener( 'input', ['$event'] )
    onInput( $event: any ) {
        if ( $event.target.value ) {
            this.input($event.target.value);
            this.dirtyForm();
        }
    }

    dirtyForm() {
        if ( this.component ) {
            this.helper.dirtyForm(this.component);
        }
    }

    input(value) {
        if (value !== undefined) {
            const negative = value.toString().includes('-') ? true : false;
            value = value.toString();

            if (!value.includes(',')) {
                if (value.indexOf('.') < 0) {
                    value += '.';
                }
                while (value.substring(value.indexOf('.')).length < 3) {
                    value += '0';
                }
                while (value.substring(value.indexOf('.')).length > 3) {
                    value = value.substring(0, value.length - 1);
                }
            }
            value = value.replace(/\D/g, '');
            const len = value.length;

            if ( 1 === len ) {
                value = value.replace( /(\d)/, '0,0$1' );
            } else if ( 2 === len ) {
                value = value.replace( /(\d)/, '0,$1' );
            } else if ( len > 2 ) {
                let length = 1;
                let qtd = value.length - 2;
                const mod = qtd % 3;
                qtd = Math.floor( qtd / 3 );
                let regex = '';
                if ( mod > 0 ) {
                    regex = '(\\d{' + mod + '})';
                    length++;
                }
                for ( let x = 0; x < qtd; x++ ) {
                    regex += '(\\d{3})';
                    length++;
                }
                regex += '(\\d{2})';
                let pattern = '';
                for ( let x = 1; x < length; x++ ) {
                    if ( x > 1 ) {
                        pattern += '.';
                    }
                    pattern += '$' + x;
                }
                pattern += ',$' + ( length );
                value = value.replace( new RegExp( regex ), pattern );
            }

            while ((value.substring(0, 1) === '0' || value.substring(0, 1) === '.') &&
                value.length > 4) {
                value = value.substring(1);
            }

            if (negative) {
                value = '-' + value;
            }

            setTimeout(() => {
                if (value === '') {
                    value = '0,00';
                }
                this.el.nativeElement.value = value;
                value = value.replace(/\./g, '');
                value = value.replace(',', '.');
                this.changeValue.emit(value);
            }, 25);
        }
    }

    @HostListener( 'blur', ['$event'] )
    onBlur( $event: any ) {
        const value = $event.target.value;
        if (value === '') {
            $event.target.value = '0,00';
            this.changeValue.emit( '' );
        }
    }

    @HostListener( 'keypress', ['$event'] )
    onKeypress( $event: any ) {
        if ($event.key === 'Backspace') {
            $event.target.value = '0,00';
            this.changeValue.emit( '' );
        }
    }
}
