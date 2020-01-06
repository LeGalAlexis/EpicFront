import { Component, OnInit } from '@angular/core';
import { ExplorationService } from '../../services/exploration.service';

@Component({
  selector: 'app-exploration-actions',
  templateUrl: './exploration-actions.component.html',
  styleUrls: ['./exploration-actions.component.css']
})
export class ExplorationActionsComponent implements OnInit {

  constructor(protected explorationService: ExplorationService) { }

  ngOnInit() {
  }

  leaveMap(): void {
    this.explorationService.leaveMap();
  }
}
