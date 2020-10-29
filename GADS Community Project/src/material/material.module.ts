 import { NgModule } from '@angular/core';
 import { MatButtonModule} from '@angular/material';
 import {MatListModule} from "@angular/material/list";
 import {MatGridListModule} from '@angular/material/grid-list';
 import {MatInputModule} from '@angular/material/input';

 const MaterialComponents = [
   MatButtonModule,
   MatListModule,
   MatGridListModule,
   MatInputModule
 ]

@NgModule({
  declarations: [],
  imports: [ MaterialComponents
  ],
  exports: [ MaterialComponents  ]
})
export class MaterialModule { }
