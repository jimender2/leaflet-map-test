import logo from './logo.svg';
import './App.css';
import { render } from 'react-dom';
// import { MapContainer } from 'react-leaflet/MapContainer'
// import { TileLayer } from 'react-leaflet/TileLayer'
// import { useMap } from 'react-leaflet/hooks'
import { Marker, Popup, MapContainer, TileLayer, useMap, Circle, CircleMarker, Polyline, Polygon, Rectangle } from 'react-leaflet';

import "leaflet/dist/leaflet.css";

import { useState, useEffect, useInsertionEffect } from "react";
import L from "leaflet";



function App() {
  const center = [51.505, -0.09]

  const polyline = [
    [51.505, -0.09],
    [51.51, -0.1],
    [51.51, -0.12],
  ]

  const multiPolyline = [
    [
      [51.5, -0.1],
      [51.5, -0.12],
      [51.52, -0.12],
    ],
    [
      [51.5, -0.05],
      [51.5, -0.06],
      [51.52, -0.06],
    ],
  ]

  const polygon = [
    [51.515, -0.09],
    [51.52, -0.1],
    [51.52, -0.12],
  ]

  // const multiPolygon = [
  //   [
  //     [51.51, -0.12],
  //     [51.51, -0.13],
  //     [51.53, -0.13],
  //   ],
  //   [
  //     [51.51, -0.05],
  //     [51.51, -0.07],
  //     [51.53, -0.07],
  //   ],
  // ]

  // const multiPolygon = fetch('http://localhost:8000');
  // var multiPolygon = {};

  const [multiPolygon, setMultiPolygon] = useState('');

  useEffect(() => {
    fetch(`/hello`)
      .then((response) => response.json())
      .then((result) => setMultiPolygon(result)); //console.log(response));
  }, []);

  const rectangle = [
    [51.49, -0.08],
    [51.5, -0.06],
  ]

  const fillBlueOptions = { fillColor: 'blue' }
  const blackOptions = { color: 'black' }
  const limeOptions = { color: 'lime' }
  const purpleOptions = { color: 'purple' }
  const redOptions = { color: 'red' }

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <MapContainer
          center={[51.505, -0.09]}
          zoom={13}
          style={{ width: "1000px", height: "650px" }}
          preferCanvas={true}
          renderer={L.canvas()}
          updateWhenIdle={true}
          updateWhenZooming={false}
          smoothFactor={30}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
          <Polygon pathOptions={purpleOptions} positions={multiPolygon} />

        </MapContainer>
      </header>
    </div >
  );
}

export default App;
