import { Directive, HostListener, EventEmitter, Output, ElementRef, SimpleChanges, OnChanges, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Helper } from './../generic/helper';

@Directive( {
    selector: '[dateTimeFormat]',
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: DateTimeFormatDirective,
        multi: true
    }]
} )

export class DateTimeFormatDirective implements ControlValueAccessor, OnChanges {
    private helper: Helper;
    private loaded = false;
    private detailModeLoaded = false;
    onChange: any;
    onTouched: any;

    @Input() ngModel;
    @Input() component;
    @Output() changeValue = new EventEmitter();

    constructor( private el: ElementRef ) {
        this.helper = new Helper();
    }

    ngOnInit() {

    }

    ngOnChanges( changes: SimpleChanges ) {
        if (changes['ngModel'] && changes['ngModel']['currentValue'] && !this.loaded) {
            this.loaded = true;
            this.input(changes['ngModel']['currentValue']);
        }

        if (changes['component'] && changes['component']['currentValue'] && !this.detailModeLoaded) {
            this.detailModeLoaded = true;
            this.el.nativeElement.disabled = changes['component']['currentValue']['_detailMode'];
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
        value = value.replace(/\D/g, '')
            .replace(/^(\d{2})(\d{2})?(\d{4})?(\d{2})?(\d{2})?/, '$1/$2/$3 $4:$5');
        const c = this;
        setTimeout(function() {
            c.el.nativeElement.value = value;
            c.changeValue.emit( value );
        }, 25);
    }

    @HostListener( 'keydown', ['$event'] )
    onKeydown( $event: any ) {
        if ($event.key === 'Backspace') {
            $event.target.value = '';
            this.changeValue.emit( '' );
            this.dirtyForm();
        }
    }

    @HostListener( 'blur', ['$event'] )
    onBlur( $event: any ) {
        const value = $event.target.value;
        if (value && value.length === 16) {
            if (this.helper.validateDateTime($event.target.value)) {
                return;
            }
        }
        $event.target.value = '';
        this.changeValue.emit( '' );
    }
}
