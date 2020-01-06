import { Component, OnInit, Input } from '@angular/core';
import { Cell } from '../../models/cell';
import { ExplorationService } from '../../services/exploration.service';

@Component({
    selector: 'app-cell',
    templateUrl: './cell.component.html',
    styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {

    @Input()
    cell: Cell;

    constructor(protected explorationService: ExplorationService) { }

    ngOnInit() {
    }

    getClass(): string {
        let result = "cell ";
        if(!this.cell) {
            result += "type-none";
        }
        else {
            result += "type-" + this.cell.type + " ";
            if(this.isCenter()) {
                result += "center-cell ";
            }
        }
        return result;
    }

    isCenter(): boolean {
        if(!this.cell) {
            return false;
        }
        return this.explorationService.explorationData.x === this.cell.x && this.explorationService.explorationData.y === this.cell.y;
    }
}
