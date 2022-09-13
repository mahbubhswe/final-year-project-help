import nodemailer from "nodemailer";
import nc from "next-connect";
const handler = nc();
handler.post((req, res) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "mahbubgid@gmail.com",
      pass: "bmwfeufbpchgamhk",
    },
  });

  const details = {
    from: "mahbubgid@gmail.com",
    to: req.body.email,
    subject: req.body.subject,
    text: req.body.message,
  };

  transporter.sendMail(details, (error) => {
    if (error) {
      console.log(error);
      res.send("Failed to send your mail");
    } else {
      res.send("Mail has been sent successfully");
    }
  });
});
export default handler;
