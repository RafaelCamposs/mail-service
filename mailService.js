const nodemailer = require('nodemailer')

class SendMail {

    async send(req,res) {

        var transport = nodemailer.createTransport({
            host: "smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "",
                pass: ""
            }
        });

        const message = {
            from: 'elonmusk@tesla.com', 
            to: 'to@email.com',         
            subject: 'Design Your Model S | Tesla', 
            text: 'Have the most fun you can in a car. Get your Tesla today!'
        };

        transport.sendMail(message, function(err, info) {
            if (err) {
              res.json('err');
            } else {
              res.json(info);
            }
        });
    }

    async sendHTML(req,res) {

        var transport = nodemailer.createTransport({
            host: "smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "",
                pass: ""
            }
        });

        const message = {
            from: 'elonmusk@tesla.com', 
            to: 'to@email.com',         
            subject: 'Design Your Model S | Tesla', 
            html: '<h1>Have the most fun you can in a car!</h1><p>Get your <b>Tesla</b> today!</p>'
        };

        transport.sendMail(message, function(err, info) {
            if (err) {
              res.json('err');
            } else {
              res.json(info);
            }
        });
    }
    

}

module.exports = SendMail