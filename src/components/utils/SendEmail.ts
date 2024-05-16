/* import { Resend } from 'resend';
import { type ObjectFormulary } from '../../types/ObjectFormulary';

const resend = new Resend(import.meta.env.APIKEY_RESEND);

const SendEmail = async(state:ObjectFormulary) => {
  try{
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'garciaezequiel2022001@gmail.com',
      subject: `${state.name}`,
      html: `
        <h1>${state.name}</h1>
        <h3>${state.motive}</h3>
        <h4>${state.phone}</h4>
        <p>${state.sms}</p>
      `
    });
  }catch{
    console.log("error");
  }
}


export default SendEmail;
 */