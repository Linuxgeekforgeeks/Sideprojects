import { useEffect, useState } from "react";

function TripList() {
  const [trips, setTrips] = useState([]);
  const [url, setUrl] = useState("http://localhost:4000/trips");
  useEffect(() => {
    fetchTrips();
  }, [url]);

  console.log(trips);
  const fetchTrips = async () => {
    await fetch(url)
      .then((res) => res.json())
      .then((json) => setTrips(json));
  };
  const handleLocation=(trip)=>{
    const filteredTrips=trips.filter(trip=>trip.Location===trip)
    console.log(filteredTrips)
  }

  return (
    <div>
      <h2>TripLists</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        {trips.map((trip, index) => (
          <ul
            style={{
              border: "2px solid black",
              padding: "2rem",
              borderRadius: ".6rem",
            }}
            key={index}
          >
            <h1>{trip.title}</h1>
            <p>{trip.price}</p>
          </ul>
        ))}
      </div>
      <div className="filter">
        <button onClick={() => setUrl("http://localhost:4000/trips")}>All Trips</button>
        <button onClick={() => setUrl("http://localhost:4000/trips?Location=Europe")}>
          European Trips
        </button>
        <button onClick={() => setUrl("http://localhost:4000/trips?Location=American")}>
          American Trips
        </button>
      </div>
    </div>
  );
}

export default TripList;
