import { Component } from '@angular/core';

import {data} from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data = data

  add() {
    try {
      if(data[data.length - 1].name && data[data.length - 1].age)
      data.push({
        id: data.length, name: undefined, age: undefined
      })
    } catch {
      data.push({
        id: data.length, name: undefined, age: undefined
      })
    }
  }
}
