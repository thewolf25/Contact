import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Contact } from '../Models/contact';
import { ContactService } from '../services/contact.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  form : FormGroup;
  constructor(private contactService: ContactService , private toastController: ToastController) { }
  
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Contact ajouter avec succés !!! ',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }
  ngOnInit() {
    this.form = new FormGroup({
      nom : new FormControl(null,{
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      prenom : new FormControl(null,{
        updateOn: 'blur',
        validators: [Validators.required,Validators.maxLength(180)]
      }),
      email : new FormControl(null,{
        updateOn: 'blur',
        validators: [Validators.required,Validators.email]
      }),
      
      tel1 : new FormControl(null,{
        updateOn: 'blur',
        validators: [Validators.required, Validators.pattern('[ + 0-9]+')]
      }),
      tel2 : new FormControl(null,{
        updateOn: 'blur',
        validators: [Validators.required, Validators.pattern('[ +  0-9]+')]
      }),
      category : new FormControl(null,{
        updateOn: 'blur',
        validators: [Validators.required]
      }),

    })
  }


  addContact(){
    
    let formValue = this.form.value;
    console.log(formValue.category)
    let newContact = new Contact(formValue.nom, formValue.prenom,formValue.email, formValue.tel1, formValue.tel2, formValue.category);
    newContact.date_creation = new Date().toISOString().split('T')[0];
    this.contactService.addContact(newContact);
    this.presentToast()

  }

}
