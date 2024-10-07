import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const { nombre, email, telefono, mensaje } = await request.json();

 
  const transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'estudiomadarquitectura@gmail.com', 
    subject: `Nuevo mensaje de contacto de ${nombre}`,
    text: `
      Nombre: ${nombre}
      Email: ${email}
      Teléfono: ${telefono}
      Mensaje: ${mensaje}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Mensaje enviado con éxito' });
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    return NextResponse.json({ message: 'Error al enviar el mensaje' }, { status: 500 });
  }
}
