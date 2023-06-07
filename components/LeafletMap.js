import { updateLocation } from "@/slices/userLocation";
import 'leaflet/dist/leaflet.css';
import React, { useEffect, useRef } from "react";
import { GeoJSON, MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { useDispatch, useSelector } from "react-redux";
import { useGeolocation } from "react-use";
import { icon, map } from "leaflet"
import AnimatedButton from "./AnimatedButton";

export default function LeafletMap(props) {
  const dispatch = useDispatch();

  const { latitude, longitude } = useGeolocation()

  useEffect(() => {
    if (latitude) {
      dispatch(updateLocation(latitude, longitude))
    }
  })
  
  const geoJsonStyle = {
    color: 'green',
    weight: 2,
    opacity: 1,
    fillOpacity: 0.5,
  };

  const soonGezemStreets = props.gezem

  const geojson = {
    type: "FeatureCollection",
    features: soonGezemStreets
  };
  
  const geoJsonRef = useRef(null);
  
  useEffect(() => {
    console.log(`FLYTO: ${props.flyto}`);
    if (props.flyto) {mapRef.current.flyTo([props.flyto[1]-0.0006, props.flyto[0]], 17);} //the -0.0006 is so the bottom sheet doesn't hide the marker
    }, [props.flyto]);
  
  useEffect(() => {
    if (geoJsonRef.current) {
      geoJsonRef.current.clearLayers().addData(geojson);
    }
  }, [geojson]);

  const defaultProps = {
    center: {
      lat: 31.8930000,
      lng: 34.8110556
    },
    zoom: 15
  };

  const mapRef = useRef(null);

  const handleFlyTo = (lat, lng) => {
    if (lng) mapRef.current.flyTo([lat, lng], 17);
  }
  
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <MapContainer className="absolute top-0 z-0" ref={mapRef} zoomControl={false} center={latitude ? [latitude, longitude] : Object.values(defaultProps.center)} zoom={defaultProps.zoom} style={{ height: '100vh', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors"
        />
        <GeoJSON data={geojson} style={geoJsonStyle} ref={geoJsonRef} />
        {latitude && <Marker position={[latitude, longitude]} icon={icon({
          iconUrl: "locationMarker.svg",
          shadowUrl: "locationMarkerShadow.png",
          iconSize: [20, 20],
          shadowSize:   [20, 20],
          shadowAnchor: [10, 7],
          className: "animate-pulse"
        })}>
        </Marker>}
        {props.flyto && <Marker position={[props.flyto[1], props.flyto[0]]} icon={icon({
          iconUrl: "pinMarker.svg",
          iconSize: [30, 30],
          iconAnchor: [20, 20]
        })}>
        </Marker>}
        <AnimatedButton onClick={() => handleFlyTo(latitude, longitude)} style={{"font-variation-settings":  `'FILL' 1,
  'wght' 400,
  'GRAD' 0,
  'opsz' 48`}} className="material-symbols-outlined text-center z-[401] absolute bottom-32 right-10 bg-[#f1f3f4] rounded-full h-16 w-16 p-3 text-[36px] shadow-lg text-gray-800">
        my_location
        </AnimatedButton>

      </MapContainer>
    </div>
  );
}
