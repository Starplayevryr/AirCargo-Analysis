import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import { FaUsers, FaBriefcase, FaPlane, FaMapMarkerAlt } from 'react-icons/fa';
import Sidebar from './Sidebar';
import { Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import Navbar from './Navbar';

// Register necessary chart elements
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Dashboard = () => {
  const [stats, setStats] = useState({
    total_passengers: 0,
    total_customers: 0,
    total_employees: 0,
    total_aircrafts: 0,
    total_airports: 0,
    total_routes: 0,
  });
  const [loadingStats, setLoadingStats] = useState(true);
  const [cargoData, setCargoData] = useState([]);
  const [bookingData, setBookingData] = useState([]);
  const [cargoTrafficData, setCargoTrafficData] = useState([]);
  const [pieChartData, setPieChartData] = useState({});
  const [loading, setLoading] = useState(true);
  const [jobTitleCounts, setJobTitleCounts] = useState({}); // State for job title counts
  const [seatOccupancyData, setSeatOccupancyData] = useState([]); // State for seat occupancy data

  const fetchData = async (url, setData) => {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Failed to fetch ${url}`);
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchData('http://localhost:3000/api/stats', data => {
      setStats(data);
      setLoadingStats(false);
    });
    fetchData('http://localhost:3000/api/cargo-weight-distribution', data => {
      setCargoData(Object.keys(data).map(key => ({ label: key, value: data[key] })));
    });
    fetchData('http://localhost:3000/api/bookings', setBookingData);
    fetchData('http://localhost:3000/api/cargo-traffic', data => {
      setCargoTrafficData(data);

      // Prepare data for the Pie chart
      const labels = data.map(item => item.status);
      const counts = data.map(item => item.count);
      setPieChartData({
        labels,
        datasets: [
          {
            data: counts,
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          },
        ],
      });
    });

    fetchData('http://localhost:3000/api/employee-hierarchy', data => {
      setJobTitleCounts(data.jobTitleCounts); // Set job title counts from API response
    });

    fetchData('http://localhost:3000/api/seat-occupancy', data => {
      setSeatOccupancyData(data); // Set seat occupancy data from API response
    });
  }, []);

  // Prepare data for job title counts bar chart
  const jobTitleLabels = Object.keys(jobTitleCounts);
  const jobTitleValues = Object.values(jobTitleCounts);

  // Prepare data for seat occupancy bar chart
  const seatLabels = seatOccupancyData.map(item => item.seat_num);
  const seatValues = seatOccupancyData.map(item => item.occupancy_count);

  return (
    <div className="dashboard-container">
      <Navbar />
      <Sidebar />
      <div className="dashboard-content">
        <div className="stats-cards">
          {loadingStats ? (
            <p>Loading statistics...</p>
          ) : (
            <>
              <div className="stats-card card-passengers">
                <FaUsers className="stats-icon passengers" />
                <h3>Total Passengers</h3>
                <p>{stats.total_passengers}</p>
              </div>
              <div className="stats-card card-customers">
                <FaBriefcase className="stats-icon customers" />
                <h3>Total Customers</h3>
                <p>{stats.total_customers}</p>
              </div>
              <div className="stats-card card-employees">
                <FaPlane className="stats-icon employees" />
                <h3>Total Employees</h3>
                <p>{stats.total_employees}</p>
              </div>
              <div className="stats-card card-aircrafts">
                <FaMapMarkerAlt className="stats-icon aircrafts" />
                <h3>Total Aircrafts</h3>
                <p>{stats.total_aircrafts}</p>
              </div>
              <div className="stats-card card-aircrafts">
                <FaMapMarkerAlt className="stats-icon aircrafts" />
                <h3>Total Airports</h3>
                <p>{stats.total_airports}</p>
              </div>
              <div className="stats-card card-aircrafts">
                <FaMapMarkerAlt className="stats-icon aircrafts" />
                <h3>Total Routes</h3>
                <p>{stats.total_routes}</p>
              </div>
            </>
          )}
        </div>

        <div className="chart-and-table">
          <div className="chart-container">
            <h3>Cargo Weight Distribution</h3>
            {cargoData.length ? (
              <Bar
                data={{
                  labels: cargoData.map(item => item.label),
                  datasets: [
                    {
                      data: cargoData.map(item => item.value),
                      backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    },
                  ],
                }}
              />
            ) : (
              <p>No cargo data available.</p>
            )}
          </div>

          <div className="booking-table-container">
            <h3>Booking Data</h3>
            {bookingData.length ? (
              <table className="booking-table">
                <thead>
                  <tr>
                    <th>Booking Date</th>
                    <th>Total Payment</th>
                    <th>Total Bookings</th>
                  </tr>
                </thead>
                <tbody>
                  {bookingData.map((booking, index) => (
                    <tr key={index}>
                      <td>{booking.booking_date}</td>
                      <td>{booking.total_payment}</td>
                      <td>{booking.total_bookings}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No booking data available.</p>
            )}
          </div>
        </div>

        <div className="chart-and-table">
          <div className="chart-container">
            <h3>Cargo Traffic Data (Pie Chart)</h3>
            {cargoTrafficData.length ? (
              <Pie data={pieChartData} />
            ) : (
              <p>No cargo traffic data available.</p>
            )}
          </div>

          {/* New Bar Chart for Job Title Counts */}
          <div className="chart-container">
            <h3>Job Title Distribution</h3>
            {jobTitleCounts && jobTitleLabels.length ? (
              <Bar
                data={{
                  labels: jobTitleLabels,
                  datasets: [
                    {
                      label: 'Number of Employees',
                      data: jobTitleValues,
                      backgroundColor: 'rgba(153, 102, 255, 0.2)',
                      borderColor: 'rgba(153, 102, 255, 1)',
                      borderWidth: 1,
                    },
                  ],
                }}
              />
            ) : (
              <p>No job title data available.</p>
            )}
          </div>

          {/* New Bar Chart for Seat Occupancy */}
          <div className="chart-container">
            <h3>Seat Occupancy</h3>
            {seatOccupancyData.length ? (
              <Bar
                data={{
                  labels: seatLabels,
                  datasets: [
                    {
                      label: 'Occupancy Count',
                      data: seatValues,
                      backgroundColor: 'rgba(255, 159, 64, 0.2)',
                      borderColor: 'rgba(255, 159, 64, 1)',
                      borderWidth: 1,
                    },
                  ],
                }}
              />
            ) : (
              <p>No seat occupancy data available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
