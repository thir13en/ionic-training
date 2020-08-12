import { NgModule } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';


@NgModule({
    exports: [
        RouterTestingModule,
        HttpClientTestingModule,
    ],
})
export class TestingModule {}
