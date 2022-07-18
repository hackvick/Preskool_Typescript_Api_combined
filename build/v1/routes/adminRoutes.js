"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const index_1 = __importDefault(require("../controller/index"));
const adminController_1 = require("../controller/adminController");
const auth_1 = require("../../utils/auth");
router.get("/hello", auth_1.verify_token, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const controller = new adminController_1.AdminController();
    const response = yield controller.helloUser();
    console.log(response, "response");
    return res.send(response);
}));
router.post('/user/create', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const controller = new adminController_1.AdminController();
    const response = yield controller.New_Users(req.body);
    console.log(response, "response");
    return res.send(response);
}));
router.put('/user/update/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const controller = new adminController_1.AdminController();
    const response = yield controller.Update_userfun(req.body, req.params.id);
    console.log(response, "response");
    return res.send(response);
}));
router.delete('/user/delete/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const controller = new adminController_1.AdminController();
    const response = yield controller.Delete_Userfun(req.params.id);
    console.log(response, "response");
    return res.send(response);
}));
router.get('/users', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const controller = new adminController_1.AdminController();
    const response = yield controller.User_detailsfun();
    console.log(response, "response");
    // const {Status_Code} = response
    return res.send(response);
}));
router.post('/user/login', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const controller = new adminController_1.AdminController();
    console.log(req.body);
    const response = yield controller.UserLoginFun(req.body);
    // console.log(response,"response");
    // console.log(response.CatchError,"catch err");
    // if(response == "CatchResponse"){
    //     console.log("if resp side ");
    //     return res.send(response)
    // }else if(response.CatchError == "CatchError"){
    //     console.log(response.CatchError,"else err side");
    // next(response.CatchError)
    // }else{
    //     console.log("else part");       
    // }
}));
router.get('/users/:id', index_1.default.adminController.SingleUserDetail);
module.exports = router;
