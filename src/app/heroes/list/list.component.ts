import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  public deletedHero?: string;
  public herosNames: string[] = ['Spiderman', 'Iron man', 'Thor', 'Hulk'];

  public removeLastHero(): void {
    this.deletedHero = this.herosNames.pop();
    console.log(this.deletedHero);
  }
}
