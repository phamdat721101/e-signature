export class UserSignature {    
    order_id:string;
    list_order:string;
    signature:string;
    constructor(data) { 
        this.signature = data.signature;
        this.list_order = data.list_order;
        this.order_id = data.order_id;
    }
  }
  