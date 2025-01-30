CREATE DATABASE air;
USE air;


CREATE TABLE shipments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cargo_name VARCHAR(255),
    origin VARCHAR(255),
    destination VARCHAR(255),
    shipment_date DATE,
    status VARCHAR(50)
);

CREATE TABLE routes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    route_name VARCHAR(255),
    distance_km INT
);

INSERT INTO shipments (cargo_name, origin, destination, shipment_date, status)
VALUES ('Electronics', 'New York', 'Los Angeles', '2024-12-29', 'In Transit');


INSERT INTO shipments (cargo_name, origin, destination, shipment_date, status)
VALUES ('Mechanical', 'London ', 'Australia', '2024-12-29', 'In trans');
