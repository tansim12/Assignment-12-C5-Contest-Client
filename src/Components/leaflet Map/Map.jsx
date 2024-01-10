import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Heading from "../../shared/Heading";
import "leaflet/dist/leaflet.css";

const Map = () => {
  const position = [24.006, 89.2372];

  const mapStyle = {
    height: "400px", // Set the height of the map
    width: "100%", // Set the width of the map
  };

  return (
    <>
      {/* heading  */}
      <div className="mt-24">
        <Heading
          title={"Find Us"}
          subtitle={
            "Mention nearby landmarks or directions to help visitors find the location easily."
          }
          additionalInfo=" We're located at:
        123 Main Street, Rajshahi , Pabna , 6600
        Contact: +8801849184000 | tansimahmedtasjid@email.com"
        />
      </div>
      <div className="overflow-hidden">
        <MapContainer
          center={position}
          zoom={13}
          scrollWheelZoom={false}
          style={mapStyle}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </>
  );
};

export default Map;
