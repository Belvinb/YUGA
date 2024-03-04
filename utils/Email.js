"use server"
import nodemailer from 'nodemailer'

const transpoter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:process.env.NEXT_PUBLIC_MAILER_EMAIL,
        pass:process.env.NEXT_PUBLIC_MAILER_PASSWORD
    }
})

const sendEmail = async(html) =>{
  

    const mailOptions = {
        from:'mailatyuga@gmail.com',
        to:'yugaarchitecturalstudio@gmail.com',
        subject:'Yuga in-mail',
        html:`<div>
        <p>Name: ${html.name}</p>
        <p>Phone: ${html.phone}</p>
        <p>Email: ${html.email}</p>
        ${html.message}
        </div>`
    }

    try {
        const info = await transpoter.sendMail(mailOptions)
    } catch (error) {
        console.error("error sending email",error)
        
    }
}

export default sendEmail