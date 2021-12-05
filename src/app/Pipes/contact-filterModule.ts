
import { NgModule} from "@angular/core";
import { ContactFilterPipe } from './contact-filter.pipe';

@NgModule({
    declarations: [ContactFilterPipe],
    exports: [ContactFilterPipe]
  })
export class ContactFilterModule {}