// // pages/api/medium.ts
// import { NextApiRequest, NextApiResponse } from 'next';
// import axios from 'axios';
// import { parseString } from 'xml2js';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   try {
//     const response = await axios.get('https://medium.com/feed/@harpreetw');
//     const xmlData = response.data;

//     parseString(xmlData, (err, result) => {
//       if (err) {
//         console.error('Error parsing XML:', err);
//         res.status(500).json({ error: 'Internal Server Error' });
//       } else {
//         const articles = result.rss.channel[0].item;
//         res.status(200).json({ articles });
//       }
//     });
//   } catch (error) {
//     console.error('Error fetching Medium RSS feed:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// }

// pages/api/medium.ts
import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { parseString } from 'xml2js';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await axios.get('https://medium.com/feed/@harpreetw');
    const xmlData = response.data;

    console.log(xmlData);

    parseString(xmlData, (err, result) => {
      if (err) {
        console.error('Error parsing XML:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        const articles = result.rss.channel[0].item;
        res.status(200).json({ articles });
      }
    });
  } catch (error) {
    console.error('Error fetching Medium RSS feed:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
