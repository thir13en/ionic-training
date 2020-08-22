import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { NoopComponent } from '@testing/mocks';
import { FormsModule } from '@angular/forms';


@NgModule({
    exports: [
        CommonModule,
        FormsModule,
        RouterTestingModule,
        HttpClientTestingModule,
    ],
    declarations: [NoopComponent],
})
export class TestingModule {}
