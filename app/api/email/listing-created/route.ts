import { Resend } from "resend";

import ListingCreated from "@/components/emails/ListingCreated";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const body = await request.json();
  try {
    const { name, listingName, listingId, email } = body;

    const data = await resend.emails.send({
      from: "Fursat <hello@fursat.ai>",
      to: [email],
      subject: "Welcome to Fursat",
      react: ListingCreated({
        name,
        listingName,
        listingId,
      }),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
