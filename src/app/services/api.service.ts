import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyContact } from 'src/models/myContact';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
baseUrl:string = 'http://localhost:3000/contacts'
  constructor(private http:HttpClient) { }


  // function forget allcontact
  getAllContacts():Observable<MyContact>{
return this.http.get(this.baseUrl)
  }

// function for view a particular contact

  viewContact(contactId:string){

return this.http.get(`${this.baseUrl}/${contactId}`)
}


// function getting a particular groupname
getGroupName(groupId:string){
 return this.http.get('http://localhost:3000/groups/'+groupId)
}


// function for fetch all groups from url(groupste)
getAllGroup(){
  return this.http.get('http://localhost:3000/groups')
}


// function foradding new contact to server
addContact(contactBody:any){
  return this.http.post(this.baseUrl,contactBody)
}
// function for deleting contact
deleteContact(contactId:any){
  return this.http.delete(`${this.baseUrl}/${contactId}`)
}

// update contact detais according to user input
updateContact(contactId:any,contactBody:any){
  return this.http.put(`${this.baseUrl}/${contactId}`,contactBody)
}
}