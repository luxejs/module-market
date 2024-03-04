// components/Ticker.js
import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import { SiCoinmarketcap } from "react-icons/si";

interface TickerDataInterface {
    price: string
    percentChange: string
}

const Ticker = () => {
    const [tickerData, setTickerData] = useState<TickerDataInterface | null>(null);

    useEffect(() => {
        const fetchPrice = async () => {
            try {
                const response = await fetch('/api/tokenPrice') // Adjust the path if necessary
                if (!response.ok) {
                    throw new Error('Network response was not ok')
                }
                const data: TickerDataInterface = await response.json()
                setTickerData(data)
            } catch (error) {
                console.error('Failed to fetch price:', error)
            }
        };

        fetchPrice()
    }, [])

    return (
        <Link href="https://coinmarketcap.com/currencies/commune-ai/" target='_blank'>
            <div className="stats stats-vertical lg:stats-horizontal shadow">
                <div className="stat">
                    <div className="stat-title flex items-center"><SiCoinmarketcap />COMAI</div>
                    <div className="stat-value">{tickerData ? `$${tickerData.price}` : 'Loading...'}</div>
                    <div className={`stat-desc ${tickerData ? parseFloat(tickerData.percentChange) < 0 ? 'text-red-600' : 'text-green-600' : null}`}>
                        {tickerData ? `${tickerData.percentChange} (1h)` : 'Loading...'}
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Ticker;
