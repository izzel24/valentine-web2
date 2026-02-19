export default function TopBar({showHeatmap, setShowHeatmap}) {
    return (
        <div className="min-h-[13%] bg-[#1a1a1a] border-b border-gray-800 flex items-center justify-between px-6 text-white">

            <h1 className="text-lg uppercase font-bold text-[#dedede] font-sans">
                Izzel & El Map
            </h1>

            <div className="flex gap-6 text-sm text-gray-300">
                <button onClick={() => alert("coming soon")} className="hover:text-pink-400 transition">
                    Overview
                </button>
                <button
                    onClick={() => setShowHeatmap(prev => !prev)}
                    className={`hover:text-pink-400 transition ${showHeatmap ? "text-pink-400" : ""
                        }`}
                >
                    Heatmap
                </button>
                <button onClick={() => alert("coming soon")} className="hover:text-pink-400 transition">
                    Malls
                </button>
            </div>
        </div>
    )
}
