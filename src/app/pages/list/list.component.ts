import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  // Property to identify the agenda form and contacts inputs
  listForm: FormGroup;
  // Property to identify if the form has been already submitted
  submitted = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    // Crear una forma agregando grupos/elementos de manera programatica
    this.listForm = this.fb.group({
      list: this.fb.array([
        this.fb.control('',[Validators.required])
      ])
    });
  }

  // Convenience getter for easy access to form list group
  get listItems(): FormArray {
    return this.listForm.get('list') as FormArray;
  }

  // Validate the rules on reactive form validators
  validateFields(): void {
    this.submitted = true;
    if (this.listItems.invalid) {
      return;
    }
  }

  // Add new item to list items
  newItem(): void {
    this.listItems.push(this.fb.control('', [Validators.required]) );
  }



}
