import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() data

  constructor() { }

  ngOnInit(): void {
  }

  sortById() {
    this.data.sort((a, b) => a.id - b.id)
  }

  sortByName() {
    this.data.sort((a, b) => {
        if ( a.name.toLowerCase() < b.name.toLowerCase() ) return -1;
        if ( a.name.toLowerCase() < b.name.toLowerCase() ) return 1;
      })
  }

  sortByAge() {
    this.data.sort((a, b) => a.age - b.age)
  }

}
