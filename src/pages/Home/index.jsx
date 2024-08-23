import React, { useState, useEffect } from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import FlightDetailsForm from "../../components/forms/FlightsInfoForm";
import airports from "airport-codes";
import { getName } from "country-list";

const Home = () => {
  const [flightData, setFlightData] = useState(null);
  const [airportNames, setAirportNames] = useState({});
  const [countryNames, setCountryNames] = useState({});

  const handleDataFetched = (data) => {
    setFlightData(data);
  };

  useEffect(() => {
    if (flightData?.length > 0) {
      const fetchAirportAndCountryNames = () => {
        const airportCodes = [
          ...new Set([
            ...flightData.map((flight) => flight.arrival?.airport?.iata || ""),
            ...flightData.map(
              (flight) => flight.departure?.airport?.iata || ""
            ),
          ]),
        ];

        const airportNames = airportCodes.reduce((acc, code) => {
          const airport = airports.findWhere({ iata: code });
          if (airport) {
            acc[code] = airport.get("name");
          }
          return acc;
        }, {});

        const countryCodes = [
          ...new Set([
            ...flightData.map((flight) => flight.arrival?.country?.code || ""),
            ...flightData.map(
              (flight) => flight.departure?.country?.code || ""
            ),
          ]),
        ];

        const countryNames = countryCodes.reduce((acc, code) => {
          const countryName = getName(code) || "N/A";
          acc[code] = countryName;
          return acc;
        }, {});

        setAirportNames(airportNames);
        setCountryNames(countryNames);
      };

      fetchAirportAndCountryNames();
    }
  }, [flightData]);

  console.log(flightData);
  console.log(airportNames);
  console.log(countryNames);

  return (
    <>
      <Navbar />
      <div className="space-y-6 mb-16">
        <p className="text-4xl font-bold text-red-600 text-center pt-6">
          WELCOME CUSTOMER!
        </p>
        <div className="flex flex-col md:flex-row items-center justify-between p-12">
          <div className="p-8">
            <p className="text-3xl font-semibold">
              Start planning your next trip
            </p>
            <p className="text-xl text-gray-600 mt-4">
              Thinking of travelling somewhere soon? Here are some options to
              help you get started.
            </p>
            <p className="text-xl text-gray-600 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto itaque fuga nihil ipsam sapiente officiis dolorum
              delectus eaque! Ratione, omnis. Accusamus dolorum temporibus
              officiis et recusandae, a tempora facere maiores! Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Architecto itaque
              fuga nihil ipsam sapiente officiis dolorum delectus eaque!
              Ratione, omnis. Accusamus dolorum temporibus officiis et
              recusandae, a tempora facere maiores!
            </p>
          </div>
          <img
            src="airport.jpg"
            alt="home"
            className="h-full w-full md:w-1/2 object-cover rounded-lg"
          />
        </div>
        <p className="text-4xl font-bold text-center text-red-600">
          LET'S GET STARTED
        </p>
        <div className="pt-8">
          <FlightDetailsForm onDataFetched={handleDataFetched} />
        </div>
        {flightData?.length > 0 && (
          <div className="pt-12">
            <h2 className="text-4xl text-center underline font-bold text-red-600 mb-6">
              Flight Details
            </h2>
            <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {flightData.map((flight) => (
                <div
                  key={flight.flightNumber}
                  className="p-4 bg-white border rounded-lg"
                >
                  <h3 className="text-lg font-semibold text-center mb-4">
                    Flight Number: {flight.flightNumber}
                  </h3>
                  <p className="mb-2">
                    <strong>Arrival Country:</strong>{" "}
                    {countryNames[flight.arrival?.country?.code] ||
                      flight.arrival?.country?.code ||
                      "N/A"}
                  </p>
                  <p className="mb-2">
                    <strong>Arrival Airport:</strong>{" "}
                    {airportNames[flight.arrival?.airport?.iata] ||
                      flight.arrival?.airport?.iata ||
                      "N/A"}
                  </p>
                  <p className="mb-2">
                    <strong>Departure Airport:</strong>{" "}
                    {airportNames[flight.departure?.airport?.iata] ||
                      flight.departure?.airport?.iata ||
                      "N/A"}
                  </p>
                  <p className="mb-2">
                    <strong>Departure Country:</strong>{" "}
                    {countryNames[flight.departure?.country?.code] ||
                      flight.departure?.country?.code ||
                      "N/A"}
                  </p>
                  <p className="mb-2">
                    <strong>Arrival Time:</strong>{" "}
                    {flight.arrival?.time?.utc || "N/A"}
                  </p>
                  <p className="mb-2">
                    <strong>Departure Time:</strong>{" "}
                    {flight.departure?.time?.utc || "N/A"}
                  </p>
                  <p className="mb-2">
                    <strong>Flight Type:</strong> {flight?.flightType || "N/A"}
                  </p>
                  <p className="mb-2">
                    <strong>No of Stops:</strong>{" "}
                    {flight?.segmentInfo?.numberOfStops || "No Stops"}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Home;
