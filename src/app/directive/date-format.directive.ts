import { Directive, HostListener, EventEmitter, Output, OnInit, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Directive( {
    selector: '[dateFormat]',
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: DateFormatDirective,
        multi: true
    }]
} )

export class DateFormatDirective implements ControlValueAccessor {
    onChange: any;
    onTouched: any;

    @Output() changeValue = new EventEmitter();

    constructor( private el: ElementRef ) {

    }

    ngOnInit() {

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
            let value = $event.target.value;
            value = value.replace(/\D/g, '')
            .replace(/^(\d{2})(\d{2})?(\d{4})?/, '$1/$2/$3');
            $event.target.value = value;
            this.changeValue.emit( value );
        }
    }

    @HostListener( 'blur', ['$event'] )
    onBlur( $event: any ) {
        console.log('entrou na validação da data');
    }
}
