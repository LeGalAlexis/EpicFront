import { Cell } from './cell';
import { Player } from 'src/app/models/player/player';

export class Map {
    id: string;
    cells: Array<Cell>;
    owner: Player;
    level: number;
    playerX: number;
    playerY: number;
}