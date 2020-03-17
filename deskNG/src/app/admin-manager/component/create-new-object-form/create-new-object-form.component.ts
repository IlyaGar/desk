import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-new-object-form',
  templateUrl: './create-new-object-form.component.html',
  styleUrls: ['./create-new-object-form.component.css']
})
export class CreateNewObjectFormComponent implements OnInit {

  objectName: string;
  selectedObject: string;
  departmentName: string;
  panelOpenState = false;
  objects = ['sdas', 'asda', 'hdfh']
  
  constructor() { }

  ngOnInit() {
  }

  onCreateObject(value: string) {
    if(value.length > 0) {

    } 
  }

  onInputObjectChange(value) {
    this.objectName = value;
  }

  selectObject(event) {
    this.selectedObject = event;
  }

  onCreateDepartment(value: string) {
    if(value.length > 0) {
      if(this.selectedObject.length > 0) {
        
      } else {}
    } else {}
  }
}
