import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../Models/contact';
import { ContactService } from './../services/contact.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  contactList: Contact[];
  category:string = '';
  searchText: string = '';
  constructor(private contactService :ContactService, private router:Router) {
      this.contactList = this.contactService.getContactList();
  }


  addContact(){
      this.router.navigateByUrl('/tabs/tab2');
  }


  deleteContact(e){
      this.contactService.deleteContact(e);
      this.contactList = this.contactService.getContactList();
  }

  ionViewDidEnter(){
    // this.contactList = this.contactService.getContactList();
    console.log('enter')
  }


  

}
