"use client";
import axios from "axios";
import { useEffect, useState } from "react";

function SteamPage() {
    const [deals, setDeals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDeals = async () => {
            try {
                const response = await axios.get(
                    "https://www.cheapshark.com/api/1.0/deals"
                );

                setDeals(response.data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchDeals();
    }, []);

    if (loading) {
        return (
            <div className="text-center mt-20">
                <h1 className="text-4xl">Loading...</h1>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center mt-20">
                <h1 className="text-4xl text-red-500">Error: {error}</h1>
            </div>
        );
    }

    return (
        <div className="bg-black min-h-screen">
            <h1 className="text-4xl text-center my-5 text-white">Steam Deals API</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5">
                {deals.map((item) => (
                    <div key={item.dealID} className="bg-purple-900 w-full rounded-xl p-3 hover:shadow-lg hover:scale-105 transition">
                        <h2 className="text-center text-lg font-bold mb-2 line-clamp-2 text-white">{item.title}</h2>

                        {item.thumb && (
                            <img
                                src={item.thumb}
                                alt={item.title}
                                className="w-full h-40 object-cover rounded"
                            />
                        )}

                        <p className="text-sm text-white mt-2">
                            <span className="font-bold">Price: ${item.salePrice}</span> <span className="line-through text-red-300">${item.normalPrice}</span>
                        </p>

                        <p className="text-center text-yellow-300 mt-3 text-sm font-bold">Save {Math.round((1 - item.salePrice / item.normalPrice) * 100)}%</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default  SteamPage;