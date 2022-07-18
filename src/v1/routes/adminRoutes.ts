import express, { Request, Response ,NextFunction } from "express";
const router = express.Router();

import Controller from "../controller/index";
import {AdminController} from "../controller/adminController"
import { verify_token,genAuthToken} from "../../utils/auth"
import {response_handler,object_id_check} from "../../utils/helperFun"
// import {responseType} from "../../utils/helperFun"

router.get("/hello",verify_token,async (req: Request, res: Response, next: NextFunction)=>{
    // console.log(req.decode,"decode");
    const controller = new AdminController(req,res)
    const response = await controller.helloUser()
    console.log(response,"response");
    response.CatchResponse? response_handler( response.CatchResponse,res): next(response.CatchError)

});

router.post('/user/create',verify_token,async (req: Request, res: Response, next: NextFunction)=>{

    const controller = new AdminController(req,res)
    const response = await controller.New_Users(req.body)
    console.log(response,"response");
    response.CatchResponse? response_handler( response.CatchResponse,res): next(response.CatchError)
    
    
});

router.put('/user/update/:id',verify_token,async(req: Request, res: Response, next: NextFunction)=>{
    const controller = new AdminController(req,res)
     object_id_check(req.params.id,res);
    const response = await controller.Update_userfun(req.body,req.params.id)
    console.log(response,"response");
    response.CatchResponse? response_handler( response.CatchResponse,res): next(response.CatchError)
   
})
router.delete('/user/delete/:id',verify_token,async(req: Request, res: Response, next: NextFunction)=>{
    const controller = new AdminController(req,res)
    object_id_check(req.params.id,res);
    const response = await controller.Delete_Userfun(req.params.id)
    console.log(response,"response");
    response.CatchResponse? response_handler( response.CatchResponse,res): next(response.CatchError)
   

    // return res.send(response)
})

router.get('/users',verify_token,async(req: Request, res: Response, next: NextFunction)=>{
const controller = new AdminController(req,res)
const response = await controller.User_detailsfun()
console.log(response,"response");
response.CatchResponse? response_handler( response.CatchResponse,res): next(response.CatchError)


// return res.send(response)
});

router.post('/user/login',async(req: Request, res: Response, next: NextFunction)=>{
    const controller = new AdminController(req,res)
    console.log(req.body,"admin route side");
    const response = await controller.UserLoginFun(req.body)
    response.CatchResponse? response_handler( response.CatchResponse,res): next(response.CatchError)
    
    // console.log(response,"responsegj");
    });

 


router.get('/users/:id',Controller.adminController.SingleUserDetail)



export = router;
