import React, {
  useState,
  useContext,
  useEffect,
  useMemo,
  useCallback,
} from "react";

import {
  MapContainer, Marker, TileLayer, Popup, LayerGroup,
  LayersControl
} from "react-leaflet";
import Image from "next/image";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import { RadiusBottomleftOutlined } from "@ant-design/icons";
const center = [35.7249, -308.5904];
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
      <section className="relative xl:w-full  mx-auto">
        <MapContainer
          center={center}
          zoom={zoom}
          scrollWheelZoom={true}
          ref={setMap}
        >
          <Image
            alt=""
            src="/images/icons/pin.png"
            width={40}
            height={50}
            className="absolute w-[30px] h-auto xl:w-[40px]  right-[50%] top-[50%] z-[1000] translate-x-[50%] translate-y-[-50%]"
          />



          <TileLayer
            attribution="Google Maps"
            url="https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"
          />

        </MapContainer>
      </section>
    ),
    [],
  );
  return (
    <>
      <div className="xl:w-full  w-[90%] mx-auto">
        {/* {map ? <DisplayPosition map={map} /> : null} */}
        {displayMap}
      </div>
    </>
  );
}
