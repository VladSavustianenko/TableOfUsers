import { Component, OnInit, Input } from '@angular/core';

import {data} from '../data'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() user
  @Input() id
  data = data
  name
  age

  constructor() { }

  ngOnInit(): void {
    this.name = this.user.name
    this.age = this.user.age
  }

  nameChange(event) {
    this.name = event.target.value
  }

  ageChange(event) {
    this.age = event.target.value
  }

  save() {
    for(let i = 0; i < data.length; i++) {
      if (data[i].id === this.id) {
        data[i].name = this.name
        data[i].age = this.age
        break;
      }
    }
  }

  delete() {
    for(let i = 0; i < data.length; i++) {
      if (data[i].id === this.id) {
        data.splice(this.id, 1)
        break;
      }
    }
    for(let i = 0; i < data.length; i++) {
      data[i].id = i
    }
  }
}
