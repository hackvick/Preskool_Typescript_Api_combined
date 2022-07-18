import {MESSAGES} from "./message"


export interface classType {
  message: string;
  Status_Code: number;
}
export interface responseType extends classType {
  result: object | undefined;
}
export interface Ilogin{
  email:string,
  password:string,

}


class error_Object implements classType {
  message;
  Status_Code;
  constructor(message: string, Status_Code: number) {
    (this.message = message), (this.Status_Code = Status_Code);

    Error.captureStackTrace(this, this.constructor);
    //  console.log(this);
  }
}

class resp_Object extends error_Object implements responseType {
  result;
  constructor(message: string, Status_Code: number, result?: object) {
    super(message, Status_Code);
    this.result = result;
  }
}

function response_handler(Fun_Response: any,res_http:any){
  console.log("res handler side");
  
return res_http.status( Fun_Response.Status_Code).json({
  message:Fun_Response.message,
  Status_Code: Fun_Response.Status_Code,
  result: Fun_Response.result
})
 
}

function object_id_check(user_id:string,res:any):string|undefined {
  if (user_id.length < 24 || user_id.length > 24) {
    return res.status(417).json({message:MESSAGES.INVALID_ID_PLEASE_CHECK,Status_Code:417})
  }
}

export  {
  error_Object,
  resp_Object,
  object_id_check,
  response_handler
};
