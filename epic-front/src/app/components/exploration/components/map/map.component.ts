import { Component, OnInit, Input } from '@angular/core';
import { ExplorationService } from '../../services/exploration.service';
import { Map, ExplorationData, Cell } from 'src/app/services/main-api.service';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

    @Input()
    map: Map;

    constructor(public explorationService: ExplorationService) { }

    ngOnInit() {
    }

    getRowsIndex(): Array<number> {
        let array = new Array(5);
        array = [-2,-1,0,1,2];
        return array;
    }

    getCellFromCoordinate(rowIndex: number, columnIndex: number): Cell {
        let playerX = this.explorationService.explorationData.x;
        let playerY = this.explorationService.explorationData.y;
        return this.map.cells.find(c => c.y * -1 === rowIndex - playerY && c.x === columnIndex + playerX);
    }

    getBackgroundPosition(): string {
        let posX: number = this.explorationService.explorationData.x * 64 + (3 * 64);
        let posY: number = -this.explorationService.explorationData.y * 64 + (3 * 64);

        return '-' + posX + 'px -' + posY + 'px';
    }

    goTo(direction: number): void {
        this.explorationService.goTo(direction);
    }

    cantGoTo(direction: number): boolean {
        let destinationX = this.explorationService.explorationData.x;
        let destinationY = this.explorationService.explorationData.y;
        if(direction === 0) {
            destinationX += 1;
        } else if(direction === 1) {
            destinationY += 1;
        } else if(direction === 2) {
            destinationX -= 1;
        } else if(direction === 3) {
            destinationY -= 1;
        }
        let destinationCell = this.map.cells.find(c => c.y === destinationY && c.x === destinationX);
        return !destinationCell;
    }
}
