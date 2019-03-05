import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-part1',
  templateUrl: './part1.component.html',
  styleUrls: ['./part1.component.scss']
})
export class Part1Component implements OnInit {

  @ViewChild('form') form: NgForm;

  list: {}[] = [
    { name: 'sam1', age: 23 },
    { name: 'sam2', age: 23 },
    { name: 'sam3', age: 23 },
    { name: 'sam4', age: 23 }
  ];

  constructor() { }

  ngOnInit() {
    // this.form.statusChanges.subscribe((dad) => console.log(dad));
    setTimeout(() => {
      this.list = [...this.list, { name: 'sam5', age: 23 }];
    }, 5000);
  }

  log(form: NgForm) {
    console.log(form.value);
  }


}
