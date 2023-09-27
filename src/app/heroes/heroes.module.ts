import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";

// Los modulos estan protegidos con intereciones externas(exports) e internas(imports)
@NgModule({
  declarations:[
    HeroComponent,
    ListComponent
  ],
  exports:[
    HeroComponent,
    ListComponent
  ],
  imports:[
    CommonModule
  ]
})
export class HeroesModule{

}
