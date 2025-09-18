import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useState } from 'react';
import storePic from "../assets/images/skintestStore.avif";
import masterIcon from "../assets/images/master-front.avif"
import L from 'leaflet';

export default function LeafletMap() {
    const storeIcon = new L.Icon({
        iconUrl: storePic,
        iconSize: [30, 30],
        iconAnchor: [15, 30],
        popupAnchor: [0, -30],
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
        shadowSize: [60, 33],
        shadowAnchor: [15, 30],
    });

    const LocationMarker = () => {
        const [position, setPosition] = useState(null)
        const map = useMapEvents({
            click() {
                map.locate()
            },
            locationfound(e) {
                setPosition(e.latlng)
                map.flyTo(e.latlng, map.getZoom())
            },
        })

        return position === null ? null : (
            <Marker position={position}>
                <Popup>您在這裡對吧?</Popup>
            </Marker>
        )
    }
    const locations = [
        { id:1, name: "1號店", position: [25.0330, 121.5654], shop: storePic, address: "台北市精華區美容路三段1樓", desc: "頂級護膚中心" },
        { id:2, name: "旗艦店", position: [25.0875, 121.5250], shop: storePic, address: "台北市保養區美麗路三段1樓", desc: "專業美容儀專賣店" },
    ];
    return (

        locations.map((loc) => (
            <div className="store-box" key={loc.id}>
                <MapContainer                    
                    center={loc.position}
                    zoom={20}
                    style={{ height: "350px", width: "350px", marginBottom: '20px', borderRadius: "999px", overFlow:"visible" }}
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                    />
                    <Marker position={loc.position} icon={storeIcon}>
                        <Popup>
                            <div style={{ textAlign: 'center', minWidth: '200px' }}>
                                {/* 店家圖片 */}
                                <img
                                    src={loc.shop}
                                    alt={loc.name}
                                    style={{
                                        width: '100%',
                                        maxWidth: '200px',
                                        height: '120px',
                                        objectFit: 'cover',
                                        borderRadius: '8px',
                                        marginBottom: '10px'
                                    }}
                                />
                                {/* 店名 */}
                                <h3 style={{
                                    margin: '0 0 8px 0',
                                    fontSize: '16px',
                                    fontWeight: 'bold',
                                    color: '#333'
                                }}>
                                    {loc.name}
                                </h3>
                                {/* 地址 */}
                                <p style={{
                                    margin: '0 0 8px 0',
                                    fontSize: '14px',
                                    color: '#666',
                                    lineHeight: '1.4'
                                }}>
                                    📍 {loc.address}
                                </p>
                                {/* 描述 */}
                                <p style={{
                                    margin: '0',
                                    fontSize: '14px',
                                    color: '#888',
                                    fontStyle: 'italic'
                                }}>
                                    {loc.desc}
                                </p>
                            </div>
                        </Popup>
                    </Marker>
                    <LocationMarker />
                </MapContainer>
                <p className="store-name">{loc.name}</p>
                <p className="store-address">{loc.address}</p>
            </div>
        ))

    );
}
