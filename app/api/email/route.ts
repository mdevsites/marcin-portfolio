import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: body.email,
      to: process.env.EMAIL_USER,
      subject: `Nowa wiadomość od ${body.name}`,
      text: `
Imię/Nazwa firmy: ${body.name}
Email: ${body.email}
Telefon: ${body.phone}
Rodzaj projektu: ${body.projectType}
Ilość podstron: ${body.pages}
Gotowe materiały: ${body.materials}
Integracje: ${body.integrations}
Styl i preferencje: ${body.style}
Przykłady: ${body.examples}
Funkcje: ${body.features}
Termin: ${body.deadline}
Budżet: ${body.budget}
Dodatkowe uwagi: ${body.notes}
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Błąd wysyłania maila" }), { status: 500 });
  }
}
