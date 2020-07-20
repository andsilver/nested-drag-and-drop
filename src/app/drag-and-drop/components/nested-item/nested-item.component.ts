import { Component, OnInit } from '@angular/core';
import { SortablejsOptions } from 'ngx-sortablejs';

import { DnDItem } from '../../dnd-item';

@Component({
  selector: 'app-nested-item',
  templateUrl: './nested-item.component.html',
  styleUrls: ['./nested-item.component.scss']
})
export class NestedItemComponent implements OnInit {
  public items: DnDItem[] = [];
  public options: SortablejsOptions = {
    group: 'nested'
  };

  constructor() { }

  ngOnInit() {
    this.setData();
  }

  setData() {
    for (let i = 0; i < 2; i++) {
      const item = new DnDItem(i.toString());
      this.items.push(item);

      for (let j = 0; j < 2; j++) {
        const child = new DnDItem(i + '' + j);
        item.children.push(child);
      }
    }
  }
}
