//a-service
import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import {v4 as uuid} from 'uuid';

//Injectable indica que se puede inyectar el servicio
//privicedIn:'root', se tendria trabajar en la seccion de los privider. El servicio sera un singleton
@Injectable({ providedIn: 'root' })
export class DbzService {


  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000,
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 2000,
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7500,
    }
  ];

  public addCharacter(character:Character):void{
    const newCharacter:Character={
      id: uuid(),
      name: character.name,
      power: character.power
    };

    console.log('MainPage');
    console.log(character);
    this.characters.push(newCharacter);
  }


  // public onDeleteCharacter(index:number):void{
  //   console.log('onDeleteCharacter');
  //   console.log(index);
  //   this.characters.splice(index,1);
  // }

  public onDeleteCharacterById(id:string):void{
    this.characters=this.characters.filter(ch=>ch.id!==id);
  }
}


