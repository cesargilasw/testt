// Class to implement attributes of Client
export class Client {
   id: number;
   name: string;
   lastName: string;
   city: string;   
   state: string;
   zipcode: string;
   stateShort: string;
   phone: string;
   email: string;
   constructor(data: any) {
        Object.assign(this, data);
   }
}