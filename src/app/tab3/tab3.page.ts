import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Contact } from '../Models/contact';
import { ContactService } from '../services/contact.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  form : FormGroup;
  tel: string;
  contact: Contact;

  constructor(private contactService: ContactService, private activeRoute: ActivatedRoute ,private toastController: ToastController) {
     this.activeRoute.paramMap.subscribe(
       s =>{
       this.tel = s.get('tel')
      }
     )
   }
   async presentToast() {
    const toast = await this.toastController.create({
      message: 'Le contact a été modifié avec succés !!! ',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }
  ngOnInit() {
    this.contact = this.contactService.getContact(this.tel)

    this.form = new FormGroup({
      nom : new FormControl(this.contact.firstName,{
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      prenom : new FormControl(this.contact.lastName,{
        updateOn: 'blur',
        validators: [Validators.required,Validators.maxLength(180)]
      }),
      email : new FormControl(this.contact.email,{
        updateOn: 'blur',
        validators: [Validators.required,Validators.email]
      }),
      
      tel1 : new FormControl(this.contact.tel1,{
        updateOn: 'blur',
        validators: [Validators.required, Validators.pattern('[ + 0-9]+')]
      }),
      tel2 : new FormControl(this.contact.tel2,{
        updateOn: 'blur',
        validators: [Validators.required, Validators.pattern('[ +  0-9]+')]
      }),
      category : new FormControl(this.contact.category,{
        updateOn: 'blur',
        validators: [Validators.required]
      }),

    })

  }


  updateContact(){
    
    let formValue = this.form.value;
    let newContact = new Contact(formValue.nom, formValue.prenom,formValue.email, formValue.tel1, formValue.tel1, formValue.category);
    newContact.date_update = new Date().toISOString().split('T')[0];
    this.contactService.updateContact(this.tel ,newContact);
    this.presentToast()

  }


}
