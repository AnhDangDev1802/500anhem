import { Injectable } from '@angular/core';
import {ReplaySubject} from "rxjs/Rx";

@Injectable()
export class TemplateService {
    public loading = new ReplaySubject();
    constructor() {}
}