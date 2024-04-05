
import type { NextApiRequest, NextApiResponse } from 'next'
 
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const fetchData = await fetch('http://localhost:4000/api/apartments')
    const data = await fetchData.json()

    res.status(200).json({ data })
  } else {
    // Handle any other HTTP method
  }
}