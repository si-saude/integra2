import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CheckboxFilterDirective } from './../directive/checkbox-filter.directive';
import { DateFormatDirective } from './../directive/date-format.directive';
import { DateTimeFormatDirective } from './../directive/date-time-format.directive';
import { IntegerValidatorDirective } from './../directive/integer-validator.directive';
import { ModalConfirmDirective } from './../directive/modal-confirm.directive';

import { appRoutes } from './../router';
import { GenericGridComponent } from '../include/generic/generic-grid/generic-grid.component';
import { GenericModalComponent } from '../include/generic/generic-modal/generic-modal.component';
import { ListComponentComponent } from '../include/generic/list-component/list-component.component';
import { FormComponentComponent } from '../include/generic/form-component/form-component.component';
import { GenericTabComponent } from '../include/generic/generic-tab/generic-tab.component';
import { SelectToGridComponent } from '../include/generic/select-to-grid/select-to-grid.component';
import { GenericLabelComponent } from '../include/generic/generic-label/generic-label.component';
import { GenericSelectComponent } from '../include/generic/generic-select/generic-select.component';
import { GenericFormModalComponent } from '../include/generic/generic-form-modal/generic-form-modal.component';
import { GenericDateFilterComponent } from '../include/generic/generic-date-filter/generic-date-filter.component';
import { GenericAutocompleteComponent } from '../include/generic/generic-autocomplete/generic-autocomplete.component';

@NgModule({
    declarations: [
        GenericGridComponent,
        GenericModalComponent,
        ListComponentComponent,
        FormComponentComponent,
        GenericTabComponent,
        SelectToGridComponent,
        GenericLabelComponent,
        GenericSelectComponent,
        GenericFormModalComponent,
        GenericDateFilterComponent,
        GenericAutocompleteComponent,
        CheckboxFilterDirective,
        DateFormatDirective,
        DateTimeFormatDirective,
        IntegerValidatorDirective,
        ModalConfirmDirective
    ],
    exports: [
        CommonModule,
        FormsModule,
        GenericGridComponent,
        GenericModalComponent,
        ListComponentComponent,
        FormComponentComponent,
        GenericTabComponent,
        SelectToGridComponent,
        GenericLabelComponent,
        GenericSelectComponent,
        GenericFormModalComponent,
        GenericDateFilterComponent,
        GenericAutocompleteComponent,
        CheckboxFilterDirective,
        DateFormatDirective,
        DateTimeFormatDirective,
        IntegerValidatorDirective,
        ModalConfirmDirective
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forRoot(appRoutes)
    ]
})

export class SharedModule { }
