const express = require('express')
const app = express();

const nodemailer = require('nodemailer');
const sendMailController = require('./mailService')

const mailMan = new sendMailController();
app.get('/', mailMan.send);


module.exports = app;