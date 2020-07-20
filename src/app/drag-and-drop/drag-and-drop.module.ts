import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NestedItemComponent } from './components/nested-item/nested-item.component';
import { SortablejsModule } from 'ngx-sortablejs';


@NgModule({
  declarations: [NestedItemComponent],
  imports: [
    CommonModule,
    SortablejsModule.forRoot({
      animation: 150,
      fallbackOnBody: true,
      swapThreshold: 0.65
    })
  ],
  exports: [
    NestedItemComponent
  ]
})
export class DragAndDropModule { }
