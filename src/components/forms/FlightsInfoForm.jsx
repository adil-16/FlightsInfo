import React, { useState } from "react";
import axios from "axios";
import { getAirport } from "airport-codes";

const FlightDetailsForm = ({ onDataFetched }) => {
  const [formData, setFormData] = useState({
    arrivalAirport: "",
    departureAirport: "",
    arrivalDate: "",
    departureDate: "",
  });
  const [flightData, setFlightData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { arrivalAirport, departureAirport, arrivalDate, departureDate } =
      formData;

    // Basic validation
    if (
      (!arrivalAirport && !departureAirport) ||
      (!arrivalDate && !departureDate)
    ) {
      console.log("Please provide at least one airport and one date.");
      return;
    }

    try {
      const response = await axios.get(
        "http://localhost:5000/api/flight-instances",
        {
          params: {
            arrivalDate: arrivalDate || undefined,
            departureDate: departureDate || undefined,
            arrivalAirport: arrivalAirport || undefined,
            departureAirport: departureAirport || undefined,
            version: "v2",
            codeType: "IATA,ICAO",
          },
        }
      );
      setFlightData(response.data.data);
      onDataFetched(response.data.data);
      console.log("Flight Details:", response.data);
    } catch (error) {
      console.error("Error fetching flight details:", error);
    }
  };
  // console.log(flightData);

  return (
    <div className="bg-gray-200 text-black p-10 rounded-lg shadow-xl max-w-4xl mx-auto">
      <p className="text-2xl font-semibold text-center text-gray-700 mb-6">
        Check Any Flight Details Easily
      </p>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Arrival Airport
            </label>
            <input
              type="text"
              name="arrivalAirport"
              value={formData.arrivalAirport}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
              placeholder="Enter IATA or ICAO code"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Departure Airport
            </label>
            <input
              type="text"
              name="departureAirport"
              value={formData.departureAirport}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
              placeholder="Enter IATA or ICAO code"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Arrival Date
            </label>
            <input
              type="date"
              name="arrivalDate"
              value={formData.arrivalDate}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Departure Date
            </label>
            <input
              type="date"
              name="departureDate"
              value={formData.departureDate}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
            />
          </div>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="w-full md:w-auto px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Check Details
          </button>
        </div>
      </form>
      {/* {flightData && (
        <div className="mt-8">
          <h2 className="text-xl font-bold text-gray-800">Flight Details</h2>
          {flightData.map((flight) => (
            <div
              key={flight.flightNumber}
              className="p-4 bg-white shadow-md rounded-lg mb-4"
            >
              <h3 className="text-lg font-semibold">{flight.flightNumber}</h3>
              <p>
                <strong>Arrival Airport:</strong> {flight.arrival.airport}
              </p>
              <p>
                <strong>Departure Airport:</strong> {flight.departure.airport}
              </p>
              <p>
                <strong>Arrival Time:</strong> {flight.arrival.scheduled}
              </p>
              <p>
                <strong>Departure Time:</strong> {flight.departure.scheduled}
              </p>
            </div>
          ))}
        </div>
      )} */}
    </div>
  );
};

export default FlightDetailsForm;
