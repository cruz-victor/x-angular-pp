//a-component
import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {


  //En angular se hace la inyeccion de dependencia mediante constructor
  constructor(private dbzService:DbzService){
  }

  public get characters():Character[] {
    //return [...this.dbzService.characters] ;
    return this.dbzService.characters;
  }

  public onDeleteCharacter(id:string):void{
    this.dbzService.onDeleteCharacterById(id);
  }

  public onNewCharacter(character:Character):void{
    this.dbzService.addCharacter(character);
  }
}
