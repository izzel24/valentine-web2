import { useState } from "react"
import { PhotoProvider, PhotoView } from "react-photo-view"


export default function SideBar({ selectedPlace }) {

    const [activeTab, setActiveTab] = useState("ulasan")

    if (!selectedPlace) {
        return (
            <div className="h-full bg-[#1e1f22] text-gray-400 flex items-center justify-center">
                Klik marker untuk lihat tempat 📍
            </div>
        )
    }

    return (
        <PhotoProvider>
        <div className="h-full bg-[#1e1f22] p-4 overflow-y-scroll scrollbar-hide text-white">
            <div className="flex overflow-x-auto aspect-square scrollbar-hide">
                {selectedPlace.images.map((img, i) => (
                    <PhotoView src={img}>
                        <img
                            key={i}
                            src={img}
                            className="w-full object-cover"
                        />
                    </PhotoView>
                    ))}
            </div>
            <div className="flex flex-col">
                    <h1 className="text-xl font-bold">
                        {selectedPlace.name}
                    </h1>
                    <h2 className="text-sm text-gray-400">
                        {selectedPlace.type}
                    </h2>
            </div>
            <p className="mt-2 text-sm">
                {selectedPlace.story}
            </p>

                <div className="mt-5 flex gap-2 justify-around">
                    <button
                        onClick={() => setActiveTab("ulasan")}
                        className={`p-2 border-b ${activeTab === "ulasan" ? "border-white text-white" : "border-transparent text-gray-500"
                            }`}
                    >
                        Ulasan
                    </button>

                    <button
                        onClick={() => setActiveTab("ringkasan")}
                        className={`p-2 border-b ${activeTab === "ringkasan" ? "border-white text-white" : "border-transparent text-gray-500"
                            }`}
                    >
                        Ringkasan
                    </button>
                </div>
                <div className="mt-4">
                    {activeTab === "ulasan" && (
                        <div className="flex flex-col gap-3">
                            {selectedPlace.reviews.map((review, i) => (
                                <div
                                    key={i}
                                    className="bg-[#2a2b2f] p-3 rounded-xl"
                                >
                                    <div className="flex justify-between items-center">
                                        <span className="font-medium">{review.user}</span>
                                        <span className="text-yellow-400">
                                            {"★".repeat(review.rating)}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-300 mt-1">
                                        {review.comment}
                                    </p>
                                </div>
                            ))}
                        </div>
                    )}

                    {activeTab === "ringkasan" && (
                        <div className="text-sm text-gray-300">
                            <p>Tanggal Pertama Ketemu: {selectedPlace.date}</p>
                            <p>Lokasi: {selectedPlace.name}</p>
                            <p>Total Ketemu: {selectedPlace.meet}</p>
                            <p className="mt-2">{selectedPlace.story}</p>
                        </div>
                    )}
                </div>


        </div>
        </PhotoProvider>
    )
}
