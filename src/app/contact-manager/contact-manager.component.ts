import { Component, OnInit } from '@angular/core';
import { MyContact } from 'src/models/myContact';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrls: ['./contact-manager.component.css']
})
export class ContactManagerComponent implements OnInit {

  allContacts: MyContact[] = []


// date
loginDate:any

searchKey:string=''

  constructor(private api: ApiService) { 

// date
this.loginDate = new Date()
  }




  ngOnInit(): void {
    this.api.getAllContacts().subscribe((data: any) => {
      console.log(data);
      this.allContacts = data
    })
  }


// search
search(event:any){
  console.log(event.target.value);
  this.searchKey = event.target.value
}





}
