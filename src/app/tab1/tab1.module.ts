import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { contact_itemModule } from '../components/contact-item/contact-item.module';
import { ContactFilterModule } from '../Pipes/contact-filterModule';
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    contact_itemModule,
    ContactFilterModule
  ],
  declarations: [Tab1Page  ]
})
export class Tab1PageModule {}