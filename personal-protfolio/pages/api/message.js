import prisma from '../../src/prisma'

export default async function handler(req, res) {
    try {
      const users = await prisma.message.findMany();
      res.status(200).json(users);
    } catch (error) {
      console.error(error); // Log the error for debugging purposes
      res.status(500).json({ error: 'Error fetching users' });
    }
  }