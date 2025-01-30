import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar'; // Import Sidebar component
import Navbar from './Navbar'; // Import Navbar component

const AuditLogPage = () => {
  const [auditLogs, setAuditLogs] = useState([]);
  const [filters, setFilters] = useState({
    tableName: '',
    action: '',
    startDate: '',
    endDate: '',
    page: 1,
    limit: 10,
  });
  const [totalLogs, setTotalLogs] = useState(0); // Total number of audit logs
  const [loading, setLoading] = useState(false);
  const [tables, setTables] = useState([]); // Available table names

  // Fetch available tables from the backend
  useEffect(() => {
    const fetchTables = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/audit-logs/tables');
        const data = await response.json();
        setTables(data.tables); // Set the available tables in state
      } catch (error) {
        console.error('Error fetching tables:', error);
      }
    };

    fetchTables();
  }, []);

  // Fetch audit logs based on filters
  useEffect(() => {
    const fetchAuditLogs = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `http://localhost:3000/api/audit-logs?page=${filters.page}&limit=${filters.limit}&tableName=${filters.tableName}&action=${filters.action}&startDate=${filters.startDate}&endDate=${filters.endDate}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setAuditLogs(data.data);
          setTotalLogs(data.total); // Set the total number of logs for pagination
        } else {
          console.error('Failed to fetch audit logs');
        }
      } catch (error) {
        console.error('Error fetching audit logs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAuditLogs();
  }, [filters]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
      page: 1, // Reset to page 1 when filters change
    }));
  };

  const handlePagination = (page) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      page,
    }));
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
          <Navbar />
          <div className="mt-5 pt-4">
            <h2>Audit Logs Management</h2>

            {/* Filter Section */}
            <div className="filters mt-4">
              <select
                name="tableName"
                onChange={handleFilterChange}
                className="form-control mb-2"
              >
                <option value="">Filter by Table</option>
                {tables.map((table) => (
                  <option key={table} value={table}>
                    {table}
                  </option>
                ))}
              </select>

              <select
                name="action"
                onChange={handleFilterChange}
                className="form-control mb-2"
              >
                <option value="">Filter by Action</option>
                <option value="INSERT">INSERT</option>
                <option value="UPDATE">UPDATE</option>
                <option value="DELETE">DELETE</option>
              </select>

              <input
                type="date"
                name="startDate"
                onChange={handleFilterChange}
                className="form-control mb-2"
              />
              <input
                type="date"
                name="endDate"
                onChange={handleFilterChange}
                className="form-control mb-2"
              />
              <button
                className="btn btn-primary mt-3"
                onClick={() => setFilters({ ...filters, page: 1 })}
              >
                Apply Filters
              </button>
            </div>

            {/* Loading State */}
            {loading ? (
              <p>Loading...</p>
            ) : (
              <div className="audit-logs-table mt-4">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Action</th>
                      <th>Table Name</th>
                      <th>Record ID</th>
                      <th>Old Value</th>
                      <th>New Value</th>
                      <th>Created At</th>
                    </tr>
                  </thead>
                  <tbody>
                    {auditLogs.map((log) => (
                      <tr key={log.id}>
                        <td>{log.action}</td>
                        <td>{log.table_name}</td>
                        <td>{log.record_id}</td>
                        <td>{JSON.stringify(log.old_value)}</td>
                        <td>{JSON.stringify(log.new_value)}</td>
                        <td>{new Date(log.created_at).toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Pagination */}
            <div className="pagination mt-4">
              <button
                className="btn btn-secondary"
                disabled={filters.page === 1}
                onClick={() => handlePagination(filters.page - 1)}
              >
                Previous
              </button>
              <span className="mx-2">{filters.page}</span>
              <button
                className="btn btn-secondary"
                disabled={totalLogs <= filters.page * filters.limit}
                onClick={() => handlePagination(filters.page + 1)}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditLogPage;
