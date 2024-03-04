export async function GET(request: Request) {
    const res = await fetch(`https://reqres.in/api/users/`, {
      headers: {
        'Content-Type': 'application/json',
        // 'API-Key': process.env.CMC_API_KEY!,
      },
    })
    const product = await res.json()
   
    return Response.json({ product })
  }