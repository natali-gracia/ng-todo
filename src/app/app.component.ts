import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {  
  
  form!: FormGroup 
  selectedDate: string = ''

  ngOnInit() {
    this.form = new FormGroup({
      date: new FormControl('', Validators.required),
      device: new FormControl('', Validators.required)
    })
  }

  getReport() {
    const formData = {...this.form.value}
    console.log('Form Data: ', formData);
  }
}
