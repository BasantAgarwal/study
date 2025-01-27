const nodemailer = require("nodemailer");

const mailSender = async (email, title, body) => {
    try{
        let transporter = nodemailer.createTransport({
            host : "smtp.gmail.com",
            auth:{
                pass : "klslfnyzsuogiefu",
                user : "agarwalb099@gmail.com",
            }
        })

        let info = await transporter.sendMail({
            from: 'StudyNotion ||  by Basant,Kanishk and Jinesh',
            to:`${email}`,
            subject: `${title}`,
            html: `${body}`,
        });
        // console.log(info);
        return info;

    } catch(error) {
        // console.error(error);
        console.log(error.message);
    }
}

module.exports = mailSender;