import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from '../Models/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  contact: Contact;
  tel: string;
  constructor(private activatedRoute: ActivatedRoute , private contactService: ContactService) {

    this.activatedRoute.paramMap.subscribe(s => {
        this.tel = s.get('tel');
    })

   }

  ngOnInit() {

    this.contact = this.contactService.getContact(this.tel);
  }

}
