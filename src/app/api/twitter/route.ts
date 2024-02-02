// import { NextApiRequest, NextApiResponse } from 'next';
// // import { getLatestTweet } from '../../utils/twitterService';
// // import cors from 'cors';

// // Initialize the cors middleware
// const CORS = cors({
//   methods: ['GET'],
// });

// // Helper method to wait for a middleware to execute before continuing
// // And to throw an error when an error happens in a middleware
// // returns Promise object reject on error; resolve,return,result on success
// function runMiddleware(req: NextApiRequest, res: NextApiResponse, fn: any) {
//   return new Promise((resolve, reject) => {
//     fn(req, res, (result: any) => {
//       if (result instanceof Error) {
//         return reject(result);
//       }
//       return resolve(result);
//     });
//   });
// }

// export default async function handler(
//     req: NextApiRequest, 
//     res: NextApiResponse
// ) {
//   // Run cors middleware
//   await runMiddleware(req, res, CORS)
  
//   if (req.method === 'GET') {
//     try {
//       const twitterUsername = '20thirdPro';
//       const apiKey = process.env.NEXT_PUBLIC_TWITTER_API_KEY;
//       const apiSecretKey = process.env.NEXT_PUBLIC_TWITTER_API_SECRET_KEY;
//       const accessToken = process.env.NEXT_PUBLIC_TWITTER_ACCESS_TOKEN;
//       const accessTokenSecret = process.env.NEXT_PUBLIC_TWITTER_ACCESS_TOKEN_SECRET;
  
//       const tweetData = await getLatestTweet(
//           twitterUsername, 
//           apiKey!, 
//           apiSecretKey!, 
//           accessToken!, 
//           accessTokenSecret!
//       );
//       return res.status(200).json(tweetData);

//     } catch (error) {
//       console.error('Error fetching latest tweet tuntun:', error);
//       res.status(500).json({ error: 'Internal Server Error tuntun' });
//     }
//   } else {
//     res.setHeader('Allow', ['GET']);
//     return res.status(405).end(`Method ${req.method} Not Allowed bruv route`);
//   }
// }

// export default async function GET() {
//   let tweetData;
//   try {
//     const twitterUsername = '20thirdPro';
//     const apiKey = process.env.NEXT_PUBLIC_TWITTER_API_KEY;
//     const apiSecretKey = process.env.NEXT_PUBLIC_TWITTER_API_SECRET_KEY;
//     const accessToken = process.env.NEXT_PUBLIC_TWITTER_ACCESS_TOKEN;
//     const accessTokenSecret = process.env.NEXT_PUBLIC_TWITTER_ACCESS_TOKEN_SECRET;

//     tweetData = await getLatestTweet(
//       twitterUsername,
//       apiKey!,
//       apiSecretKey!,
//       accessToken!,
//       accessTokenSecret!
//     );
//   } catch (error) {
//     console.error('Error fetching latest tweet getLatestTweet func type:', error);
//     throw 'Internal Server Error--> custom'
//   } finally { return tweetData }
// }
