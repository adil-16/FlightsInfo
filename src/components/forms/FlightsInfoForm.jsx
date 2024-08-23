import React, { useState } from "react";
import axios from "axios";

const FlightDetailsForm = ({ onDataFetched }) => {
  const [formData, setFormData] = useState({
    arrivalAirport: "",
    departureAirport: "",
    arrivalDate: "",
    departureDate: "",
  });
  const [flightData, setFlightData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { arrivalAirport, departureAirport, arrivalDate, departureDate } =
      formData;

    if (
      (!arrivalAirport && !departureAirport) ||
      (!arrivalDate && !departureDate)
    ) {
      console.log("Please provide at least one airport and one date.");
      return;
    }
    console.log(import.meta.env.VITE_BASE_URL);
    setLoading(true);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/flight-instances`,
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
    } finally {
      setLoading(false);
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
            className="w-full md:w-auto px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 relative"
            disabled={loading}
          >
            {loading ? (
              <span className="absolute inset-0 flex items-center justify-center">
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="none"
                    d="M4 12a8 8 0 1116 0 8 8 0 01-16 0z"
                  />
                </svg>
              </span>
            ) : (
              "Check Details"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FlightDetailsForm;
