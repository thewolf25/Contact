import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from '../Models/contact';

@Pipe({
  name: 'contactFilter'
})
export class ContactFilterPipe implements PipeTransform {

  transform(value: Contact[], ..._args: string[]): Contact[] {


    if(_args[0] != '')
      value = value.filter( s => {
        console.log(s.category);
        return s.category.toLowerCase() == _args[0].toLowerCase()
      })  
    value = value.filter(s =>  s.firstName.toLowerCase().includes(_args[1]) || s.lastName.toLowerCase().includes(_args[1]) || s.tel1.toString().includes(_args[1]) || s.tel2.toString().includes(_args[1])
    )
    return value;
  //   return value.filter(s =>{
  //     return s.firstName.toLowerCase.contains(searched) | s.lastName.toLowerCase.contains(searched) | s.firstName.toLowerCase.contains(searched) | s.firstName.toLowerCase.contains(searched)
  // })
  }




}
