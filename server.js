const express = require('express');
const app = express();

const nodemailer = require('nodemailer');

const PORT = process.env.PORT || 5000;

// im guessing this is telling the express that i want to deal with public folder 
app.use(express.static('public'));
app.use(express.json());

// this is requesting a to sendfile from the directory and get the wanted folders and file 
app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/public/index.html')
})

app.post('/', (req, res) =>{
    console.log(req.body);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'winentertainment99@gmail.com',
            pass: 'Htoolaypaw1*'
        }
    })

    const mailOptions = {
        from: req.body.email,
        to: 'winentertainment99@gmail.com',
        subject: `Message from ${req.body.email}: ${req.body.subject} `,
        text: req.body.message

    }
    transporter.sendMail(mailOptions, (error, info) => {
        if(error){
            console.log(error);
            res.send('error');
        } else {
            console.log("Email sent:" + info.response)
            res.send('success')
        }
    })
})

// this just listen when you run npm run dev and shows you what port you are on 
app.listen(PORT, () =>{
    console.log(`server is running on ${PORT}`)
})