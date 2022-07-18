"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const message_1 = require("./message");
class error_Object {
    constructor(message, Status_Code) {
        (this.message = message), (this.Status_Code = Status_Code);
        Error.captureStackTrace(this, this.constructor);
        //  console.log(this);
    }
}
class resp_Object extends error_Object {
    constructor(message, Status_Code, result) {
        super(message, Status_Code);
        this.result = result;
    }
}
function object_id_check(user_id) {
    if (user_id.length < 24 || user_id.length > 24) {
        return message_1.MESSAGES.INVALID_ID_PLEASE_CHECK;
    }
}
exports.default = {
    error_Object,
    resp_Object,
    object_id_check
};
