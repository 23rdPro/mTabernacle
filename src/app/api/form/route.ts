// import axios from 'axios';
// import { NextApiRequest, NextApiResponse } from 'next';

// export async function POST(
//     req: NextApiRequest, 
//     res: NextApiResponse
// ) {
//   if (req.method === 'POST') {
//     const { fullName, email, mobile, message } = req.body;

//     fullName && fullName.length >= 2 
//       ? null 
//       : () => { 
//         throw new Error("Please provide your full name") 
//       }
//     const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
//     isEmailValid ? null : () => { throw new Error("Please your email address") }

//     // Send data to Contentful
//     try {
//       const response = await axios.post(
//         `https://cdn.contentful.com/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/environments/master/entries`,
//         {
//           fields: {
//             name: { 'en-US': fullName },
//             email: { 'en-US': email },
//             phone: { 'en-US': mobile},
//             message: { 'en-US': message}
//           },
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_API_KEY}`,
//             'Content-Type': 'application/json',
//           },
//         }
//       );

//       console.log('Contentful response:', response.data);
//       res.status(200).json({ success: true });
//     } catch (error) {
//       console.error('Error sending data to Contentful:', error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   } else {
//     res.status(405).json({ error: 'Method Not Allowed' });
//   }
// }