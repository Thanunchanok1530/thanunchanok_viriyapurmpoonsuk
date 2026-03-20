"use client";
import axios from "axios";
import { useEffect, useState } from "react";

function NewPage() {
    const [news, setNews] = useState<any[]>([]);
    const [selected, setSelected] = useState<any | null>(null);
    const placeholder =
        'data:image/svg+xml;utf8,' +
        encodeURIComponent(
            '<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400"><rect width="100%" height="100%" fill="#e5e7eb"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#9ca3af" font-size="20">ไม่มีรูปภาพ</text></svg>'
        );

    useEffect(() => {
        let mounted = true;
        async function fetchNews() {
            try {
                const res = await axios.get(
                    "https://newsdata.io/api/1/latest?apikey=pub_5281385ba9e64182517f03918881c22ab1bf1&language=th"
                );
                // API may return results or data; fall back to any reasonable shape
                const items = res.data?.results || res.data?.data || res.data || [];
                if (mounted) setNews(items || []);
            } catch (err) {
                console.error("fetch news error", err);
            }
        }

        fetchNews();
        return () => {
            mounted = false;
        };
    }, []);

    function getImage(item: any) {
        return (
            item.image_url ||
            item.image ||
            item.thumbnail ||
            item.thumbnail_url ||
            item.images?.jpg?.image_url ||
            item.media?.[0]?.media_url ||
            (typeof item.enclosure === 'string' ? item.enclosure : item.enclosure?.url) ||
            null
        );
    }

    return (
        <div className="p-4">
            <h1 className="text-4xl text-center mt-5">รายการข่าวจาก News</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                {news.map((item, idx) => {
                    const img = getImage(item) || placeholder;
                    return (
                        <div key={item.link || item.title || idx} className="bg-orange-600 w-full rounded-xl p-2">
                            <div className="h-48 overflow-hidden rounded-md bg-gray-200 flex items-center justify-center">
                                {
                                    // clicking image opens details
                                }
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={img}
                                    alt={item.title || 'news image'}
                                    className="w-full h-full object-cover cursor-pointer"
                                    onClick={() => setSelected(item)}
                                    onError={(e) => {
                                        const t = e.currentTarget as HTMLImageElement;
                                        if (t.src !== placeholder) t.src = placeholder;
                                    }}
                                />
                            </div>
                            <h2 className="text-lg font-bold mt-2">{item.title}</h2>
                            <div className="text-sm line-clamp-3">{item.description}</div>
                        </div>
                    );
                })}
            </div>

            {selected && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                    <div className="bg-white rounded-lg max-w-3xl w-full overflow-auto">
                        <div className="p-4 border-b flex justify-between items-start">
                            <div>
                                <h3 className="text-xl font-semibold">{selected.title}</h3>
                                <div className="text-sm text-gray-600">{selected.pubDate || selected.pubDate || ''}</div>
                            </div>
                            <button
                                onClick={() => setSelected(null)}
                                className="text-gray-600 hover:text-gray-900"
                            >
                                ปิด
                            </button>
                        </div>
                        <div className="p-4">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={getImage(selected) || placeholder}
                                alt={selected.title}
                                className="w-full h-64 object-cover rounded-md mb-4"
                                onError={(e) => {
                                    const t = e.currentTarget as HTMLImageElement;
                                    if (t.src !== placeholder) t.src = placeholder;
                                }}
                            />
                            <p className="text-gray-800 mb-4">{selected.description}</p>
                            <div className="flex gap-2">
                                <a
                                    href={selected.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="px-4 py-2 bg-amber-600 text-white rounded-md"
                                >
                                    อ่านต้นฉบับ
                                </a>
                                <button
                                    onClick={() => setSelected(null)}
                                    className="px-4 py-2 border rounded-md"
                                >
                                    ปิด
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default NewPage;