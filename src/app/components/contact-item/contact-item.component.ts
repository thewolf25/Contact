import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/Models/contact';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.scss'],
})
export class ContactItemComponent implements OnInit {
  @Input() contact: Contact
  @Input() slideItem;
  @Output() deleteItem = new EventEmitter<Contact>();
  constructor( private router: Router ) { }
  ngOnInit() {}
  
  onEdit(telephone:string){
    this.slideItem.close();
    this.router.navigateByUrl('/tabs/tab3/'+telephone);

  }

  onDelete(){
    this.slideItem.close();
    this.deleteItem.emit(this.contact);
  }
}
