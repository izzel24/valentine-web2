import { MapContainer, Marker, Popup, TileLayer, useMap, ZoomControl } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'react-photo-view/dist/react-photo-view.css'
import './App.css'
import SideBar from './component/SideBar'
import TopBar from './component/TopBar'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import { useEffect, useState } from 'react'
import L from 'leaflet'
import "leaflet.heat"

import pejaten1 from './assets/Pejaten1.jpeg'
import pejaten2 from './assets/Pejaten2.jpeg'
import pejaten3 from './assets/Pejaten3.jpeg'
import cijantung1 from './assets/Cijantung1.JPG'
import cijantung2 from './assets/Cijantung2.JPG'
import cijantung3 from './assets/Cijantung3.JPG'
import aeon1 from './assets/Aeon1.JPG'
import aeon2 from './assets/Aeon2.JPG'
import aeon3 from './assets/Aeon3.JPG'
import PIM1 from './assets/PIM1.jpeg'
import PIM2 from './assets/PIM2.jpeg'





function App() {
  
  const customIcon = L.icon({
    iconUrl: "/location.png",
    iconSize: [35, 35],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
  })
  
  const [showHeatmap, setShowHeatmap] = useState(false)
  const [selectedPlace, setSelectedPlace] = useState(null)

  const places = [
    {
      id: 1,
      name: "Mall Cijantung",
      type: "Pusat perbelanjaan",
      date: "17 Jan 2023",
      coords: [-6.31249, 106.86203],
      images: [cijantung1, cijantung2, cijantung3],
      story: "Tempat pertama kali kita ketemu",
      meet: 3,
      reviews: [
        {
          user: "Aku",
          rating: 5,
          comment: "Tempatnya nyaman untuk pacaran, ada bombom car bisa tabrak pacar secara legal"
        },
        {
          user: "Kamu",
          rating: 5,
          comment: "Saya suka main hp pacar saya di tempat ini"
        },
      ]
    },
    {
      id: 2,
      name: "Pejaten Village",
      type: "Pusat perbelanjaan",
      date: "17 Jan 2023",
      coords: [-6.2805764066736645, 106.82928217142073],
      images: [pejaten1, pejaten2, pejaten3],
      story: "Tempat Paling Enak Pacaran",
      meet: 3,
      reviews: [
        {
          user: "Aku",
          rating: 5,
          comment: "Ada gokana bisa gokana date"
        },
        {
          user: "Kamu",
          rating: 3,
          comment: "Gak suka gokana aad togenya"
        },
      ]
    },
    {
      id: 3,
      name: "Aeon Mall Tanjung Barat",
      type: "Pusat perbelanjaan",
      date: "17 Feb 2023",
      coords: [-6.306591665866241, 106.84020989552936],
      images: [aeon1, aeon2, aeon3],
      story: "Tempat Paling Banyak Ketemu",
      meet: 12,
      reviews: [
        {
          user: "Aku",
          rating: 5,
          comment: "Ada berbagai macam hak di sini seru karna di funworld ada bowling"
        },
        {
          user: "Kamu",
          rating: 5,
          comment: "Banyak photobooth di sini"
        },
      ]
    },
    {
      id: 4,
      name: "Pondok Indah Mall",
      type: "Pusat perbelanjaan",
      date: "18 Des 2023",
      coords: [-6.264922262150313, 106.78426421564707],
      images: [PIM1, PIM2],
      story: "Tempat buat pusing aku karna banyak orang",
      meet: 1,
      reviews: [
        {
          user: "Aku",
          rating: 2,
          comment: "Banyak orang dan mahal"
        },
        {
          user: "Kamu",
          rating: 5,
          comment: "Banyak orang bisa liat cowok lain"
        },
      ]
    },
    {
      id: 5,
      name: "Living World Alam Sutera",
      type: "Pusat perbelanjaan",
      date: "-",
      coords: [-6.244152724876947, 106.65311372436506],
      images: [],
      story: "-",
      meet: 1,
      reviews: [
        // {
        //   user: "Aku",
        //   rating: 2,
        //   comment: "Banyak orang dan mahal"
        // },
        // {
        //   user: "Kamu",
        //   rating: 5,
        //   comment: "Banyak orang bisa liat cowok lain"
        // },
      ]
    },
    {
      id: 6,
      name: "Mall @ Alam Sutera",
      type: "Pusat perbelanjaan",
      date: "-",
      coords: [-6.221497677798592, 106.6541528532011],
      images: [],
      story: "-",
      meet: 1,
      reviews: [
        // {
        //   user: "Aku",
        //   rating: 2,
        //   comment: "Banyak orang dan mahal"
        // },
        // {
        //   user: "Kamu",
        //   rating: 5,
        //   comment: "Banyak orang bisa liat cowok lain"
        // },
      ]
    },
    {
      id: 7,
      name: "Jakarta Premium Outlet",
      type: "Pusat perbelanjaan",
      date: "-",
      coords: [-6.220147277334117, 106.65968903785605],
      images: [],
      story: "-",
      meet: 1,
      reviews: [
        // {
        //   user: "Aku",
        //   rating: 2,
        //   comment: "Banyak orang dan mahal"
        // },
        // {
        //   user: "Kamu",
        //   rating: 5,
        //   comment: "Banyak orang bisa liat cowok lain"
        // },
      ]
    },
    {
      id: 8,
      name: "Ikea Alam Sutera",
      type: "Pusat perbelanjaan",
      date: "-",
      coords: [-6.219441284336853, 106.6631084780317],
      images: [],
      story: "-",
      meet: 1,
      reviews: [
        // {
        //   user: "Aku",
        //   rating: 2,
        //   comment: "Banyak orang dan mahal"
        // },
        // {
        //   user: "Kamu",
        //   rating: 5,
        //   comment: "Banyak orang bisa liat cowok lain"
        // },
      ]
    },
    {
      id: 9,
      name: "UBM Alam Sutera",
      type: "Pusat perbelanjaan",
      date: "-",
      coords: [-6.225191920096773, 106.65721188203753],
      images: [],
      story: "-",
      meet: 1,
      reviews: [
        // {
        //   user: "Aku",
        //   rating: 2,
        //   comment: "Banyak orang dan mahal"
        // },
        // {
        //   user: "Kamu",
        //   rating: 5,
        //   comment: "Banyak orang bisa liat cowok lain"
        // },
      ]
    },
  ] 



  return (
    <div className="h-screen max-w-screen  flex flex-col bg-[#232526]">
      <TopBar showHeatmap={showHeatmap} setShowHeatmap={setShowHeatmap} />

      {/* CONTENT AREA */}
      <div className="flex flex-1 min-h-0">

        {/* SIDEBAR */}
        <div className="w-80 h-full min-h-0">
          <SideBar selectedPlace={selectedPlace} />
        </div>

        {/* MAP */}
        <div className="flex-1 h-full p-5">
          <PhotoProvider>
            <MapContainer
              center={[-6.31249, 106.86203]}
              zoom={17}
              zoomControl={false}
              className="h-full w-full rounded-2xl"
              

            >
              <TileLayer
                // attribution='&copy; OpenStreetMap &copy; CartoDB'
                url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
              />
              {showHeatmap && <HeatmapLayer places={places} />}
              {showHeatmap && <HeatmapLegend />}
              {places.map((place) => (
                <Marker key={place.id} position={place.coords} icon={customIcon}>
                  <Popup className='min-w-[250px]' autoClose={false}>
                    <div
                      onClick={() => setSelectedPlace(place)}
                      className="cursor-pointer "
                    >
                      <div className='flex overflow-x-auto scrollbar-hide'>
                      {place.images.map((img, i) => (
                        <PhotoView src={img}>
                          <img
                            key={i}
                            src={img}
                            className="w-full h-28 object-cover"
                          />
                        </PhotoView>
                      ))}
                      </div>
                      <div className='flex flex-col gap-2 px-1'>
                      <div className='flex flex-col'>
                        <h1 className="font-semibold !m-0 text-[1vw]">{place.name}</h1>
                        <h2 className='font-medium !m-0 text-[.65vw]'>{place.type}</h2>
                      </div>
                      <p className="text-[.75vw] !m-0 text-blue-400 pb-2">
                        Klik untuk lihat detail
                      </p>
                      </div>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </PhotoProvider>
        </div>

      </div>
    </div>
  )
}

export default App


function HeatmapLayer({ places }) {
  const map = useMap()

  useEffect(() => {
    const heatData = places.map(place => [
      place.coords[0],
      place.coords[1],
      place.meet || 1
    ])

    const heatLayer = L.heatLayer(heatData, {
      radius: 50,
      blur: 20,
      gradient: {
        0.2: "#ffb3c6",
        0.4: "#ff4d6d",
        0.6: "#ff006e",
        0.8: "#d00000",
      }
    })

    heatLayer.addTo(map)

    return () => {
      map.removeLayer(heatLayer)
    }
  }, [map, places])

  return null
}

function HeatmapLegend() {
  const map = useMap()

  useEffect(() => {
    const legend = L.control({ position: "bottomright" })

    legend.onAdd = function () {
      const div = L.DomUtil.create("div", "info legend")

      div.innerHTML = `
        <div style="
          background: #1e1f22;
          padding: 10px;
          border-radius: 12px;
          color: white;
          font-size: 12px;
          box-shadow: 0 0 10px rgba(0,0,0,0.5);
        ">
          <div style="margin-bottom:6px;font-weight:600;">
            Intensitas Ketemu
          </div>

          <div style="
            height: 10px;
            width: 150px;
            background: linear-gradient(to right,
              #ffb3c6,
              #ff4d6d,
              #ff006e,
              #d00000
            );
            border-radius: 6px;
            margin-bottom: 4px;
          "></div>

          <div style="display:flex; justify-content:space-between;">
            <span>Jarang</span>
            <span>Sering</span>
          </div>
        </div>
      `

      return div
    }

    legend.addTo(map)

    return () => {
      legend.remove()
    }
  }, [map])

  return null
}