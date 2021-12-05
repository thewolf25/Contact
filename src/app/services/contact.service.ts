import { Injectable } from '@angular/core';
import { Category } from '../Models/category';
import { Contact } from '../Models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

 
  category = ['amis' , 'famille' , 'professionel','autre']
  listofContact = []
  constructor() { 
    this.generateContact();
  }
      generateContact(){
        for(let i=0 ; i< 100; i++){
          var contact = new Contact();

          contact.firstName = Math.random().toString(36).substring(2,7);
          contact.lastName = Math.random().toString(36).substring(2,7);
          contact.category = this.category[this.randomEnum(Category)]
          console.log(contact.category)
          contact.tel1 = Math.floor((Math.random() * 1000000000) + 1).toString();
          contact.tel2 =Math.floor((Math.random() * 1000000000) + 1).toString();
          contact.date_creation = new Date().toISOString().split('T')[0]
          this.listofContact.push(contact);
        }
    }

    getContactList(){
      return this.listofContact
    }

    addContact(contact: Contact){
      this.listofContact.push(contact);
    }

    deleteContact(contact: Contact){
      this.listofContact = this.listofContact.filter( s => !(s.tel2 == contact.tel2 || contact.tel1 == s.tel1))
    }
     randomEnum<T>(anEnum: T): T[keyof T] {
      const enumValues = Object.keys(anEnum)
        .map(n => Number.parseInt(n))
        .filter(n => !Number.isNaN(n)) as unknown as T[keyof T][]
      const randomIndex = Math.floor(Math.random() * enumValues.length)
      const randomEnumValue = enumValues[randomIndex]
      return randomEnumValue;
    }

    filterContact(searched: string){
      return this.listofContact.filter(s =>{
          return s.firstName.toLowerCase.contains(searched) | s.lastName.toLowerCase.contains(searched) | s.firstName.toLowerCase.contains(searched) | s.firstName.toLowerCase.contains(searched)
      })
    }


    getContact(tel:string){
      let contact = this.listofContact.filter(s => s.tel1 == tel)
      console.log(contact);
      return contact[0];
    }

    updateContact(tel:string , contact:Contact){
      this.listofContact = this.listofContact.filter( s => s.tel1 != tel);
      this.listofContact.push(contact);
    }
}
