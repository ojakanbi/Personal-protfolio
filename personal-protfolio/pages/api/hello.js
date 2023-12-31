import NextCors from 'nextjs-cors';
import prisma from '../../src/prisma';

export default async function handler(req, res) {
  try {
    await NextCors(req, res, {
      // Options
      methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
      origin: '*',
      optionsSuccessStatus: 200,
    });


    if (req.method === 'POST') {
      const { name, email, message } = req.body;

      try {
        // Insert the form data into the database using Prisma
        await prisma.message.create({
          data: {
            name,
            email,
            message,
          },
        });

        return res.status(200).json({ message: 'Form submitted successfully 🏁🏁' });
      } catch (error) {
        return res.status(500).json({ message: 'Internal Server Error' });
      }
    } else {
      return res.status(405).json({ message: 'Method Not Allowed' });
    }
  } catch (error) {
    console.error('CORS error:', error);
    return res.status(500).json({ message: 'CORS Error' });
  }
}
