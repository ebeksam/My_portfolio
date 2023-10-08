const express = require('express');
const app = express();

const nodemailer = require("nodemailer");

const PORT = process.env.PORT || 3000;

//Middleware
app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/public/index.html')
})

app.post('/', (req, res) =>{
    console.log(req.body)

    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'ebeksam@gmail.com',
            pass: 'xitc zorx igro upnc'
        }
    })

    const mailOPtions = {
        from: req.body.email,
        to: 'ebeksam@gmail.com',
        subject: `New Client`,
        text: `Name: ${req.body.name}\nEmail: ${req.body.email}\nMessage: ${req.body.message}`
    }

    transporter.sendMail(mailOPtions, (error, info)=>{
        if(error){
            console.log(error);
            res.send('error')
        }else{
            console.log('Email sent: ' + info.response);
            res.send('success')
        }
    })
})




app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});