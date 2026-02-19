import { MapContainer, Marker, Popup, TileLayer, ZoomControl } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'react-photo-view/dist/react-photo-view.css'
import './App.css'
import SideBar from './component/SideBar'
import TopBar from './component/TopBar'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import { useState } from 'react'
import L from 'leaflet'

function App() {

  const customIcon = L.icon({
    iconUrl: "/location.png",
    iconSize: [35, 35],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
  })

  const [selectedPlace, setSelectedPlace] = useState(null)

  const places = [
    {
      id: 1,
      name: "Mall Cijantung",
      type: "Pusat perbelanjaan",
      date: "17 Jan 2023",
      coords: [-6.31249, 106.86203],
      images: ["/src/assets/Cijantung1.JPG", "/src/assets/Cijantung2.JPG", "/src/assets/Cijantung3.JPG"],
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
      images: ["/src/assets/Pejaten1.jpeg", "/src/assets/Pejaten2.jpeg", "/src/assets/Pejaten3.jpeg"],
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
      images: ["/src/assets/Aeon1.JPG", "/src/assets/Aeon2.JPG", "/src/assets/Aeon3.JPG"],
      story: "Tempat Paling Banyak Ketemu",
      meet: 3,
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
      images: ["/src/assets/PIM1.jpeg", "/src/assets/PIM2.jpeg"],
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
  ] 



  return (
    <div className="h-screen max-w-screen  flex flex-col bg-[#232526]">
      <TopBar />

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
              <ZoomControl position='topright' />
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
