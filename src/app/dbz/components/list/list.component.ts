import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import {v4 as uuid} from 'uuid';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Output()
  public onDeleteCharacterEmitter:EventEmitter<string>=new EventEmitter();

  @Input()
  public characterList: Character[] = [
    {
      id: uuid(),
      name: 'Trunk',
      power: 10,
    },
  ];

  public onDeleteCharacter(id:string):void{
    //TODO: Emitir ID del personaje
    console.log({index: id})
    this.onDeleteCharacterEmitter.emit(id);
  }
}
