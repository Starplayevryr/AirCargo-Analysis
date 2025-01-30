import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar'; // Import Sidebar component
import Navbar from './Navbar'; // Import Navbar component
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Leaflet CSS for map styling
import L from 'leaflet'; // Import Leaflet for custom icons

const RouteMap = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    // Fetch route data from the API
    const fetchRoutes = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/routes/two');
        const data = await response.json();

        // Function to fetch coordinates for airports
        const fetchCoordinates = async (address) => {
          const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${address}&key=5ecbc748a42c46f88dd2e1bb8dff2d5e`);
          const data = await response.json();
          const { lat, lng } = data.results[0]?.geometry || {};
          return { lat, lng };
        };

        // Fetch coordinates for each route's origin and destination
        const locationsData = [];
        for (let route of data) {
          const originCoords = await fetchCoordinates(route.origin_airport);
          const destinationCoords = await fetchCoordinates(route.dest_port);

          if (originCoords.lat && destinationCoords.lat) {
            locationsData.push({
              origin: route.origin_airport,
              originCoords,
              destination: route.dest_port,
              destinationCoords,
            });
          }
        }

        setLocations(locationsData);
      } catch (error) {
        console.error('Error fetching routes:', error);
      }
    };

    fetchRoutes();
  }, []);

  // Custom icon using a local image from the public folder
  const customIcon = new L.Icon({
    iconUrl: '/images/ballonpopup.png', // Local image path
    iconSize: [25, 25], // Adjust size if needed
    iconAnchor: [12, 25], // Anchor point of the icon (to adjust position)
    popupAnchor: [0, -25], // Anchor point for the popup
  });

  return (
    <div style={{ height: '500px' }}>
      <MapContainer center={[51.505, -0.09]} zoom={2} style={{ width: '100%', height: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {locations.map((location, index) => (
          <React.Fragment key={index}>
            {/* Origin Marker with custom icon */}
            <Marker position={[location.originCoords.lat, location.originCoords.lng]} icon={customIcon}>
              <Popup>{location.origin}</Popup>
            </Marker>

            {/* Destination Marker with custom icon */}
            <Marker position={[location.destinationCoords.lat, location.destinationCoords.lng]} icon={customIcon}>
              <Popup>{location.destination}</Popup>
            </Marker>

            {/* Add a line between the origin and destination */}
            <Polyline
              positions={[
                [location.originCoords.lat, location.originCoords.lng],
                [location.destinationCoords.lat, location.destinationCoords.lng],
              ]}
              color="blue"
            />
          </React.Fragment>
        ))}
      </MapContainer>
    </div>
  );
};

const RoutesPage = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [newRoute, setNewRoute] = useState({
    origin_airport: '',
    dest_port: '',
    flightnum: '',
    distance_miles: '',
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Make API call to save the new route
    try {
      const response = await fetch('http://localhost:3000/api/routes/add-route', {  // Change the URL to your backend route
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newRoute),
      });

      if (response.ok) {
        const newRouteData = await response.json();
        // Optionally, re-fetch or update the routes list after adding a new route
        setIsFormVisible(false); // Hide form after submission
        setNewRoute({
          origin_airport: '',
          dest_port: '',
          flightnum: '',
          distance_miles: '',
        });
        alert('New route added successfully!');
      }
    } catch (error) {
      console.error('Error adding route:', error);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-3 p-0">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="col-md-9 p-0">
          <Navbar /> {/* Navbar Component */}
          <div className="mt-5 pt-4">
            {/* Route Map */}
            <h2>Routes Management</h2>
            <RouteMap /> {/* Displaying the map for routes */}

            {/* Button to Add New Route */}
            <button className="btn btn-primary mt-3" onClick={() => setIsFormVisible(!isFormVisible)}>
              {isFormVisible ? 'Cancel' : 'Add New Route'}
            </button>

            {/* Add Route Form */}
            {isFormVisible && (
              <form onSubmit={handleFormSubmit} className="mt-4">
                <div className="form-group">
                  <label>Origin Airport</label>
                  <input
                    type="text"
                    className="form-control"
                    value={newRoute.origin_airport}
                    onChange={(e) => setNewRoute({ ...newRoute, origin_airport: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Destination Port</label>
                  <input
                    type="text"
                    className="form-control"
                    value={newRoute.dest_port}
                    onChange={(e) => setNewRoute({ ...newRoute, dest_port: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Flight Number</label>
                  <input
                    type="text"
                    className="form-control"
                    value={newRoute.flightnum}
                    onChange={(e) => setNewRoute({ ...newRoute, flightnum: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Distance (Miles)</label>
                  <input
                    type="number"
                    className="form-control"
                    value={newRoute.distance_miles}
                    onChange={(e) => setNewRoute({ ...newRoute, distance_miles: e.target.value })}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-success mt-3">Add Route</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoutesPage;
