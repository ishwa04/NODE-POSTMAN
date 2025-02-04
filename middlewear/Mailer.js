const mailer = require("nodemailer")

const transport = mailer.createTransport({
    service: "gmail",
    auth: {
        user: "ishwakorat4444@gmail.com",
        pass: "onadsstrgdifokwi"
    }
});

module.exports.sendOtp = (to, otp) => {
    let mailOptn = {
        from: "ishwakorat4444@gmail.com",
        to: to,
        subject: "Verification OPT",
        text: `Your verification OTP is ${otp}`
    }
    transport.sendMail(mailOptn, (err) => {
        console.log(err ? err : 'OTP send successfully')
    })
}

module.exports.managerPass = (to, email, pass) => {
    let mailOption = {
        to: to,
        from: "",
        subject: "your password and email",
        text: `your email is ${email} and your password for this is ${pass}`
    }
}