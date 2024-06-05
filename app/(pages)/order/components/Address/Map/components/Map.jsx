import React, {
  useState,
  useContext,
  useEffect,
  useMemo,
  useCallback,
} from "react";

import { MapContainer, Marker, TileLayer,Popup } from "react-leaflet";
import Image from "next/image";

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
const center = [35.7249, -308.5904 ];
const zoom = 16;
function DisplayPosition({ map }) {
  const [position, setPosition] = useState(() => map.getCenter());

  const onClick = useCallback(() => {
    map.setView(center, zoom);
  }, [map]);

  const onMove = useCallback(() => {
    setPosition(map.getCenter());
  }, [map]);

  useEffect(() => {
    map.on("move", onMove);
    return () => {
      map.off("move", onMove);
    };
  }, [map, onMove]);

  return (
    <p>
      latitude: {position.lat.toFixed(4)}, longitude: {position.lng.toFixed(4)}{" "}
      <button onClick={onClick}>reset</button>
    </p>
  );
}

export default function MyMap() {
  const [map, setMap] = useState(null);
  const displayMap = useMemo(
    () => (
      <section className="relative">
 
      <MapContainer
        center={center}
        zoom={zoom}
        scrollWheelZoom={true}
        ref={setMap}
      >

<Image alt="" src='/images/icons/pin.png' width={40} height={50} className="z-[1000] absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%]"/>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      
      </MapContainer>
      </section>
    ),
    [],
  );
  return (
    <>
      <div>
        {map ? <DisplayPosition map={map} /> : null}
        {displayMap}
      </div>
    </>
  );
}
