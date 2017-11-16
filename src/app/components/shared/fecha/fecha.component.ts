import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

import {
    MatDatepickerModule,
    MatDatepicker,
    MatNativeDateModule
} from '@angular/material';

@NgModule({
    imports:
    [
        MatDatepickerModule,
        MatDatepicker,
        MatNativeDateModule
    ]
})
@Component({
    selector: 'fecha',
    templateUrl: 'fecha.component.html',
    styleUrls: ['fecha.component.css'],
})
export class FechaComponent {
    public fecha;
    constructor() {
        this.fecha = Date.now()
    }
}