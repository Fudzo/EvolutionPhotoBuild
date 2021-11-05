// const express = require('express');
// const path = require('path');
// const request = require("request");
// const nodemailer = require('nodemailer');

import express from "express";
import path from "path";
const __dirname = path.resolve();
import request from 'request';
import nodemailer from "nodemailer";

import cors from 'cors';
import fileupload from 'express-fileupload';
import { PDFDocument } from 'pdf-lib';

const app = express();
const email = 'evolutionphotokv@hotmail.com';
const router = express.Router();
const transporter = nodemailer.createTransport({
	service: 'hotmail',
	auth: {
	  user: email,
	  pass: 'thefuki88'
	}
});

app.use(fileupload());
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));
app.use('/', express.static(__dirname+'/server/build'));

let fieldsArray = [];

const mainRoutePost = async (req, res) => {
    fieldsArray = [];
    const fileName = req.files.myFile;
//      console.log(fileName);
    const pdfDoccc = await PDFDocument.load(fileName.data);
    const form = pdfDoccc.getForm();
    const fields = form.getFields();

    fields.forEach(field => {
        const type = field.constructor.name
        const name = field.getName()
//        console.log(`${name}`);
        fieldsArray.push(name);
    
      });
    res.json({fieldsArray, formName:fileName.name});
};

//////////////// ROUTE HANDLERS //////////////////
const verifyCaptcha = (req, res) => {
	if(req.body.captcha === undefined || req.body.captcha === '' || req.body.captcha === null) {
		return res.json({"success" : false, "message": "Please select captcha."});
	};	
    const sKey = '6Lde484cAAAAADfQX3hbk2JVHRD3wqfR157eSqCU';
	const verifyURL = `https://google.com/recaptcha/api/siteverify?secret=${sKey}&response=${req.body.captcha}`;
	request(verifyURL, (err, res2, body) => {
		body = JSON.parse(body);
// If not successful
		if(body.success !== undefined && !body.success) {
			return res.json({"success": false, "message": "Failed captcha verification."});
		};
// If successful
		    return res.json({"success": true, "message": "Captcha verification succesful."});
	});  
};

const sendEmail = (req, res) => {

	const mailOptions = {
		from: email,
		to: 'nfinforce@gmail.com',
		subject: `Novi email od ${req.body.ime}`,
		text: req.body.poruka,
		replyTo: req.body.email
	};

	transporter.sendMail(mailOptions, function(error, info){
		if (error) {
		  console.log(error);
		} else {
		  console.log('Email sent: ' + info.response);
		}
	  });
	  res.send("Email sent!");
};

const runTheApp = (req, res) => {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
};

//////////////// ROUTE HANDLERS //////////////////

//////////////// ROUTES //////////////////

app.route('/').get(runTheApp);
app.route('/api/captcha').post(verifyCaptcha);
app.route('/api/sendEmail').post(sendEmail);
app.route('/uploadpdf').post(mainRoutePost);



//////////////// ROUTES //////////////////

app.listen(3000);