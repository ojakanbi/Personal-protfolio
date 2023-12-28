
import prisma from '../../src/prisma'

// Define your API handler function here
export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;

        try {
            // Insert the form data into the database using Prisma
            await prisma.message.create({
                data: {
                    name,
                    email,
                    message
                }
            });

            res.status(200).json({ message: 'Form submitted successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}







