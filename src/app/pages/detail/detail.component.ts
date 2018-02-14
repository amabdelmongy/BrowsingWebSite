import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormControlName } from '@angular/forms';
 
import { NotificationService } from "../shared/notificationService";  
 

@Component({
  selector: 'app-create-ticket',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit { 
 

  constructor(public formBuilder: FormBuilder, 
    private notificationService: NotificationService ) {
  }

  ngOnInit() {

   
  }
 

 

}
