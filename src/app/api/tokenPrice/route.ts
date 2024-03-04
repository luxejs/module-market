// app/tokenPrice/route.ts

export async function GET(request: Request) {
    const symbol = 'COMAI'; // Ensure this symbol is correct and supported
    const id = 29509
    const url = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?id=${id}`;

    try {
        const response = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                'X-CMC_PRO_API_KEY': process.env.CMC_API_KEY!,
            },
        });

        if (!response.ok) {
            // Log the status code and response body for debugging
            console.error(`Error fetching data: ${response.status}`, await response.text());
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        const price = parseFloat(data.data[id].quote.USD.price).toFixed(2)
        const percentChange = parseFloat(data.data[id].quote.USD.percent_change_1h).toFixed(2)+ "%"
        // const formattedPercentChange = (percentChange * 100).toFixed(2) + "%";


        return new Response(JSON.stringify({ price, percentChange }), {
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 's-maxage=60, stale-while-revalidate',
            },
        });
    } catch (error) {
        // Log the error for debugging
        console.error('Error in GET function:', error);
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}
