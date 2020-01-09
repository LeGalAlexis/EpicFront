import { Component, OnInit, Input } from '@angular/core';
import { Cell } from 'src/app/services/main-api.service';

@Component({
    selector: 'app-cell-details',
    templateUrl: './cell-details.component.html',
    styleUrls: ['./cell-details.component.css']
})
export class CellDetailsComponent implements OnInit {

    @Input()
    cell: Cell;

    constructor() { }

    ngOnInit() {
    }

}
