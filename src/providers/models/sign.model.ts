export class UserSignature {    
    order_id:string;
    reciever:string;
    sender:string;
    list_order:string;
    signature:string;
    description:string;
    constructor(data) { 
        this.signature = data.signature;
        this.list_order = data.list_order;
        this.order_id = data.order_id;
        this.description = data.description;
        this.reciever = data.reciever;
        this.sender = data.sender;
    }
  }
  