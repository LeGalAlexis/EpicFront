import { Component, OnInit, Input } from '@angular/core';
import { ExplorationService } from '../../services/exploration.service';
import { Map, Cell } from 'src/app/services/main-api.service';
import { trigger, state, style, transition, animate, group } from '@angular/animations';

@Component({
    selector: 'app-exploration-actions',
    templateUrl: './exploration-actions.component.html',
    styleUrls: ['./exploration-actions.component.css'],
    animations: [
        trigger('fastShade', [
            state('in', style({ opacity: 1 })),
            transition(':enter', [
                style({ opacity: 0 }),
                animate('1s', style({ opacity: 1 })),
            ]),
            transition(':leave', [
                animate('0.3s', style({ opacity: 0 }))
            ])
        ])
    ]
})
export class ExplorationActionsComponent implements OnInit {

    public isMiscSectionDisplayed: boolean;
    public isGatherSectionDisplayed: boolean;
    public isFightSectionDisplayed: boolean;

    constructor(protected explorationService: ExplorationService) { }

    ngOnInit() {
    }

    getCurrentCell(): Cell {
        return this.explorationService.map.cells.find(c => c.x === this.explorationService.explorationData.x && c.y === this.explorationService.explorationData.y)
    }

    leaveMap(): void {
        this.explorationService.leaveMap();
    }

    /* Gather section */
    public color: string = 'green';

    public changeAt: string = '';

    public time: number = 0;
    interval;

    startTimer() {
        this.interval = setInterval(() => {
            this.time++;
            if (this.time < 10
                || (this.time >= 10 && this.time < 35 && this.time % 3 === 0)
                || (this.time >= 35 && this.time < 60 && this.time % 5 === 0)) {
                this.changeAt += this.time + ' ';
                let rng = Math.floor(Math.random() * 2);
                this.color = this.getCandidates()[rng];
            }
            if (this.time >= 60) {
                this.pauseTimer();
            }
        }, 100)
    }

    getCandidates(): Array<string> {
        let result: Array<string> = ['green', 'blue', 'purple'];
        const index = result.indexOf(this.color, 0);
        if (index > -1) {
            result.splice(index, 1);
        }
        return result;
    }

    pauseTimer() {
        clearInterval(this.interval);
        this.time = 0;
    }

    // janken part
    public opponentMove: string = '';
    public outcome: string = '';
    private canPlay: boolean = true;
    public display0: boolean = true;
    public display1: boolean = true;
    public display2: boolean = true;

    chooseMove(move: number) {
        if (this.canPlay) {
            this.canPlay = false;
            if (move === 0) {
                this.display0 = true;
                this.display1 = false;
                this.display2 = false;
            } else if (move === 1) {
                this.display0 = false;
                this.display1 = true;
                this.display2 = false;
            } else if (move === 2) {
                this.display0 = false;
                this.display1 = false;
                this.display2 = true;
            }
            let opponentScore: number = this.getRandomMove();
            setTimeout(() => {
                if (move === opponentScore) {
                    this.outcome = 'égalité';
                } else if (opponentScore === 2 && move === 0) {
                    this.outcome = 'victoire';
                } else if (opponentScore < move) {
                    this.outcome = 'victoire';
                } else {
                    this.outcome = 'défaite';
                }
                setTimeout(() => {
                    this.opponentMove = '';
                    this.outcome = '';
                    setTimeout(() => {
                        this.display0 = true;
                        this.display1 = true;
                        this.display2 = true;
                        this.canPlay = true;
                    }, 500);
                }, 3000);
            }, 500);
        }
    }

    getRandomMove(): number {
        let rng = Math.floor(Math.random() * 3);
        if (rng === 0) {
            this.opponentMove = 'pierre';
        } else if (rng === 1) {
            this.opponentMove = 'papier';
        } else {
            this.opponentMove = 'ciseau';
        }
        return rng;
    }
}
