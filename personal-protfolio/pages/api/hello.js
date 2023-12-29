import prisma from '../../src/prisma';
import Cors from 'cors';

const cors = Cors({
  methods: ['POST', 'GET', 'HEAD'],
  // Define your CORS options here as needed
});

export default async function handler(req, res) {
  try {
    // Apply the CORS middleware
    await new Promise((resolve, reject) => {
      cors(req, res, (err) => {
        if (err) {
          return reject(err);
        }
        resolve();
      });
    });

    // Rest of your API logic here
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

        return res.status(200).json({ message: 'Form submitted successfully' });
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
