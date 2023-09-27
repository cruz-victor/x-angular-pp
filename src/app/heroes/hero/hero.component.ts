import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name:string='Ironman';
  public age:number=45

  //getter
  //log getters se ven como propiedades
  public get capitalizedName():string{
    return this.name.toUpperCase();
  }

  //method
  public getHeroDescription():string{
    return `${this.name}-${this.age}`
  }

  public changeHero():void{
    this.name='Spiderman';
  }

  public changeAge():void{
    this.age=50;
  }

  public resetForm():void{
    this.name='Ironman';
    this.age=45;
  }
}
