import { Injectable, EventEmitter } from '@angular/core'

@Injectable({ providedIn: 'root' })
export class NavService {    navUpdated: EventEmitter<number> = new EventEmitter<number>();
    constructor() { }
}