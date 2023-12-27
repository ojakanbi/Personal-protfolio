import { NextApiRequest, NextApiResponse } from 'next';

// Define your API handler function here
export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;
        
        // Your API logic goes here
        // You can use the name, email, and message variables to process the form data
        console.log(name, email, message);
        
        res.status(200).json({ message: 'Form submitted successfully' });
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}







