import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import {v4 as uuid} from 'uuid';
@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css'],
})
export class AddCharacterComponent {
  @Output()
  public onNewCharacterEmitter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    id: uuid(),
    name: '',
    power: 0,
  };

  public onNewCharacter(): void {
    //debugger;

    console.log(this.character);
    if(this.character.name.length === 0) return;

    this.onNewCharacterEmitter.emit(this.character);

    this.character.name = '';
    this.character.power=0;
  }
}
