import { updateLocation } from "@/slices/userLocation";
import { icon, map } from "leaflet";
import "leaflet-doubletapdrag";
import "leaflet-doubletapdragzoom";
import 'leaflet/dist/leaflet.css';
import React, { useEffect, useRef } from "react";
import { GeoJSON, MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { useDispatch, useSelector } from "react-redux";
import { useGeolocation } from "react-use";
import AnimatedButton from "./AnimatedButton";

export default function LeafletMap(props) {
  const dispatch = useDispatch();

  const { latitude, longitude } = useGeolocation()

  useEffect(() => {
    if (latitude) {
      dispatch(updateLocation(latitude, longitude))
    }
  }, [latitude, longitude, dispatch])

  const geoJsonStyle = {
    color: '#4DB685',
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
    if (props.flyto) {
      mapRef.current.flyTo([props.flyto[0] - 0.0006, props.flyto[1]], 17)
    } //the -0.0006 is so the bottom sheet doesn't hide the marker
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

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100%', width: '100%'}}>
      <MapContainer className="absolute top-0 z-0" ref={mapRef} zoomControl={false} doubleTapDragZoom={'center'} doubleTapDragZoomOptions={{ reverse: false }} center={latitude ? [latitude, longitude] : Object.values(defaultProps.center)} zoom={defaultProps.zoom} style={{ height: '100%', width: '100%'}}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors"
        />
        <GeoJSON data={geojson} style={geoJsonStyle} ref={geoJsonRef} />
        {latitude && <Marker position={[latitude, longitude]} icon={icon({
          iconUrl: "locationMarker.svg",
          shadowUrl: "locationMarkerShadow.png",
          iconSize: [20, 20],
          shadowSize: [20, 20],
          shadowAnchor: [10, 7],
          className: "animate-pulse"
        })}>
        </Marker>}
        {props.flyto && (props.flyto.length > 2) && <Marker position={[props.flyto[0], props.flyto[1]]} icon={icon({
          iconUrl: "pinMarker.svg",
          iconSize: [30, 30],
          iconAnchor: [20, 20]
        })}>
        </Marker>}


      </MapContainer>
    </div>
  );
}
