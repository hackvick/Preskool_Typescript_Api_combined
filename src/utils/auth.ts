
import jwt from "jsonwebtoken"
import { Access_token_SecretKey, refresh_token_SecretKey } from "../config/config"
import express, { Response, Request, NextFunction } from "express";
import { Types } from "mongoose";
import { MESSAGES } from "../utils/message"

export {
	verify_token,
	genAuthToken,
	random_Otpfun

}

// Generate jwt token each time
function genAuthToken(_id: string | Types.ObjectId) {
	try {
		const Access_token = jwt.sign({ _id: _id }, Access_token_SecretKey, { expiresIn: "60m" });
		//   console.log(Access_token, "Access token generated ");
		const refresh_token = jwt.sign({ _id: _id }, refresh_token_SecretKey, { expiresIn: "7d" });
		//   console.log(refresh_token, "Refresh token generated ");
		return { Access_token, refresh_token }
	} catch (error) {
		console.log(error);
	}
}

// Verification of jwt token
function verify_token(req: Request, res: Response, next: NextFunction) {
	let token = req.header("Authorization");
	if (!token) throw { message: "Please Enter Access Token" }
	console.log(token + "verify side token");

	if (token.toLowerCase().startsWith('bearer')) {
		token = token.slice('bearer'.length).trim();
	}
	jwt.verify(token, Access_token_SecretKey, function (err: any, decode: any) {
		if (err) throw res.status(401).send({ message: "token not valid or expire", Status_Code: 401 });
		// console.log(err,"err verify side");
		req.body.user = decode;
		next();
	});
}


function random_Otpfun() {
	const Otp_code = Math.floor(100000 + Math.random() * 900000);

	return Otp_code;

}