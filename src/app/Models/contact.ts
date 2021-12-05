import { Category } from "./category";

export class Contact {
    firstName: string
    lastName: string;
    tel1: string;
    tel2: string;
    email: string;
    date_creation: string;
    date_update: string;
    category: string;

    constructor(firstName?:string,lastName?:string,email?:string ,tel1?:string,tel2?:string,category?:string ){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.tel1 = tel1;
        this.tel2 = tel2;
        this.category = category;
    }

}
