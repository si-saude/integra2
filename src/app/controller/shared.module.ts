import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IntegerValidatorDirective } from './../directive/integer-validator.directive';

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
        IntegerValidatorDirective
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
        IntegerValidatorDirective
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forRoot(appRoutes)
    ]
})

export class SharedModule { }
