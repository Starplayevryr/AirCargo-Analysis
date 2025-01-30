

select * from aircraft;

desc aircraft;

INSERT INTO Aircraft (capacity, brand, createdAt, updatedAt) VALUES
(200, 'Airbus', '2025-01-06 11:00:00', '2025-01-06 11:00:00'),
(250, 'Boeing', '2025-01-06 11:01:00', '2025-01-06 11:01:00'),
(180, 'Embraer', '2025-01-06 11:02:00', '2025-01-06 11:02:00'),
(300, 'Bombardier', '2025-01-06 11:03:00', '2025-01-06 11:03:00'),
(150, 'Cessna', '2025-01-06 11:04:00', '2025-01-06 11:04:00'),
(220, 'McDonnell Douglas', '2025-01-06 11:05:00', '2025-01-06 11:05:00'),
(280, 'Lockheed Martin', '2025-01-06 11:06:00', '2025-01-06 11:06:00'),
(170, 'Dassault', '2025-01-06 11:07:00', '2025-01-06 11:07:00'),
(190, 'Gulfstream', '2025-01-06 11:08:00', '2025-01-06 11:08:00'),
(160, 'Beechcraft', '2025-01-06 11:09:00', '2025-01-06 11:09:00'),
(210, 'Piper', '2025-01-06 11:10:00', '2025-01-06 11:10:00'),
(240, 'Antonov', '2025-01-06 11:11:00', '2025-01-06 11:11:00'),
(130, 'Sukhoi', '2025-01-06 11:12:00', '2025-01-06 11:12:00'),
(290, 'Tupolev', '2025-01-06 11:13:00', '2025-01-06 11:13:00'),
(180, 'Ilyushin', '2025-01-06 11:14:00', '2025-01-06 11:14:00');




INSERT INTO Aircraft (capacity, brand, createdAt, updatedAt) VALUES
(175, 'Mitsubishi', '2025-01-06 11:15:00', '2025-01-06 11:15:00'),
(300, 'Comac', '2025-01-06 11:16:00', '2025-01-06 11:16:00'),
(200, 'Bombardier', '2025-01-06 11:17:00', '2025-01-06 11:17:00'),
(225, 'De Havilland', '2025-01-06 11:18:00', '2025-01-06 11:18:00'),
(280, 'Boeing Business Jet', '2025-01-06 11:19:00', '2025-01-06 11:19:00'),
(160, 'Fairchild Dornier', '2025-01-06 11:20:00', '2025-01-06 11:20:00'),
(260, 'Hawker', '2025-01-06 11:21:00', '2025-01-06 11:21:00'),
(180, 'Learjet', '2025-01-06 11:22:00', '2025-01-06 11:22:00'),
(190, 'Northrop Grumman', '2025-01-06 11:23:00', '2025-01-06 11:23:00'),
(240, 'British Aerospace', '2025-01-06 11:24:00', '2025-01-06 11:24:00');

INSERT INTO Aircraft (capacity, brand, createdAt, updatedAt) VALUES
(270, 'Fokker', '2025-01-06 11:25:00', '2025-01-06 11:25:00'),
(185, 'Saab', '2025-01-06 11:26:00', '2025-01-06 11:26:00'),
(310, 'Airbus A380', '2025-01-06 11:27:00', '2025-01-06 11:27:00'),
(200, 'Boeing 787', '2025-01-06 11:28:00', '2025-01-06 11:28:00');

select * from customers;
select * from aircraft;

INSERT INTO Customers (f_name, l_name, date_of_birth, gender, email, phone_number, address, createdAt, updatedAt) VALUES
('Ava', 'King', '1991-06-14', 'Female', 'avaking@example.com', '9012345678', '1313 Poplar Street, Hill Valley', '2025-01-06 16:20:00', '2025-01-06 16:20:00'),
('Ethan', 'Wright', '1988-12-27', 'Male', 'ethanwright@example.com', '8123456789', '1414 Sycamore Road, Twin Peaks', '2025-01-06 16:20:00', '2025-01-06 16:20:00'),
('Isabella', 'Scott', '1996-03-02', 'Female', 'isabellascott@example.com', '7890123456', '1515 Dogwood Lane, Emerald City', '2025-01-06 16:20:00', '2025-01-06 16:20:00'),
('Liam', 'Martins', '1990-09-19', 'Male', 'liammartins@example.com', '6789012345', '1616 Juniper Avenue, Mystic Falls', '2025-01-06 16:20:00', '2025-01-06 16:20:00'),
('Charlotte', 'Davis', '1987-11-07', 'Female', 'charlottedavis@example.com', '5678901234', '1717 Willow Court, Bedford Falls', '2025-01-06 16:20:00', '2025-01-06 16:20:00'),
('Matthew', 'Evans', '1989-05-10', 'Male', 'matthewevans@example.com', '4567890123', '1818 Elm Grove, Springfield', '2025-01-06 16:20:00', '2025-01-06 16:20:00'),
('Amelia', 'Baker', '1992-01-31', 'Female', 'ameliabaker@example.com', '3456789012', '1919 Birch Avenue, South Park', '2025-01-06 16:20:00', '2025-01-06 16:20:00'),
('Benjamin', 'Turner', '1984-06-06', 'Male', 'benjaminturner@example.com', '2345678901', '2020 Pine Hill, Gravity Falls', '2025-01-06 16:20:00', '2025-01-06 16:20:00'),
('Harper', 'Campbell', '1995-08-12', 'Female', 'harpercampbell@example.com', '1234567890', '2121 Aspen Trail, Elmore', '2025-01-06 16:20:00', '2025-01-06 16:20:00'),
('Lucas', 'Mitchell', '1993-04-28', 'Male', 'lucasmitchell@example.com', '9876543210', '2222 Maple Street, Pawnee', '2025-01-06 16:20:00', '2025-01-06 16:20:00'),
('Ella', 'Reed', '1986-12-13', 'Female', 'ellareed@example.com', '8765432109', '2323 Oak Boulevard, Stars Hollow', '2025-01-06 16:20:00', '2025-01-06 16:20:00'),
('Henry', 'Parker', '1985-07-25', 'Male', 'henryparker@example.com', '7654321098', '2424 Cedar Place, River City', '2025-01-06 16:20:00', '2025-01-06 16:20:00'),
('Grace', 'Young', '1991-02-08', 'Female', 'graceyoung@example.com', '6543210987', '2525 Birch Street, Smallville', '2025-01-06 16:20:00', '2025-01-06 16:20:00'),
('Mason', 'Hill', '1988-03-21', 'Male', 'masonhill@example.com', '5432109876', '2626 Magnolia Way, Derry', '2025-01-06 16:20:00', '2025-01-06 16:20:00'),
('Chloe', 'Adams', '1994-10-17', 'Female', 'chloeadams@example.com', '4321098765', '2727 Poplar Street, Hawkins', '2025-01-06 16:20:00', '2025-01-06 16:20:00');


select * from users;

select * from airports;

INSERT INTO airports (airport_id, airport_name, city, country) VALUES
(72, 'Abu Dhabi International Airport', 'Abu Dhabi', 'UAE'),
(73, 'Doha International Airport', 'Doha', 'Qatar'),
(74, 'Muscat International Airport', 'Muscat', 'Oman'),
(75, 'Hanoi Noi Bai International Airport', 'Hanoi', 'Vietnam'),
(76, 'Ho Chi Minh Tan Son Nhat Airport', 'Ho Chi Minh City', 'Vietnam'),
(77, 'Taipei Taoyuan International Airport', 'Taipei', 'Taiwan'),
(78, 'Bangkok Don Mueang Airport', 'Bangkok', 'Thailand'),
(79, 'Kuala Lumpur Subang Airport', 'Kuala Lumpur', 'Malaysia'),
(80, 'Perth Airport', 'Perth', 'Australia'),
(81, 'Adelaide Airport', 'Adelaide', 'Australia'),
(82, 'Melbourne Tullamarine Airport', 'Melbourne', 'Australia'),
(83, 'Wellington International Airport', 'Wellington', 'New Zealand'),
(84, 'Christchurch International Airport', 'Christchurch', 'New Zealand'),
(85, 'Cape Town International Airport', 'Cape Town', 'South Africa'),
(86, 'Johannesburg Lanseria Airport', 'Johannesburg', 'South Africa'),
(87, 'Luanda Quatro de Fevereiro Airport', 'Luanda', 'Angola'),
(88, 'Casablanca Mohammed V Airport', 'Casablanca', 'Morocco'),
(89, 'Algiers Houari Boumediene Airport', 'Algiers', 'Algeria'),
(90, 'Lisbon Humberto Delgado Airport', 'Lisbon', 'Portugal'),
(91, 'Bratislava M. R. Štefánik Airport', 'Bratislava', 'Slovakia');


INSERT INTO airports (airport_id, airport_name, city, country)
VALUES
(2, 'Los Angeles International Airport', 'Los Angeles', 'USA'),
(3, 'Chicago O\'Hare International Airport', 'Chicago', 'USA'),
(4, 'London Heathrow Airport', 'London', 'UK'),
(5, 'Tokyo Narita Airport', 'Tokyo', 'Japan'),
(6, 'Paris Charles de Gaulle Airport', 'Paris', 'France'),
(7, 'Dubai International Airport', 'Dubai', 'UAE'),
(8, 'Singapore Changi Airport', 'Singapore', 'Singapore'),
(9, 'Sydney Kingsford Smith Airport', 'Sydney', 'Australia'),
(10, 'Hong Kong International Airport', 'Hong Kong', 'China'),
(11, 'Amsterdam Schiphol Airport', 'Amsterdam', 'Netherlands'),
(12, 'Frankfurt Airport', 'Frankfurt', 'Germany'),
(13, 'Beijing Capital International Airport', 'Beijing', 'China'),
(14, 'Seoul Incheon International Airport', 'Seoul', 'South Korea'),
(15, 'London Gatwick Airport', 'London', 'UK'),
(16, 'Dallas/Fort Worth International Airport', 'Dallas', 'USA'),
(17, 'Miami International Airport', 'Miami', 'USA'),
(18, 'San Francisco International Airport', 'San Francisco', 'USA'),
(19, 'Barcelona El Prat Airport', 'Barcelona', 'Spain'),
(20, 'Mexico City International Airport', 'Mexico City', 'Mexico'),
(21, 'Toronto Pearson International Airport', 'Toronto', 'Canada');
INSERT INTO airports (airport_id, airport_name, city, country) VALUES
(32, 'Vienna International Airport', 'Vienna', 'Austria'),
(33, 'Brisbane Airport', 'Brisbane', 'Australia'),
(34, 'Cape Town International Airport', 'Cape Town', 'South Africa'),
(35, 'Doha Hamad International Airport', 'Doha', 'Qatar'),
(36, 'Helsinki Vantaa Airport', 'Helsinki', 'Finland'),
(37, 'Oslo Gardermoen Airport', 'Oslo', 'Norway'),
(38, 'Copenhagen Kastrup Airport', 'Copenhagen', 'Denmark'),
(39, 'Johannesburg O.R. Tambo International Airport', 'Johannesburg', 'South Africa'),
(40, 'Rome Fiumicino Airport', 'Rome', 'Italy'),
(41, 'Athens Eleftherios Venizelos Airport', 'Athens', 'Greece'),
(42, 'Shanghai Pudong International Airport', 'Shanghai', 'China'),
(43, 'São Paulo Guarulhos International Airport', 'São Paulo', 'Brazil'),
(44, 'Lisbon Portela Airport', 'Lisbon', 'Portugal'),
(45, 'Madrid Barajas Airport', 'Madrid', 'Spain'),
(46, 'Manila Ninoy Aquino International Airport', 'Manila', 'Philippines'),
(47, 'Vancouver International Airport', 'Vancouver', 'Canada'),
(48, 'Vienna Schwechat Airport', 'Vienna', 'Austria'),
(49, 'Bangalore Kempegowda International Airport', 'Bangalore', 'India'),
(50, 'Hanoi Noi Bai International Airport', 'Hanoi', 'Vietnam'),
(51, 'Jakarta Soekarno-Hatta International Airport', 'Jakarta', 'Indonesia');

INSERT INTO airports (airport_id, airport_name, city, country) VALUES
(52, 'Buenos Aires Ministro Pistarini Airport', 'Buenos Aires', 'Argentina'),
(53, 'Denver International Airport', 'Denver', 'USA'),
(54, 'San Diego International Airport', 'San Diego', 'USA'),
(55, 'Philadelphia International Airport', 'Philadelphia', 'USA'),
(56, 'Zurich Kloten Airport', 'Zurich', 'Switzerland'),
(57, 'Osaka Kansai International Airport', 'Osaka', 'Japan'),
(58, 'Montreal Trudeau Airport', 'Montreal', 'Canada'),
(59, 'Brussels Airport', 'Brussels', 'Belgium'),
(60, 'Mumbai Chhatrapati Shivaji Airport', 'Mumbai', 'India'),
(61, 'Rio de Janeiro Galeão Airport', 'Rio de Janeiro', 'Brazil'),
(62, 'Auckland International Airport', 'Auckland', 'New Zealand'),
(63, 'Vienna Schwechat Airport', 'Vienna', 'Austria'),
(64, 'Athens International Airport', 'Athens', 'Greece'),
(65, 'Cairo International Airport', 'Cairo', 'Egypt'),
(66, 'Berlin Brandenburg Airport', 'Berlin', 'Germany'),
(67, 'Kuwait International Airport', 'Kuwait City', 'Kuwait'),
(68, 'Prague Václav Havel Airport', 'Prague', 'Czech Republic'),
(69, 'Colombo Bandaranaike International Airport', 'Colombo', 'Sri Lanka'),
(70, 'Lima Jorge Chávez International Airport', 'Lima', 'Peru'),
(71, 'Jeddah King Abdulaziz International Airport', 'Jeddah', 'Saudi Arabia');


INSERT INTO airports (airport_id, airport_name, city, country)
VALUES
(22, 'Zurich Airport', 'Zurich', 'Switzerland'),
(23, 'Kuala Lumpur International Airport', 'Kuala Lumpur', 'Malaysia'),
(24, 'Bangkok Suvarnabhumi Airport', 'Bangkok', 'Thailand'),
(25, 'Moscow Sheremetyevo Airport', 'Moscow', 'Russia'),
(26, 'Istanbul Airport', 'Istanbul', 'Turkey'),
(27, 'LAX Los Angeles International Airport', 'Los Angeles', 'USA'),
(28, 'Chennai International Airport', 'Chennai', 'India'),
(29, 'Munich Airport', 'Munich', 'Germany'),
(30, 'New Delhi Indira Gandhi Airport', 'New Delhi', 'India'),
(31, 'Dubai Al Maktoum International Airport', 'Dubai', 'UAE');


select * from passengers_on_flight;

INSERT INTO passengers_on_flight (customer_id, flight_id, seat_num, travel_date)
VALUES
(1, 1, 'A1', '2025-01-15'),
(2, 2, 'B2', '2025-01-16'),
(3, 3, 'C3', '2025-01-17'),
(4, 4, 'D4', '2025-01-18'),
(5, 5, 'E5', '2025-01-19'),
(6, 6, 'F6', '2025-01-20'),
(7, 7, 'G7', '2025-01-21'),
(8, 8, 'H8', '2025-01-22'),
(9, 9, 'I9', '2025-01-23'),
(10, 10, 'J10', '2025-01-24'),
(11, 11, 'K11', '2025-01-25'),
(12, 12, 'L12', '2025-01-26'),
(13, 13, 'M13', '2025-01-27'),
(14, 14, 'N14', '2025-01-28'),
(15, 15, 'O15', '2025-01-29'),
(16, 16, 'P16', '2025-01-30'),
(17, 17, 'Q17', '2025-02-01'),
(18, 18, 'R18', '2025-02-02'),
(19, 19, 'S19', '2025-02-03'),
(20, 20, 'T20', '2025-02-04'),
(21, 21, 'U21', '2025-02-05'),
(22, 22, 'V22', '2025-02-06'),
(23, 23, 'W23', '2025-02-07'),
(24, 24, 'X24', '2025-02-08'),
(25, 25, 'Y25', '2025-02-09'),
(26, 26, 'Z26', '2025-02-10'),
(27, 27, 'A27', '2025-02-11'),
(28, 28, 'B28', '2025-02-12'),
(29, 29, 'C29', '2025-02-13'),
(30, 30, 'D30', '2025-02-14');

INSERT INTO passengers_on_flight (customer_id, flight_id, seat_num, travel_date)
VALUES
(1, 1, 'A1', '2025-01-15'),
(2, 2, 'B2', '2025-01-16'),
(3, 3, 'C3', '2025-01-17'),
(4, 4, 'D4', '2025-01-18'),
(5, 5, 'E5', '2025-01-19'),
(6, 6, 'F6', '2025-01-20'),
(7, 7, 'G7', '2025-01-21'),
(8, 8, 'H8', '2025-01-22'),
(9, 9, 'I9', '2025-01-23'),
(10, 10, 'J10', '2025-01-24'),
(11, 11, 'K11', '2025-01-25'),
(12, 12, 'L12', '2025-01-26'),
(13, 13, 'M13', '2025-01-27'),
(14, 14, 'N14', '2025-01-28'),
(15, 15, 'O15', '2025-01-29'),
(16, 16, 'P16', '2025-01-30'),
(17, 17, 'Q17', '2025-02-01'),
(18, 18, 'R18', '2025-02-02'),
(19, 19, 'S19', '2025-02-03'),
(20, 20, 'T20', '2025-02-04'),
(21, 21, 'U21', '2025-02-05'),
(22, 22, 'V22', '2025-02-06'),
(23, 23, 'W23', '2025-02-07'),
(24, 24, 'X24', '2025-02-08'),
(25, 25, 'Y25', '2025-02-09'),
(26, 26, 'Z26', '2025-02-10'),
(27, 27, 'A27', '2025-02-11'),
(28, 28, 'B28', '2025-02-12'),
(29, 29, 'C29', '2025-02-13'),
(30, 30, 'D30', '2025-02-14'),
(31, 31, 'E31', '2025-02-15'),
(32, 32, 'F32', '2025-02-16'),
(33, 33, 'G33', '2025-02-17'),
(34, 34, 'H34', '2025-02-18'),
(35, 35, 'I35', '2025-02-19'),
(36, 36, 'J36', '2025-02-20'),
(37, 37, 'K37', '2025-02-21'),
(38, 38, 'L38', '2025-02-22'),
(39, 39, 'M39', '2025-02-23'),
(40, 40, 'N40', '2025-02-24'),
(41, 41, 'O41', '2025-02-25'),
(42, 42, 'P42', '2025-02-26'),
(43, 43, 'Q43', '2025-02-27'),
(44, 44, 'R44', '2025-02-28'),
(45, 45, 'S45', '2025-03-01'),
(46, 46, 'T46', '2025-03-02'),
(47, 47, 'U47', '2025-03-03'),
(48, 48, 'V48', '2025-03-04'),
(49, 49, 'W49', '2025-03-05'),
(50, 50, 'X50', '2025-03-06');

INSERT INTO Customers (f_name, l_name, date_of_birth, gender, email, phone_number, address, createdAt, updatedAt)
VALUES
('Samuel', 'Williams', '1993-05-18', 'Male', 'samuelwilliams@example.com', '3210987654', '3033 Cedar Lane, Riverton', NOW(), NOW()),
('Lily', 'Morris', '1990-11-30', 'Female', 'lilymorris@example.com', '4321987650', '4044 Pine Ridge, Lakeside', NOW(), NOW()),
('Oliver', 'Jackson', '1989-02-11', 'Male', 'oliverjackson@example.com', '5432109870', '5055 Oak Trail, Kingsport', NOW(), NOW()),
('Charlotte', 'Roberts', '1987-10-09', 'Female', 'charlotteroberts@example.com', '6543218765', '6066 Maple Road, Westfield', NOW(), NOW()),
('Daniel', 'Carter', '1991-04-22', 'Male', 'danielcarter@example.com', '7654321090', '7077 Birch Drive, Oakdale', NOW(), NOW()),
('Megan', 'Harris', '1992-07-17', 'Female', 'meganharris@example.com', '8765432100', '8088 Cedar Lane, Greenfield', NOW(), NOW()),
('Ethan', 'Walker', '1988-02-02', 'Male', 'ethanwalker@example.com', '9876543212', '9099 Pine Avenue, Ridgewood', NOW(), NOW()),
('Sophia', 'Lewis', '1990-08-25', 'Female', 'sophialewis@example.com', '5432198765', '1010 Spruce Street, Maplewood', NOW(), NOW()),
('Lucas', 'Miller', '1993-11-03', 'Male', 'lucasmiller@example.com', '6543109876', '1111 Oak Road, Clearwater', NOW(), NOW()),
('Ella', 'Davis', '1989-12-18', 'Female', 'elladavis@example.com', '7654329876', '1212 Willow Lane, Springdale', NOW(), NOW()),
('Benjamin', 'Martinez', '1986-05-14', 'Male', 'benjaminmartinez@example.com', '8765432345', '1313 Cedar Boulevard, Silver Creek', NOW(), NOW()),
('Harper', 'Clark', '1992-09-23', 'Female', 'harperclark@example.com', '9876543213', '1414 Birch Place, Redmond', NOW(), NOW()),
('James', 'Walker', '1990-01-09', 'Male', 'jameswalker@example.com', '5432109874', '1515 Pine Trail, Belleville', NOW(), NOW()),
('Olivia', 'Lopez', '1994-04-11', 'Female', 'olivialopez@example.com', '6543210988', '1616 Oak Grove, Easton', NOW(), NOW()),
('Matthew', 'Allen', '1987-12-07', 'Male', 'matthewallen@example.com', '7654321097', '1717 Maple Avenue, Queens', NOW(), NOW()),
('Isabella', 'Morris', '1993-03-06', 'Female', 'isabellamorris@example.com', '8765432101', '1818 Birch Road, Hilltop', NOW(), NOW()),
('Henry', 'Taylor', '1989-11-12', 'Male', 'henrytaylor@example.com', '9876543214', '1919 Cedar Court, Montgomery', NOW(), NOW()),
('Grace', 'Wright', '1990-06-15', 'Female', 'gracewright@example.com', '5432109878', '2020 Oak Grove, Lexington', NOW(), NOW()),
('Lucas', 'Scott', '1994-02-05', 'Male', 'lucasscott@example.com', '6543210983', '2121 Pine Hill, Grandview', NOW(), NOW()),
('Amelia', 'Baker', '1991-08-23', 'Female', 'ameliabaker23@example.com', '7654321096', '2222 Maple Street, Evergreen', NOW(), NOW());

select * from customers;

INSERT INTO passengers_on_flight (customer_id, flight_id, seat_num, travel_date)
VALUES
(1, 1, 'A1', '2025-01-15'),
(2, 2, 'B2', '2025-01-16'),
(3, 3, 'C3', '2025-01-17'),
(4, 4, 'D4', '2025-01-18'),
(5, 5, 'E5', '2025-01-19'),
(6, 6, 'F6', '2025-01-20'),
(7, 7, 'G7', '2025-01-21'),
(8, 8, 'H8', '2025-01-22'),
(9, 9, 'I9', '2025-01-23'),
(10, 10, 'J10', '2025-01-24'),
(11, 11, 'K11', '2025-01-25'),
(12, 12, 'L12', '2025-01-26'),
(13, 13, 'M13', '2025-01-27'),
(14, 14, 'N14', '2025-01-28'),
(15, 15, 'O15', '2025-01-29'),
(16, 16, 'P16', '2025-01-30'),
(17, 17, 'Q17', '2025-02-01'),
(18, 18, 'R18', '2025-02-02'),
(19, 19, 'S19', '2025-02-03'),
(20, 20, 'T20', '2025-02-04'),
(21, 21, 'U21', '2025-02-05'),
(22, 22, 'V22', '2025-02-06'),
(23, 23, 'W23', '2025-02-07'),
(24, 24, 'X24', '2025-02-08'),
(25, 25, 'Y25', '2025-02-09'),
(26, 26, 'Z26', '2025-02-10'),
(27, 27, 'A27', '2025-02-11'),
(28, 28, 'B28', '2025-02-12'),
(29, 29, 'C29', '2025-02-13');

INSERT INTO passengers_on_flight (customer_id, flight_id, seat_num, travel_date)
VALUES
(66, 66, 'F66', '2025-03-07'),
(67, 67, 'G67', '2025-03-08'),
(68, 68, 'H68', '2025-03-09'),
(69, 69, 'I69', '2025-03-10'),
(70, 70, 'J70', '2025-03-11'),
(71, 71, 'K71', '2025-03-12'),
(72, 72, 'L72', '2025-03-13'),
(73, 73, 'M73', '2025-03-14'),
(74, 74, 'N74', '2025-03-15'),
(75, 75, 'O75', '2025-03-16'),
(76, 76, 'P76', '2025-03-17'),
(77, 77, 'Q77', '2025-03-18'),
(78, 78, 'R78', '2025-03-19'),
(79, 79, 'S79', '2025-03-20'),
(80, 80, 'T80', '2025-03-21'),
(81, 81, 'U81', '2025-03-22'),
(82, 82, 'V82', '2025-03-23'),
(83, 83, 'W83', '2025-03-24');

SELECT customer_id FROM customers WHERE customer_id between 1 and 50;
SELECT customer_id FROM customers WHERE customer_id > 30 and customer_id<50;
select * from customers;
select * from passengers_on_flight;

INSERT INTO Routes (origin_airport, dest_port, flightnum, distance_miles)
VALUES 
('Chicago O\'Hare International Airport', 'London Heathrow Airport', 2, 3950),
('Tokyo Narita Airport', 'Paris Charles de Gaulle Airport', 3, 5984),
('Dubai International Airport', 'Sydney Kingsford Smith Airport', 4, 7460),
('Singapore Changi Airport', 'Frankfurt Airport', 5, 6415);

select * from routes;

INSERT INTO Routes (route_id, origin_airport, dest_port, flightnum, distance_miles, createdAt, updatedAt) 
VALUES
(2, 'Chicago O\'Hare International Airport', 'London Heathrow Airport', 2, 3941, '2025-01-11 04:02:15', '2025-01-11 04:02:15'),
(3, 'Tokyo Narita Airport', 'Paris Charles de Gaulle Airport', 3, 5988, '2025-01-11 04:02:15', '2025-01-11 04:02:15'),
(4, 'Dubai International Airport', 'Singapore Changi Airport', 4, 3705, '2025-01-11 04:02:15', '2025-01-11 04:02:15'),
(5, 'Sydney Kingsford Smith Airport', 'Hong Kong International Airport', 5, 4590, '2025-01-11 04:02:15', '2025-01-11 04:02:15'),
(6, 'Amsterdam Schiphol Airport', 'Frankfurt Airport', 6, 227, '2025-01-11 04:02:15', '2025-01-11 04:02:15'),
(7, 'Beijing Capital International Airport', 'Seoul Incheon International Airport', 7, 577, '2025-01-11 04:02:15', '2025-01-11 04:02:15'),
(8, 'London Gatwick Airport', 'Dallas/Fort Worth International Airport', 8, 4748, '2025-01-11 04:02:15', '2025-01-11 04:02:15'),
(9, 'Miami International Airport', 'San Francisco International Airport', 9, 2585, '2025-01-11 04:02:15', '2025-01-11 04:02:15'),
(10, 'Barcelona El Prat Airport', 'Mexico City International Airport', 10, 5787, '2025-01-11 04:02:15', '2025-01-11 04:02:15'),
(11, 'Toronto Pearson International Airport', 'Zurich Airport', 11, 4068, '2025-01-11 04:02:15', '2025-01-11 04:02:15'),
(12, 'Kuala Lumpur International Airport', 'Bangkok Suvarnabhumi Airport', 12, 746, '2025-01-11 04:02:15', '2025-01-11 04:02:15'),
(13, 'Moscow Sheremetyevo Airport', 'Istanbul Airport', 13, 1094, '2025-01-11 04:02:15', '2025-01-11 04:02:15'),
(14, 'Chennai International Airport', 'Munich Airport', 14, 4512, '2025-01-11 04:02:15', '2025-01-11 04:02:15'),
(15, 'New Delhi Indira Gandhi Airport', 'Dubai Al Maktoum International Airport', 15, 1360, '2025-01-11 04:02:15', '2025-01-11 04:02:15'),
(16, 'Vienna International Airport', 'Brisbane Airport', 16, 15389, '2025-01-11 04:02:15', '2025-01-11 04:02:15'),
(17, 'Cape Town International Airport', 'Doha Hamad International Airport', 17, 4245, '2025-01-11 04:02:15', '2025-01-11 04:02:15'),
(18, 'Helsinki Vantaa Airport', 'Oslo Gardermoen Airport', 18, 486, '2025-01-11 04:02:15', '2025-01-11 04:02:15'),
(19, 'Copenhagen Kastrup Airport', 'Johannesburg O.R. Tambo International Airport', 19, 9013, '2025-01-11 04:02:15', '2025-01-11 04:02:15'),
(20, 'Rome Fiumicino Airport', 'Athens Eleftherios Venizelos Airport', 20, 671, '2025-01-11 04:02:15', '2025-01-11 04:02:15'),
(21, 'Shanghai Pudong International Airport', 'São Paulo Guarulhos International Airport', 21, 11152, '2025-01-11 04:02:15', '2025-01-11 04:02:15');


INSERT INTO Routes (route_id, origin_airport, dest_port, flightnum, distance_miles, createdAt, updatedAt) 
VALUES
(22, 'Brisbane Airport', 'Singapore Changi Airport', 22, 3820, '2025-01-11 04:02:15', '2025-01-11 04:02:15'),
(23, 'Los Angeles International Airport', 'Denver International Airport', 23, 860, '2025-01-11 04:02:15', '2025-01-11 04:02:15'),
(24, 'Houston George Bush Intercontinental Airport', 'Tokyo Narita Airport', 24, 6630, '2025-01-11 04:02:15', '2025-01-11 04:02:15'),
(25, 'Munich Airport', 'Dublin Airport', 25, 853, '2025-01-11 04:02:15', '2025-01-11 04:02:15'),
(26, 'Lisbon Humberto Delgado Airport', 'Madrid Barajas Airport', 26, 312, '2025-01-11 04:02:15', '2025-01-11 04:02:15'),
(27, 'Toronto Pearson International Airport', 'Vancouver International Airport', 27, 2080, '2025-01-11 04:02:15', '2025-01-11 04:02:15'),
(28, 'Seattle-Tacoma International Airport', 'Atlanta Hartsfield-Jackson Airport', 28, 2182, '2025-01-11 04:02:15', '2025-01-11 04:02:15'),
(29, 'Mexico City International Airport', 'Lima Jorge Chavez International Airport', 29, 2646, '2025-01-11 04:02:15', '2025-01-11 04:02:15'),
(30, 'Mumbai Chhatrapati Shivaji Airport', 'Cape Town International Airport', 30, 5145, '2025-01-11 04:02:15', '2025-01-11 04:02:15'),
(31, 'Santiago Arturo Merino Benitez Airport', 'Buenos Aires Ezeiza Airport', 31, 707, '2025-01-11 04:02:15', '2025-01-11 04:02:15'),
(32, 'Athens Eleftherios Venizelos Airport', 'Berlin Brandenburg Airport', 32, 1126, '2025-01-11 04:02:15', '2025-01-11 04:02:15'),
(33, 'Osaka Kansai International Airport', 'Beijing Daxing International Airport', 33, 1194, '2025-01-11 04:02:15', '2025-01-11 04:02:15'),
(34, 'Istanbul Airport', 'Johannesburg O.R. Tambo International Airport', 34, 4663, '2025-01-11 04:02:15', '2025-01-11 04:02:15'),
(35, 'Seoul Incheon International Airport', 'Melbourne Airport', 35, 5401, '2025-01-11 04:02:15', '2025-01-11 04:02:15'),
(36, 'Helsinki Vantaa Airport', 'Stockholm Arlanda Airport', 36, 246, '2025-01-11 04:02:15', '2025-01-11 04:02:15'),
(37, 'Vienna International Airport', 'Prague Vaclav Havel Airport', 37, 157, '2025-01-11 04:02:15', '2025-01-11 04:02:15'),
(38, 'Copenhagen Kastrup Airport', 'Reykjavik Keflavik Airport', 38, 1304, '2025-01-11 04:02:15', '2025-01-11 04:02:15'),
(39, 'Singapore Changi Airport', 'Perth Airport', 39, 2409, '2025-01-11 04:02:15', '2025-01-11 04:02:15'),
(40, 'Paris Charles de Gaulle Airport', 'Zurich Airport', 40, 301, '2025-01-11 04:02:15', '2025-01-11 04:02:15'),
(41, 'Dubai Al Maktoum International Airport', 'JFK International Airport', 41, 6840, '2025-01-11 04:02:15', '2025-01-11 04:02:15');

select * from airports;
select* from routes;

INSERT INTO Routes (route_id, origin_airport, dest_port, flightnum, distance_miles, createdAt, updatedAt) 
VALUES
(42, 'Los Angeles International Airport', 'London Heathrow Airport', 42, 5472, '2025-01-11 04:02:15', '2025-01-11 04:02:15'),
(43, 'Tokyo Narita Airport', 'Singapore Changi Airport', 43, 5360, '2025-01-11 04:02:15', '2025-01-11 04:02:15'),
(44, 'Sydney Kingsford Smith Airport', 'Hong Kong International Airport', 44, 4590, '2025-01-11 04:02:15', '2025-01-11 04:02:15'),
(45, 'Paris Charles de Gaulle Airport', 'Dubai International Airport', 45, 5250, '2025-01-11 04:02:15', '2025-01-11 04:02:15'),
(46, 'Beijing Capital International Airport', 'Seoul Incheon International Airport', 46, 577, '2025-01-11 04:02:15', '2025-01-11 04:02:15'),
(47, 'London Gatwick Airport', 'Dallas/Fort Worth International Airport', 47, 4748, '2025-01-11 04:02:15', '2025-01-11 04:02:15'),
(48, 'Miami International Airport', 'San Francisco International Airport', 48, 2585, '2025-01-11 04:02:15', '2025-01-11 04:02:15'),
(49, 'Barcelona El Prat Airport', 'Mexico City International Airport', 49, 5787, '2025-01-11 04:02:15', '2025-01-11 04:02:15'),
(50, 'Toronto Pearson International Airport', 'Zurich Airport', 50, 4068, '2025-01-11 04:02:15', '2025-01-11 04:02:15'),
(51, 'Kuala Lumpur International Airport', 'Bangkok Suvarnabhumi Airport', 51, 746, '2025-01-11 04:02:15', '2025-01-11 04:02:15'),
(52, 'Moscow Sheremetyevo Airport', 'Istanbul Airport', 52, 1094, '2025-01-11 04:02:15', '2025-01-11 04:02:15'),
(53, 'Chennai International Airport', 'Munich Airport', 53, 4512, '2025-01-11 04:02:15', '2025-01-11 04:02:15'),
(54, 'New Delhi Indira Gandhi Airport', 'Dubai Al Maktoum International Airport', 54, 1360, '2025-01-11 04:02:15', '2025-01-11 04:02:15'),
(55, 'Vienna International Airport', 'Brisbane Airport', 55, 15389, '2025-01-11 04:02:15', '2025-01-11 04:02:15'),
(56, 'Cape Town International Airport', 'Doha Hamad International Airport', 56, 4245, '2025-01-11 04:02:15', '2025-01-11 04:02:15'),
(57, 'Helsinki Vantaa Airport', 'Oslo Gardermoen Airport', 57, 486, '2025-01-11 04:02:15', '2025-01-11 04:02:15'),
(58, 'Copenhagen Kastrup Airport', 'Johannesburg O.R. Tambo International Airport', 58, 9013, '2025-01-11 04:02:15', '2025-01-11 04:02:15'),
(59, 'Rome Fiumicino Airport', 'Athens Eleftherios Venizelos Airport', 59, 671, '2025-01-11 04:02:15', '2025-01-11 04:02:15');


INSERT INTO ticket_details (ticket_id, aircraft_id, route_id, passenger_id, purchase_date, price_per_ticket)
VALUES
  -- Bombardier
(2, 1, 1, 1, '2024-01-02', 1500.00),  -- Boeing
(3, 2, 2, 2, '2024-01-03', 1800.00),  -- Airbus
(4, 3, 3, 3, '2024-01-04', 1100.00),  -- Kingfisher
(5, 4, 4, 4, '2024-01-05', 2000.00),  -- Embraer
(6, 5, 5, 5, '2024-01-06', 1300.00),  -- Bombardier
(7, 6, 6, 6, '2024-01-07', 1500.00),  -- Cessna
(8, 7, 7, 7, '2024-01-08', 1800.00),  -- McDonnell Douglas
(9, 8, 8, 8, '2024-01-09', 2000.00),  -- Lockheed Martin
(10, 9, 9, 9, '2024-01-10', 1200.00),  -- Dassault
(11, 10, 10, 10, '2024-01-11', 1500.00),  -- Gulfstream
(12, 11, 11, 11, '2024-01-12', 1300.00),  -- Beechcraft
(13, 12, 12, 12, '2024-01-13', 1700.00),  -- Piper
(14, 13, 13, 13, '2024-01-14', 1100.00),  -- Antonov
(15, 14, 14, 14, '2024-01-15', 2500.00),  -- Sukhoi
(16, 15, 15, 15, '2024-01-16', 2000.00),  -- Tupolev
(17, 16, 16, 16, '2024-01-17', 1900.00),  -- Ilyushin
(18, 17, 17, 17, '2024-01-18', 2500.00),  -- Mitsubishi
(19, 18, 18, 18, '2024-01-19', 2200.00),  -- Comac
(20, 19, 19, 19, '2024-01-20', 1800.00),  -- Bombardier
(21, 20, 20, 20, '2024-01-21', 2000.00),  -- De Havilland
(22, 21, 21, 21, '2024-01-22', 2200.00),  -- Boeing Business Jet
(23, 22, 22, 22, '2024-01-23', 1400.00),  -- Fairchild Dornier
(24, 23, 23, 23, '2024-01-24', 1600.00),  -- Hawker
(25, 24, 24, 24, '2024-01-25', 1500.00),  -- Learjet
(26, 25, 25, 25, '2024-01-26', 1700.00),  -- Northrop Grumman
(27, 26, 26, 26, '2024-01-27', 1800.00),  -- British Aerospace
(28, 27, 27, 27, '2024-01-28', 1600.00),  -- Fokker
(29, 28, 28, 28, '2024-01-29', 2000.00),  -- Saab
(30, 29, 29, 29, '2024-01-30', 2500.00),  -- Airbus A380
(31, 30, 30, 30, '2024-01-31', 2000.00),  -- Boeing 787
(277, 1, 1, 1, '2024-02-01', 1200.00),  -- Boeing
(278, 2, 2, 2, '2024-02-02', 1500.00),  -- Airbus
(279, 3, 3, 3, '2024-02-03', 1800.00),  -- Kingfisher
(280, 4, 4, 4, '2024-02-04', 1100.00),  -- Embraer
(281, 5, 5, 5, '2024-02-05', 2000.00),  -- Bombardier
(282, 6, 6, 6, '2024-02-06', 1300.00),  -- Cessna
(283, 7, 7, 7, '2024-02-07', 1500.00),  -- McDonnell Douglas
(284, 8, 8, 8, '2024-02-08', 1800.00),  -- Lockheed Martin
(285, 9, 9, 9, '2024-02-09', 2000.00),  -- Dassault
(286, 10, 10, 10, '2024-02-10', 1200.00),  -- Gulfstream
(287, 11, 11, 11, '2024-02-11', 1500.00),  -- Beechcraft
(288, 12, 12, 12, '2024-02-12', 1700.00),  -- Piper
(289, 13, 13, 13, '2024-02-13', 1100.00),  -- Antonov
(290, 14, 14, 14, '2024-02-14', 2500.00),  -- Sukhoi
(291, 15, 15, 15, '2024-02-15', 2000.00),  -- Tupolev
(292, 16, 16, 16, '2024-02-16', 1900.00),  -- Ilyushin
(293, 17, 17, 17, '2024-02-17', 2500.00),  -- Mitsubishi
(294, 18, 18, 18, '2024-02-18', 2200.00),  -- Comac
(295, 19, 19, 19, '2024-02-19', 1800.00),  -- Bombardier
(296, 20, 20, 20, '2024-02-20', 2000.00),  -- De Havilland
(297, 21, 21, 21, '2024-02-21', 2200.00),  -- Boeing Business Jet
(298, 22, 22, 22, '2024-02-22', 1400.00),  -- Fairchild Dornier
(299, 23, 23, 23, '2024-02-23', 1600.00),  -- Hawker
(300, 24, 24, 24, '2024-02-24', 1500.00),  -- Learjet
(301, 25, 25, 25, '2024-02-25', 1700.00),  -- Northrop Grumman
(302, 26, 26, 26, '2024-02-26', 1800.00),  -- British Aerospace
(303, 27, 27, 27, '2024-02-27', 1600.00),  -- Fokker
(304, 28, 28, 28, '2024-02-28', 2000.00),  -- Saab
(305, 29, 29, 29, '2024-02-29', 2500.00);  -- Airbus A380

INSERT INTO ticket_details (ticket_id, aircraft_id, route_id, passenger_id, purchase_date, price_per_ticket)
VALUES
(306, 30, 30, 30, '2024-03-01', 2000.00),  -- Boeing 787
(307, 1, 1, 1, '2024-03-02', 1500.00),  -- Bombardier
(308, 2, 2, 2, '2024-03-03', 1800.00),  -- Airbus
(309, 3, 3, 3, '2024-03-04', 2200.00),  -- Kingfisher
(310, 4, 4, 4, '2024-03-05', 2000.00),  -- Embraer
(311, 5, 5, 5, '2024-03-06', 1700.00),  -- Bombardier
(312, 6, 6, 6, '2024-03-07', 1500.00),  -- Cessna
(313, 7, 7, 7, '2024-03-08', 1600.00),  -- McDonnell Douglas
(314, 8, 8, 8, '2024-03-09', 1800.00),  -- Lockheed Martin
(315, 9, 9, 9, '2024-03-10', 1500.00),  -- Dassault
(316, 10, 10, 10, '2024-03-11', 2000.00),  -- Gulfstream
(317, 11, 11, 11, '2024-03-12', 1300.00),  -- Beechcraft
(318, 12, 12, 12, '2024-03-13', 1700.00),  -- Piper
(319, 13, 13, 13, '2024-03-14', 1100.00),  -- Antonov
(320, 14, 14, 14, '2024-03-15', 2500.00),  -- Sukhoi
(321, 15, 15, 15, '2024-03-16', 1900.00),  -- Tupolev
(322, 16, 16, 16, '2024-03-17', 2200.00),  -- Ilyushin
(323, 17, 17, 17, '2024-03-18', 2500.00),  -- Mitsubishi
(324, 18, 18, 18, '2024-03-19', 2000.00),  -- Comac
(325, 19, 19, 19, '2024-03-20', 1500.00),  -- Bombardier
(326, 20, 20, 20, '2024-03-21', 1800.00),  -- De Havilland
(327, 21, 21, 21, '2024-03-22', 2200.00),  -- Boeing Business Jet
(328, 22, 22, 22, '2024-03-23', 1400.00),  -- Fairchild Dornier
(329, 23, 23, 23, '2024-03-24', 1600.00),  -- Hawker
(330, 24, 24, 24, '2024-03-25', 1500.00),  -- Learjet
(331, 25, 25, 25, '2024-03-26', 1700.00),  -- Northrop Grumman
(332, 26, 26, 26, '2024-03-27', 1800.00),  -- British Aerospace
(333, 27, 27, 27, '2024-03-28', 1600.00),  -- Fokker
(334, 28, 28, 28, '2024-03-29', 2000.00),  -- Saab
(335, 29, 29, 29, '2024-03-30', 2500.00);  -- Airbus A380


INSERT INTO ticket_details (aircraft_id, route_id, passenger_id, purchase_date, price_per_ticket)
VALUES
  (30, 30, 30, '2024-03-01', 2200.00),  -- Boeing 737
  (31, 31, 31, '2024-03-02', 2400.00),  -- Airbus A320
  (32, 32, 32, '2024-03-03', 2500.00),  -- Embraer 190
  (33, 33, 33, '2024-03-04', 2700.00),  -- Cessna Citation
  (34, 34, 34, '2024-03-05', 2800.00),  -- Gulfstream G650
  (35, 35, 35, '2024-03-06', 2900.00),  -- Bombardier Global 7500
  (36, 36, 36, '2024-03-07', 3000.00),  -- Boeing 787 Dreamliner
  (37, 37, 37, '2024-03-08', 3100.00),  -- Airbus A350
  (38, 38, 38, '2024-03-09', 3200.00),  -- McDonnell Douglas MD-11
  (39, 39, 39, '2024-03-10', 3300.00),  -- Lockheed L-1011
  (40, 40, 40, '2024-03-11', 3400.00),  -- Dassault Falcon 7X
  (41, 41, 41, '2024-03-12', 3500.00),  -- Sukhoi Superjet 100
  (42, 42, 42, '2024-03-13', 3600.00),  -- Mitsubishi Regional Jet
  (43, 43, 43, '2024-03-14', 3700.00),  -- Boeing 747-8
  (44, 44, 44, '2024-03-15', 3800.00);  -- Airbus A380

INSERT INTO employees (employee_id, f_name, l_name, job_title, aircraft_id) VALUES
(1, 'John', 'Smith', 'Pilot', 1),
(2, 'Jane', 'Doe', 'Co-Pilot', 2),
(3, 'Michael', 'Johnson', 'Engineer', 3),
(4, 'Emily', 'Davis', 'Cabin Crew', 4),
(5, 'William', 'Brown', 'Pilot', 5),
(6, 'Olivia', 'Jones', 'Engineer', 6),
(7, 'James', 'Garcia', 'Cabin Crew', 7),
(8, 'Sophia', 'Martinez', 'Pilot', 8),
(9, 'Benjamin', 'Rodriguez', 'Engineer', 9),
(10, 'Isabella', 'Wilson', 'Co-Pilot', 10),
(11, 'Lucas', 'Anderson', 'Cabin Crew', 11),
(12, 'Mia', 'Thomas', 'Pilot', 12),
(13, 'Alexander', 'Moore', 'Engineer', 13),
(14, 'Charlotte', 'Martin', 'Cabin Crew', 14),
(15, 'Ethan', 'White', 'Pilot', 15),
(16, 'Ava', 'Harris', 'Engineer', 16),
(17, 'Matthew', 'Clark', 'Co-Pilot', 17),
(18, 'Amelia', 'Lewis', 'Cabin Crew', 18),
(19, 'Daniel', 'Walker', 'Pilot', 19),
(20, 'Sophia', 'Hall', 'Engineer', 20);


select * from employees;

INSERT INTO employees (f_name, l_name, job_title, aircraft_id) VALUES
('Jack', 'Taylor', 'Pilot', 7),
('Grace', 'Moore', 'Engineer', 8),
('Samuel', 'Jackson', 'Technician', 9),
('Lily', 'White', 'Cabin Crew', 10),
('Jackson', 'Harris', 'Flight Attendant', 7),
('Madison', 'Clark', 'Pilot', 8),
('Henry', 'Lewis', 'Engineer', 9),
('Ella', 'Lopez', 'Technician', 10),
('Lucas', 'Miller', 'Cabin Crew', 7),
('Ethan', 'Young', 'Flight Attendant', 8),
('Zoe', 'Walker', 'Pilot', 9),
('Charlotte', 'Allen', 'Engineer', 10),
('Leo', 'Scott', 'Technician', 7),
('Grace', 'Robinson', 'Cabin Crew', 8),
('Sophia', 'Baker', 'Flight Attendant', 9),
('Benjamin', 'King', 'Pilot', 10),
('Alexander', 'Gonzalez', 'Engineer', 7),
('Amelia', 'Davis', 'Technician', 8),
('Liam', 'Lopez', 'Cabin Crew', 9),
('Olivia', 'Hernandez', 'Flight Attendant', 10);


INSERT INTO employees (f_name, l_name, job_title, aircraft_id) VALUES
('Liam', 'Williams', 'Pilot', 3),
('Olivia', 'Brown', 'Technician', 1),
('Noah', 'Jones', 'Engineer', 4),
('Ava', 'Garcia', 'Pilot', 2),
('Isabella', 'Miller', 'Cabin Crew', 5),
('Sophia', 'Davis', 'Flight Attendant', 3),
('Mason', 'Martinez', 'Maintenance Officer', 1),
('James', 'Hernandez', 'Pilot', 4),
('Charlotte', 'Lopez', 'Engineer', 2),
('Amelia', 'Gonzalez', 'Technician', 6),
('Evelyn', 'Clark', 'Flight Attendant', 1),
('Elijah', 'Lewis', 'Pilot', 3),
('Benjamin', 'Robinson', 'Cabin Crew', 4),
('Lucas', 'Walker', 'Flight Engineer', 5),
('Mia', 'Young', 'Technician', 2),
('Harper', 'Allen', 'Pilot', 1),
('Ethan', 'King', 'Engineer', 4),
('Avery', 'Scott', 'Flight Attendant', 3),
('Alexander', 'Baker', 'Maintenance Officer', 6);


INSERT INTO employees (f_name, l_name, job_title, aircraft_id) VALUES
('Mason', 'Taylor', 'Pilot', 11),
('Amelia', 'Smith', 'Engineer', 12),
('Aiden', 'Martinez', 'Technician', 13),
('Charlotte', 'Johnson', 'Cabin Crew', 14),
('Ethan', 'Davis', 'Flight Attendant', 15),
('Lucas', 'Rodriguez', 'Pilot', 16),
('Harper', 'Walker', 'Engineer', 17),
('Benjamin', 'Lopez', 'Technician', 18),
('Grace', 'Young', 'Cabin Crew', 19),
('Oliver', 'King', 'Flight Attendant', 20),
('Lily', 'Harris', 'Pilot', 11),
('Evelyn', 'Clark', 'Engineer', 12),
('James', 'Scott', 'Technician', 13),
('Ava', 'Baker', 'Cabin Crew', 14),
('Noah', 'Robinson', 'Flight Attendant', 15),
('Sophia', 'Lewis', 'Pilot', 16),
('Daniel', 'White', 'Engineer', 17),
('Zoe', 'Lopez', 'Technician', 18),
('Jackson', 'Baker', 'Cabin Crew', 19),
('Liam', 'Walker', 'Flight Attendant', 20);

INSERT INTO employees (f_name, l_name, job_title, aircraft_id) VALUES
('William', 'Anderson', 'Pilot', 101),
('Emily', 'Martinez', 'Engineer', 103),
('Mason', 'Rodriguez', 'Technician', 104),
('Oliver', 'Hernandez', 'Cabin Crew', 105),
('Sophia', 'Lopez', 'Flight Attendant', 106),
('Aiden', 'Clark', 'Pilot', 107),
('Charlotte', 'Lewis', 'Engineer', 108),
('Isabella', 'Young', 'Technician', 109),
('Benjamin', 'Taylor', 'Cabin Crew', 110),
('Amelia', 'Scott', 'Flight Attendant', 111),
('Liam', 'King', 'Pilot', 112),
('Zoe', 'Walker', 'Engineer', 113),
('Lucas', 'Allen', 'Technician', 114),
('Ella', 'Baker', 'Cabin Crew', 115),
('Grace', 'Robinson', 'Flight Attendant', 116),
('Harper', 'Lopez', 'Pilot', 117),
('Ava', 'Baker', 'Engineer', 101),
('Ethan', 'Martinez', 'Technician', 102),
('Mia', 'Scott', 'Cabin Crew', 103),
('James', 'Harris', 'Flight Attendant', 104),
('Jackson', 'Gonzalez', 'Pilot', 105),
('Lily', 'Taylor', 'Engineer', 106),
('Mason', 'Walker', 'Technician', 107),
('Benjamin', 'Robinson', 'Cabin Crew', 108),
('Charlotte', 'Baker', 'Flight Attendant', 109),
('William', 'Young', 'Pilot', 110),
('Sophia', 'Davis', 'Engineer', 111),
('Lucas', 'White', 'Technician', 112),
('Evelyn', 'Lopez', 'Cabin Crew', 113),
('Daniel', 'King', 'Flight Attendant', 114),
('Zoe', 'Scott', 'Pilot', 115),
('Amelia', 'Walker', 'Engineer', 116),
('Mia', 'Taylor', 'Technician', 117),
('Benjamin', 'Rodriguez', 'Cabin Crew', 101),
('Aiden', 'Anderson', 'Flight Attendant', 102),
('Harper', 'Martinez', 'Pilot', 103),
('Lucas', 'Clark', 'Engineer', 104),
('Isabella', 'Harris', 'Technician', 105),
('Olivia', 'Davis', 'Cabin Crew', 106),
('Ethan', 'Lopez', 'Flight Attendant', 107),
('Liam', 'Taylor', 'Pilot', 108),
('Sophia', 'Baker', 'Engineer', 109),
('Jackson', 'Young', 'Technician', 110);


INSERT INTO employees (f_name, l_name, job_title, aircraft_id) VALUES
('William', 'Anderson', 'Pilot', 30),
('Emily', 'Martinez', 'Engineer', 32),
('Mason', 'Rodriguez', 'Technician', 33),
('Oliver', 'Hernandez', 'Cabin Crew', 34),
('Sophia', 'Lopez', 'Flight Attendant', 35),
('Aiden', 'Clark', 'Pilot', 36),
('Charlotte', 'Lewis', 'Engineer', 37),
('Isabella', 'Young', 'Technician', 38),
('Benjamin', 'Taylor', 'Cabin Crew', 39),
('Amelia', 'Scott', 'Flight Attendant', 40),
('Liam', 'King', 'Pilot', 41),
('Zoe', 'Walker', 'Engineer', 42),
('Lucas', 'Allen', 'Technician', 43),
('Ella', 'Baker', 'Cabin Crew', 44),
('Grace', 'Robinson', 'Flight Attendant', 45),
('Harper', 'Lopez', 'Pilot', 46),
('Ava', 'Baker', 'Engineer', 47),
('Ethan', 'Martinez', 'Technician', 48),
('Mia', 'Scott', 'Cabin Crew', 49),
('James', 'Harris', 'Flight Attendant', 50),
('Jackson', 'Gonzalez', 'Pilot', 51),
('Lily', 'Taylor', 'Engineer', 52),
('Mason', 'Walker', 'Technician', 53),
('Benjamin', 'Robinson', 'Cabin Crew', 54),
('Charlotte', 'Baker', 'Flight Attendant', 55),
('William', 'Young', 'Pilot', 56),
('Sophia', 'Davis', 'Engineer', 57),
('Lucas', 'White', 'Technician', 58),
('Evelyn', 'Lopez', 'Cabin Crew', 59),
('Daniel', 'King', 'Flight Attendant', 60),
('Zoe', 'Scott', 'Pilot', 61),
('Amelia', 'Walker', 'Engineer', 62),
('Mia', 'Taylor', 'Technician', 63),
('Benjamin', 'Rodriguez', 'Cabin Crew', 64),
('Aiden', 'Anderson', 'Flight Attendant', 65),
('Harper', 'Martinez', 'Pilot', 66),
('Lucas', 'Clark', 'Engineer', 67),
('Isabella', 'Harris', 'Technician', 68),
('Olivia', 'Davis', 'Cabin Crew', 69),
('Ethan', 'Lopez', 'Flight Attendant', 70),
('Liam', 'Taylor', 'Pilot', 71),
('Sophia', 'Baker', 'Engineer', 72),
('Jackson', 'Young', 'Technician', 73),
('Mason', 'Roberts', 'Cabin Crew', 74),
('Zoe', 'Harris', 'Flight Attendant', 75),
('Lily', 'Martin', 'Pilot', 76),
('Benjamin', 'Scott', 'Engineer', 77),
('Olivia', 'King', 'Technician', 78),
('Daniel', 'Martinez', 'Cabin Crew', 79),
('Aiden', 'Walker', 'Flight Attendant', 80),
('Sophia', 'White', 'Pilot', 81),
('Harper', 'Taylor', 'Engineer', 82),
('Mia', 'Robinson', 'Technician', 83),
('Zoe', 'Lopez', 'Cabin Crew', 84),
('Benjamin', 'Baker', 'Flight Attendant', 85),
('Evelyn', 'Gonzalez', 'Pilot', 86),
('Amelia', 'King', 'Engineer', 87),
('Liam', 'Davis', 'Technician', 88),
('Charlotte', 'Martin', 'Cabin Crew', 89),
('Lucas', 'Rodriguez', 'Flight Attendant', 90);

select * from employees;

ALTER TABLE employees
DROP FOREIGN KEY employees_ibfk_1;

ALTER TABLE employees
ADD CONSTRAINT employees_ibfk_1
FOREIGN KEY (aircraft_id)
REFERENCES aircraft(aircraft_id)
ON DELETE CASCADE;


select * from customers;

select * from passengers_on_flight;
select * from cargo;

delete from cargo where cargo_i_d = 1;

drop table cargo;


INSERT INTO Cargo (
    weight, 
    destination, 
    originAirportID, 
    destinationAirportID, 
    status, 
    trackingNumber, 
    cargoType, 
    arrivalDate
)
VALUES 
    (2000, 'Los Angeles, USA', 1, 2, 'Pending', 'TRK1234567890', 'Fragile', '2025-01-15'),
    (3000, 'Berlin, Germany', 1, 3, 'In Transit', 'TRK1234567891', 'Non-Fragile', '2025-01-18'),
    (2500, 'Paris, France', 2, 3, 'Delivered', 'TRK1234567892', 'Perishable', '2025-01-20'),
    (1800, 'London, UK', 3, 4, 'Pending', 'TRK1234567893', 'Fragile', '2025-01-22'),
    (4000, 'Dubai, UAE', 4, 5, 'In Transit', 'TRK1234567894', 'Non-Fragile', '2025-01-24'),
    (3500, 'Tokyo, Japan', 2, 5, 'Pending', 'TRK1234567895', 'Perishable', '2025-01-26'),
    (5000, 'Singapore', 5, 6, 'Delivered', 'TRK1234567896', 'Non-Fragile', '2025-01-28'),
    (4500, 'Sydney, Australia', 3, 6, 'In Transit', 'TRK1234567897', 'Fragile', '2025-01-30'),
    (6000, 'New York, USA', 1, 7, 'Pending', 'TRK1234567898', 'Non-Fragile', '2025-02-01'),
    (2800, 'Toronto, Canada', 2, 7, 'Delivered', 'TRK1234567899', 'Perishable', '2025-02-03'),
    (3200, 'Mumbai, India', 3, 8, 'In Transit', 'TRK1234567900', 'Non-Fragile', '2025-02-05'),
    (2000, 'Cape Town, South Africa', 4, 8, 'Pending', 'TRK1234567901', 'Fragile', '2025-02-07'),
    (3800, 'Hong Kong, China', 5, 9, 'In Transit', 'TRK1234567902', 'Perishable', '2025-02-09'),
    (2900, 'Seoul, South Korea', 2, 9, 'Delivered', 'TRK1234567903', 'Non-Fragile', '2025-02-11'),
    (2100, 'Rome, Italy', 3, 10, 'Pending', 'TRK1234567904', 'Fragile', '2025-02-13'),
    (3600, 'Amsterdam, Netherlands', 4, 10, 'In Transit', 'TRK1234567905', 'Perishable', '2025-02-15'),
    (5000, 'Mexico City, Mexico', 1, 11, 'Delivered', 'TRK1234567906', 'Non-Fragile', '2025-02-17'),
    (4200, 'São Paulo, Brazil', 2, 11, 'Pending', 'TRK1234567907', 'Perishable', '2025-02-19'),
    (3500, 'Moscow, Russia', 3, 12, 'In Transit', 'TRK1234567908', 'Non-Fragile', '2025-02-21'),
    (4800, 'Buenos Aires, Argentina', 4, 12, 'Delivered', 'TRK1234567909', 'Fragile', '2025-02-23');

DESCRIBE Cargo;

INSERT INTO cargo (
    weight,
    destination,
    status,
    tracking_number,
    cargo_type,
    origin_airport_i_d,
    destination_airport_i_d,
    arrival_date,
    shipping_cost,
    departure_date,
    estimated_delivery_date,
    created_at,
    updated_at
)
VALUES (
    200.5,                             -- weight
    'New York',                        -- destination
    'Pending',                         -- status
    'ABC1234597',                      -- tracking_number (optional, can be NULL)
    'Fragile',                         -- cargo_type (optional, can be NULL)
    1,                                 -- origin_airport_i_d (reference to the airport_id in the Airport table)
    2,                                 -- destination_airport_i_d (reference to the airport_id in the Airport table)
    '2025-01-15 10:00:00',             -- arrival_date (optional, can be NULL)
    150.75,                            -- shipping_cost (optional, can be NULL)
    '2025-01-10 08:00:00',             -- departure_date (optional, can be NULL)
    '2025-01-15 12:00:00',             -- estimated_delivery_date (optional, can be NULL)
    NOW(),                             -- created_at (current timestamp)
    NOW()                              -- updated_at (current timestamp)
);


INSERT INTO cargo (
    weight,
    destination,
    status,
    tracking_number,
    cargo_type,
    origin_airport_i_d,
    destination_airport_i_d,
    arrival_date,
    shipping_cost,
    departure_date,
    estimated_delivery_date,
    created_at,
    updated_at
)
VALUES
    (200.5, 'New York', 'Pending', 'ABC1234467', 'Fragile', 1, 2, '2025-01-15 10:00:00', 150.75, '2025-01-10 08:00:00', '2025-01-15 12:00:00', NOW(), NOW()),
    (150.2, 'London', 'In Transit', 'XYZ9876543', 'Non-Fragile', 2, 3, '2025-01-18 14:00:00', 120.50, '2025-01-12 09:00:00', '2025-01-18 16:00:00', NOW(), NOW()),
    (300.7, 'Tokyo', 'Delivered', 'DEF4567890', 'Perishable', 3, 4, '2025-01-20 11:00:00', 200.00, '2025-01-14 07:00:00', '2025-01-20 13:00:00', NOW(), NOW()),
    (250.3, 'Paris', 'Pending', 'GHI1112233', 'Fragile', 4, 5, '2025-01-22 09:00:00', 180.25, '2025-01-16 10:00:00', '2025-01-22 11:30:00', NOW(), NOW()),
    (180.1, 'Berlin', 'In Transit', 'JKL1122334', 'Non-Fragile', 5, 6, '2025-01-25 08:30:00', 140.80, '2025-01-17 13:00:00', '2025-01-25 15:00:00', NOW(), NOW()),
    (220.4, 'Sydney', 'Pending', 'MNO2233445', 'Perishable', 6, 7, '2025-01-28 12:00:00', 160.00, '2025-01-18 11:00:00', '2025-01-28 14:00:00', NOW(), NOW()),
    (210.6, 'Moscow', 'Delivered', 'PQR3344556', 'Fragile', 7, 8, '2025-02-02 13:00:00', 190.25, '2025-01-20 12:00:00', '2025-02-02 15:00:00', NOW(), NOW()),
    (175.9, 'Dubai', 'In Transit', 'STU4455667', 'Non-Fragile', 8, 9, '2025-02-05 14:00:00', 170.00, '2025-01-22 09:00:00', '2025-02-05 16:00:00', NOW(), NOW()),
    (280.0, 'Singapore', 'Pending', 'VWX5566778', 'Perishable', 9, 10, '2025-02-08 15:00:00', 230.00, '2025-01-25 10:00:00', '2025-02-08 17:00:00', NOW(), NOW()),
    (195.2, 'Los Angeles', 'In Transit', 'YZA6677889', 'Fragile', 10, 11, '2025-02-12 11:30:00', 155.00, '2025-01-28 08:00:00', '2025-02-12 13:30:00', NOW(), NOW()),
    (160.4, 'Mumbai', 'Pending', 'BCD7788990', 'Non-Fragile', 11, 12, '2025-02-15 16:00:00', 180.50, '2025-01-30 09:00:00', '2025-02-15 18:00:00', NOW(), NOW()),
    (210.7, 'Madrid', 'Delivered', 'EFG8899001', 'Perishable', 12, 13, '2025-02-18 10:00:00', 210.00, '2025-02-01 07:30:00', '2025-02-18 12:00:00', NOW(), NOW()),
    (240.3, 'Rome', 'In Transit', 'HIJ9900112', 'Fragile', 13, 14, '2025-02-20 09:00:00', 200.25, '2025-02-05 13:00:00', '2025-02-20 11:00:00', NOW(), NOW()),
    (190.6, 'Cape Town', 'Pending', 'KLM1022334', 'Non-Fragile', 14, 15, '2025-02-25 12:30:00', 190.00, '2025-02-08 10:00:00', '2025-02-25 14:00:00', NOW(), NOW()),
    (220.9, 'Rio de Janeiro', 'Delivered', 'NOP2233445', 'Perishable', 15, 16, '2025-03-01 13:00:00', 210.75, '2025-02-10 11:00:00', '2025-03-01 15:00:00', NOW(), NOW()),
    (250.1, 'Toronto', 'In Transit', 'QRS3344556', 'Fragile', 16, 17, '2025-03-05 14:00:00', 220.00, '2025-02-15 12:00:00', '2025-03-05 16:00:00', NOW(), NOW()),
    (275.4, 'Hong Kong', 'Pending', 'TUV4455667', 'Non-Fragile', 17, 18, '2025-03-10 15:30:00', 250.00, '2025-02-18 13:00:00', '2025-03-10 17:00:00', NOW(), NOW()),
    (300.8, 'Bangkok', 'Delivered', 'WXY5566778', 'Perishable', 18, 19, '2025-03-15 12:00:00', 280.00, '2025-02-20 09:00:00', '2025-03-15 14:00:00', NOW(), NOW()),
    (195.5, 'Seoul', 'In Transit', 'ZAB6677889', 'Fragile', 19, 20, '2025-03-18 16:00:00', 190.75, '2025-02-22 08:30:00', '2025-03-18 18:00:00', NOW(), NOW()),
    (160.0, 'Los Angeles', 'Pending', 'CDE7788990', 'Non-Fragile', 20, 21, '2025-03-20 10:00:00', 170.00, '2025-02-25 10:30:00', '2025-03-20 12:00:00', NOW(), NOW());

INSERT INTO cargo (
    weight,
    destination,
    status,
    tracking_number,
    cargo_type,
    origin_airport_i_d,
    destination_airport_i_d,
    arrival_date,
    shipping_cost,
    departure_date,
    estimated_delivery_date,
    created_at,
    updated_at
)
VALUES
    (320.0, 'Shanghai', 'Pending', 'ABC0012345', 'Fragile', 21, 22, '2025-03-25 12:00:00', 240.50, '2025-03-10 14:00:00', '2025-03-25 16:00:00', NOW(), NOW()),
    (290.1, 'Buenos Aires', 'Delivered', 'XYZ0023456', 'Non-Fragile', 22, 23, '2025-03-28 11:30:00', 220.75, '2025-03-12 10:30:00', '2025-03-28 13:00:00', NOW(), NOW()),
    (275.3, 'Lagos', 'In Transit', 'DEF0034567', 'Perishable', 23, 24, '2025-04-02 09:00:00', 210.00, '2025-03-15 12:00:00', '2025-04-02 11:30:00', NOW(), NOW()),
    (300.2, 'Cairo', 'Pending', 'GHI0045678', 'Fragile', 24, 25, '2025-04-05 15:00:00', 230.00, '2025-03-18 14:00:00', '2025-04-05 17:00:00', NOW(), NOW()),
    (280.7, 'Auckland', 'In Transit', 'JKL0056789', 'Non-Fragile', 25, 26, '2025-04-10 13:00:00', 210.50, '2025-03-20 11:30:00', '2025-04-10 15:00:00', NOW(), NOW()),
    (320.5, 'Johannesburg', 'Delivered', 'MNO0067890', 'Perishable', 26, 27, '2025-04-15 09:00:00', 250.75, '2025-03-22 08:00:00', '2025-04-15 10:30:00', NOW(), NOW()),
    (225.0, 'Kuala Lumpur', 'Pending', 'PQR0078901', 'Fragile', 27, 28, '2025-04-20 14:00:00', 210.25, '2025-03-25 09:00:00', '2025-04-20 16:00:00', NOW(), NOW()),
    (310.8, 'Seoul', 'In Transit', 'STU0089012', 'Non-Fragile', 28, 29, '2025-04-25 11:00:00', 230.00, '2025-03-28 10:00:00', '2025-04-25 13:00:00', NOW(), NOW()),
    (250.0, 'Oslo', 'Pending', 'VWX0090123', 'Perishable', 29, 30, '2025-05-01 12:00:00', 200.00, '2025-04-01 08:00:00', '2025-05-01 14:00:00', NOW(), NOW()),
    (310.2, 'Mexico City', 'Delivered', 'YZA0101234', 'Fragile', 30, 31, '2025-05-05 15:00:00', 240.50, '2025-04-05 11:00:00', '2025-05-05 16:00:00', NOW(), NOW()),
    (280.3, 'Santiago', 'In Transit', 'BCD0112345', 'Non-Fragile', 31, 32, '2025-05-10 14:30:00', 220.25, '2025-04-10 09:00:00', '2025-05-10 16:00:00', NOW(), NOW()),
    (250.6, 'Lima', 'Pending', 'EFG0123456', 'Perishable', 32, 33, '2025-05-15 13:00:00', 210.00, '2025-04-15 10:00:00', '2025-05-15 14:00:00', NOW(), NOW()),
    (300.1, 'Abu Dhabi', 'Delivered', 'HIJ0134567', 'Fragile', 33, 34, '2025-05-20 16:00:00', 240.00, '2025-04-20 12:30:00', '2025-05-20 18:00:00', NOW(), NOW()),
    (325.0, 'Mumbai', 'In Transit', 'KLM0145678', 'Non-Fragile', 34, 35, '2025-05-25 09:00:00', 250.50, '2025-04-25 11:00:00', '2025-05-25 10:30:00', NOW(), NOW()),
    (295.4, 'Jakarta', 'Pending', 'NOP0156789', 'Perishable', 35, 36, '2025-06-01 12:00:00', 230.75, '2025-05-01 10:00:00', '2025-06-01 13:30:00', NOW(), NOW()),
    (330.0, 'New Delhi', 'Delivered', 'QRS0167890', 'Fragile', 36, 37, '2025-06-05 11:30:00', 260.00, '2025-05-05 12:30:00', '2025-06-05 13:30:00', NOW(), NOW()),
    (280.9, 'Lagos', 'In Transit', 'TUV0178901', 'Non-Fragile', 37, 38, '2025-06-10 14:00:00', 240.00, '2025-05-10 10:00:00', '2025-06-10 15:00:00', NOW(), NOW()),
    (325.6, 'Rio de Janeiro', 'Pending', 'WXY0189012', 'Perishable', 38, 39, '2025-06-15 13:00:00', 250.75, '2025-05-15 09:00:00', '2025-06-15 14:30:00', NOW(), NOW()),
    (300.3, 'Dubai', 'Delivered', 'ZAB0190123', 'Fragile', 39, 40, '2025-06-20 16:00:00', 230.00, '2025-05-20 14:00:00', '2025-06-20 18:00:00', NOW(), NOW());


INSERT INTO cargo (
    weight,
    destination,
    status,
    tracking_number,
    cargo_type,
    origin_airport_i_d,
    destination_airport_i_d,
    arrival_date,
    shipping_cost,
    departure_date,
    estimated_delivery_date,
    created_at,
    updated_at
)
VALUES
    (310.7, 'Paris', 'Pending', 'ABC0201234', 'Fragile', 41, 42, '2025-06-25 10:00:00', 235.50, '2025-05-25 13:00:00', '2025-06-25 12:30:00', NOW(), NOW()),
    (290.8, 'Rome', 'Delivered', 'DEF0212345', 'Non-Fragile', 42, 43, '2025-06-30 14:00:00', 220.75, '2025-05-30 12:00:00', '2025-06-30 15:00:00', NOW(), NOW()),
    (325.2, 'Berlin', 'In Transit', 'GHI0223456', 'Perishable', 43, 44, '2025-07-05 16:00:00', 240.00, '2025-06-05 14:00:00', '2025-07-05 17:00:00', NOW(), NOW()),
    (315.3, 'London', 'Pending', 'JKL0234567', 'Fragile', 44, 45, '2025-07-10 13:30:00', 245.50, '2025-06-10 10:30:00', '2025-07-10 14:00:00', NOW(), NOW()),
    (280.5, 'Sydney', 'In Transit', 'MNO0245678', 'Non-Fragile', 45, 46, '2025-07-15 09:00:00', 220.25, '2025-06-15 08:00:00', '2025-07-15 10:00:00', NOW(), NOW()),
    (300.8, 'Mexico City', 'Delivered', 'PQR0256789', 'Perishable', 46, 47, '2025-07-20 11:30:00', 230.75, '2025-06-20 09:00:00', '2025-07-20 12:30:00', NOW(), NOW()),
    (310.2, 'Seoul', 'Pending', 'STU0267890', 'Fragile', 47, 48, '2025-07-25 12:00:00', 225.00, '2025-06-25 10:30:00', '2025-07-25 13:30:00', NOW(), NOW()),
    (290.3, 'New York', 'In Transit', 'VWX0278901', 'Non-Fragile', 48, 49, '2025-07-30 14:00:00', 240.50, '2025-06-30 12:00:00', '2025-07-30 15:00:00', NOW(), NOW()),
    (280.0, 'Tokyo', 'Delivered', 'YZA0289012', 'Perishable', 49, 50, '2025-08-04 16:00:00', 235.75, '2025-07-04 13:00:00', '2025-08-04 17:00:00', NOW(), NOW()),
    (310.1, 'Hong Kong', 'Pending', 'BCD0290123', 'Fragile', 50, 51, '2025-08-09 10:30:00', 230.25, '2025-07-09 14:30:00', '2025-08-09 12:00:00', NOW(), NOW()),
    (295.5, 'Moscow', 'In Transit', 'EFG0301234', 'Non-Fragile', 51, 52, '2025-08-14 13:00:00', 225.00, '2025-07-14 11:00:00', '2025-08-14 14:00:00', NOW(), NOW()),
    (325.9, 'Bangkok', 'Delivered', 'HIJ0312345', 'Perishable', 52, 53, '2025-08-19 16:30:00', 240.50, '2025-07-19 13:30:00', '2025-08-19 17:00:00', NOW(), NOW()),
    (330.0, 'Buenos Aires', 'Pending', 'KLM0323456', 'Fragile', 53, 54, '2025-08-24 15:00:00', 235.00, '2025-07-24 14:00:00', '2025-08-24 16:30:00', NOW(), NOW()),
    (315.5, 'Santiago', 'In Transit', 'NOP0334567', 'Non-Fragile', 54, 55, '2025-08-29 12:30:00', 230.75, '2025-07-29 09:30:00', '2025-08-29 14:00:00', NOW(), NOW()),
    (300.9, 'Singapore', 'Delivered', 'QRS0345678', 'Perishable', 55, 56, '2025-09-03 10:00:00', 245.50, '2025-08-03 08:30:00', '2025-09-03 12:00:00', NOW(), NOW()),
    (290.1, 'Cairo', 'Pending', 'TUV0356789', 'Fragile', 56, 57, '2025-09-08 13:00:00', 220.25, '2025-08-08 11:00:00', '2025-09-08 14:30:00', NOW(), NOW()),
    (310.3, 'Madrid', 'In Transit', 'WXY0367890', 'Non-Fragile', 57, 58, '2025-09-13 12:00:00', 240.00, '2025-08-13 10:30:00', '2025-09-13 13:30:00', NOW(), NOW()),
    (320.4, 'Los Angeles', 'Delivered', 'ZAB0378901', 'Perishable', 58, 59, '2025-09-18 14:00:00', 250.00, '2025-08-18 12:00:00', '2025-09-18 16:00:00', NOW(), NOW());

select * from cargo;
select * from ticket_details;

drop table ticket_details;

INSERT INTO cargo (
    weight,
    destination,
    status,
    tracking_number,
    cargo_type,
    origin_airport_i_d,
    destination_airport_i_d,
    arrival_date,
    shipping_cost,
    departure_date,
    estimated_delivery_date,
    created_at,
    updated_at
)
VALUES
    (81, 330.5, 'Paris', 'Pending', 'JKL0490123', 'Fragile', 70, 71, '2025-11-17 13:30:00', 250.00, '2025-10-17 12:00:00', '2025-11-17 14:00:00', NOW(), NOW()),
    (82, 340.2, 'Madrid', 'In Transit', 'MNO0501234', 'Non-Fragile', 71, 72, '2025-11-22 14:00:00', 240.50, '2025-10-22 13:00:00', '2025-11-22 15:30:00', NOW(), NOW()),
    (83, 325.1, 'Tokyo', 'Delivered', 'PQR0512345', 'Perishable', 72, 73, '2025-11-27 16:00:00', 220.75, '2025-10-27 14:30:00', '2025-11-27 17:00:00', NOW(), NOW()),
    (84, 315.3, 'Istanbul', 'Pending', 'STU0523456', 'Fragile', 73, 74, '2025-12-02 10:00:00', 230.00, '2025-11-02 09:00:00', '2025-12-02 11:30:00', NOW(), NOW()),
    (85, 305.2, 'Seoul', 'In Transit', 'VWX0534567', 'Non-Fragile', 74, 75, '2025-12-07 12:00:00', 215.50, '2025-11-07 10:30:00', '2025-12-07 13:30:00', NOW(), NOW()),
    (86, 295.8, 'Jakarta', 'Delivered', 'YZA0545678', 'Perishable', 75, 76, '2025-12-12 14:30:00', 240.75, '2025-11-12 12:00:00', '2025-12-12 15:30:00', NOW(), NOW()),
    (87, 280.3, 'Bangkok', 'Pending', 'BCD0556789', 'Fragile', 76, 77, '2025-12-17 13:00:00', 225.00, '2025-11-17 11:00:00', '2025-12-17 14:30:00', NOW(), NOW()),
    (88, 275.4, 'Sydney', 'In Transit', 'EFG0567890', 'Non-Fragile', 77, 78, '2025-12-22 12:00:00', 210.00, '2025-11-22 10:30:00', '2025-12-22 13:30:00', NOW(), NOW()),
    (89, 310.0, 'Rome', 'Delivered', 'HIJ0578901', 'Perishable', 78, 79, '2025-12-27 11:30:00', 235.00, '2025-11-27 09:00:00', '2025-12-27 12:00:00', NOW(), NOW()),
    (90, 320.2, 'Berlin', 'Pending', 'KLM0589012', 'Fragile', 79, 80, '2026-01-01 14:30:00', 245.00, '2025-12-01 12:00:00', '2026-01-01 16:00:00', NOW(), NOW()),
    (91, 335.1, 'Los Angeles', 'In Transit', 'NOP0590123', 'Non-Fragile', 80, 81, '2026-01-06 13:00:00', 255.75, '2025-12-06 11:30:00', '2026-01-06 14:30:00', NOW(), NOW()),
    (92, 330.7, 'London', 'Delivered', 'QRS0601234', 'Perishable', 81, 82, '2026-01-11 15:30:00', 260.00, '2025-12-11 14:00:00', '2026-01-11 17:00:00', NOW(), NOW()),
    (93, 320.3, 'Mumbai', 'Pending', 'TUV0612345', 'Fragile', 82, 83, '2026-01-16 10:30:00', 235.25, '2025-12-16 09:00:00', '2026-01-16 12:00:00', NOW(), NOW()),
    (94, 315.5, 'Toronto', 'In Transit', 'WXY0623456', 'Non-Fragile', 83, 84, '2026-01-21 14:00:00', 240.50, '2025-12-21 12:00:00', '2026-01-21 15:30:00', NOW(), NOW()),
    (95, 305.8, 'Cairo', 'Delivered', 'ZAB0634567', 'Perishable', 84, 85, '2026-01-26 13:30:00', 225.00, '2025-12-26 12:30:00', '2026-01-26 15:00:00', NOW(), NOW()),
    (96, 295.3, 'Singapore', 'Pending', 'CDE0645678', 'Fragile', 85, 86, '2026-01-31 10:00:00', 230.50, '2025-12-31 08:30:00', '2026-01-31 11:30:00', NOW(), NOW()),
    (97, 285.2, 'Shanghai', 'In Transit', 'FGH0656789', 'Non-Fragile', 86, 87, '2026-02-05 12:00:00', 220.75, '2026-01-05 10:00:00', '2026-02-05 13:00:00', NOW(), NOW()),
    (98, 275.4, 'Bangkok', 'Delivered', 'IJK0667890', 'Perishable', 87, 88, '2026-02-10 14:30:00', 210.00, '2026-01-10 13:00:00', '2026-02-10 15:00:00', NOW(), NOW()),
    (99, 290.0, 'Paris', 'Pending', 'LMN0678901', 'Fragile', 88, 89, '2026-02-15 11:00:00', 240.00, '2026-01-15 09:30:00', '2026-02-15 12:00:00', NOW(), NOW()),
    (100, 310.5, 'Sydney', 'In Transit', 'OPQ0689012', 'Non-Fragile', 89, 90, '2026-02-20 12:30:00', 250.75, '2026-01-20 11:00:00', '2026-02-20 13:00:00', NOW(), NOW());

INSERT INTO cargo 
(cargo_i_d, weight, destination, status, tracking_number, cargo_type, origin_airport_i_d, destination_airport_i_d, arrival_date, shipping_cost, departure_date, estimated_delivery_date, created_at, updated_at)
VALUES 
(81, 330.5, 'Paris', 'Pending', 'JKL0490123', 'Fragile', 70, 71, '2025-11-17 13:30:00', 250.00, '2025-10-17 12:00:00', '2025-11-17 14:00:00', NOW(), NOW()),
(82, 340.2, 'Madrid', 'In Transit', 'MNO0501234', 'Non-Fragile', 71, 72, '2025-11-22 14:00:00', 240.50, '2025-10-22 13:00:00', '2025-11-22 15:30:00', NOW(), NOW()),
(83, 325.1, 'Tokyo', 'Delivered', 'PQR0512345', 'Perishable', 72, 73, '2025-11-27 16:00:00', 220.75, '2025-10-27 14:30:00', '2025-11-27 17:00:00', NOW(), NOW()),
(84, 315.3, 'Istanbul', 'Pending', 'STU0523456', 'Fragile', 73, 74, '2025-12-02 10:00:00', 230.00, '2025-11-02 09:00:00', '2025-12-02 11:30:00', NOW(), NOW()),
(85, 305.2, 'Seoul', 'In Transit', 'VWX0534567', 'Non-Fragile', 74, 75, '2025-12-07 12:00:00', 215.50, '2025-11-07 10:30:00', '2025-12-07 13:30:00', NOW(), NOW());


INSERT INTO cargo 
(cargo_i_d, weight, destination, status, tracking_number, cargo_type, origin_airport_i_d, destination_airport_i_d, arrival_date, shipping_cost, departure_date, estimated_delivery_date, created_at, updated_at)
VALUES 
(86, 410.8, 'Berlin', 'Pending', 'YZA0545678', 'Perishable', 75, 76, '2025-12-12 09:45:00', 265.75, '2025-11-12 08:30:00', '2025-12-12 11:00:00', NOW(), NOW()),
(87, 390.5, 'Rome', 'Delivered', 'BCD0556789', 'Fragile', 76, 77, '2025-12-17 11:30:00', 245.30, '2025-11-17 10:00:00', '2025-12-17 13:00:00', NOW(), NOW()),
(88, 395.2, 'Dubai', 'In Transit', 'EFG0567890', 'Non-Fragile', 77, 78, '2025-12-22 12:15:00', 255.40, '2025-11-22 10:45:00', '2025-12-22 14:30:00', NOW(), NOW()),
(89, 360.4, 'Melbourne', 'Pending', 'HIJ0578901', 'Perishable', 78, 79, '2025-12-27 10:00:00', 280.50, '2025-11-27 09:00:00', '2025-12-27 12:00:00', NOW(), NOW()),
(90, 420.7, 'Shanghai', 'Delivered', 'KLM0589012', 'Fragile', 79, 80, '2026-01-01 14:30:00', 295.60, '2025-12-01 13:15:00', '2026-01-01 16:00:00', NOW(), NOW()),
(91, 330.2, 'Vienna', 'Pending', 'NOP0590123', 'Non-Fragile', 80, 81, '2026-01-06 13:00:00', 275.40, '2025-12-06 11:45:00', '2026-01-06 14:30:00', NOW(), NOW()),
(92, 385.9, 'Amsterdam', 'In Transit', 'QRS0601234', 'Perishable', 81, 82, '2026-01-11 15:00:00', 265.80, '2025-12-11 13:30:00', '2026-01-11 16:45:00', NOW(), NOW()),
(93, 405.1, 'Lisbon', 'Delivered', 'TUV0612345', 'Fragile', 82, 83, '2026-01-16 11:30:00', 290.70, '2025-12-16 10:00:00', '2026-01-16 13:00:00', NOW(), NOW()),
(94, 375.0, 'Athens', 'Pending', 'WXY0623456', 'Non-Fragile', 83, 84, '2026-01-21 09:30:00', 270.55, '2025-12-21 08:30:00', '2026-01-21 11:00:00', NOW(), NOW()),
(95, 395.6, 'Brussels', 'In Transit', 'ZAB0634567', 'Perishable', 84, 85, '2026-01-26 13:45:00', 275.90, '2025-12-26 12:00:00', '2026-01-26 15:30:00', NOW(), NOW()),
(96, 410.4, 'Toronto', 'Delivered', 'CDE0645678', 'Fragile', 85, 86, '2026-01-31 14:15:00', 285.25, '2025-12-31 12:30:00', '2026-01-31 16:00:00', NOW(), NOW()),
(97, 370.3, 'San Francisco', 'Pending', 'FGH0656789', 'Non-Fragile', 86, 87, '2026-02-05 10:45:00', 295.10, '2026-01-05 09:00:00', '2026-02-05 12:30:00', NOW(), NOW()),
(98, 425.2, 'Buenos Aires', 'In Transit', 'IJK0667890', 'Perishable', 87, 88, '2026-02-10 13:00:00', 310.70, '2026-01-10 11:30:00', '2026-02-10 15:15:00', NOW(), NOW()),
(99, 380.1, 'Cape Town', 'Delivered', 'LMN0678901', 'Fragile', 88, 89, '2026-02-15 12:30:00', 295.85, '2026-01-15 10:45:00', '2026-02-15 14:30:00', NOW(), NOW()),
(100, 390.0, 'Mexico City', 'Pending', 'OPQ0689012', 'Non-Fragile', 89, 90, '2026-02-20 10:15:00', 280.40, '2026-01-20 08:45:00', '2026-02-20 11:45:00', NOW(), NOW());


select * from aircraft;
select * from passengers_on_flight;
select * from ticket_details;
ALTER TABLE bookings
ADD COLUMN payment_cost FLOAT NOT NULL;

select * from routes;

INSERT INTO ticket_details 
    (passenger_id, flight_id, route_id, seat_number, class, booking_date, status, payment_cost)
VALUES
    (1, 101, 201, '12A', 'Economy', '2025-01-15 10:00:00', 'Confirmed', 500),
    (2, 102, 202, '3B', 'Business', '2025-01-16 12:00:00', 'Confirmed', 700),
    (3, 103, 203, '1C', 'First Class', '2025-01-17 15:00:00', 'Cancelled', 800),
    (4, 104, 204, '6D', 'Economy', '2025-01-18 17:00:00', 'Confirmed', 600),
    (5, 105, 205, '8E', 'Business', '2025-01-19 19:00:00', 'Confirmed', 650);

-- Insert into ticket_details table (assuming booking_id auto-increments)
INSERT INTO ticket_details (passenger_id, flight_id, route_id, seat_number, class, booking_date, status, payment_cost)
VALUES
(1, 101, 201, 'A1', 'Economy', '2025-01-10 14:30:00', 'Confirmed', 2475.00),
(2, 102, 202, 'B2', 'Business', '2025-01-11 16:00:00', 'Confirmed', 3941.00),
(3, 103, 203, 'C3', 'First Class', '2025-01-12 18:30:00', 'Confirmed', 5988.00),
(4, 104, 204, 'D4', 'Economy', '2025-01-13 09:00:00', 'Confirmed', 3705.00),
(5, 105, 205, 'E5', 'Business', '2025-01-14 12:15:00', 'Cancelled', 4590.00),
(6, 106, 206, 'F6', 'First Class', '2025-01-15 10:45:00', 'Confirmed', 227.00),
(7, 107, 207, 'G7', 'Economy', '2025-01-16 13:30:00', 'Confirmed', 577.00),
(8, 108, 208, 'H8', 'Business', '2025-01-17 15:00:00', 'Confirmed', 4748.00),
(9, 109, 209, 'I9', 'First Class', '2025-01-18 11:00:00', 'Confirmed', 2585.00),
(10, 110, 210, 'J10', 'Economy', '2025-01-19 14:00:00', 'Cancelled', 5787.00);
-- Continue inserting more data as needed

select * from aircraft;

desc aircraft;
select * from passengers_on_flight;
desc passengers_on_flight;

select * from routes;
desc routes;

INSERT INTO ticket_details (passenger_id, flight_id, route_id, seat_number, class, booking_date, status, payment_cost)
VALUES (1, 2, 3, 'B12', 'Business', NOW(), 'Confirmed', 2500.75);

INSERT INTO ticket_details (passenger_id, flight_id, route_id, seat_number, class, booking_date, status, payment_cost)
VALUES
(1, 2, 3, 'A01', 'Economy', NOW(), 'Confirmed', 1200.50),
(2, 3, 4, 'B02', 'Business', NOW(), 'Confirmed', 1500.75),
(3, 4, 5, 'C03', 'First Class', NOW(), 'Cancelled', 1800.30),
(4, 5, 6, 'D04', 'Economy', NOW(), 'Confirmed', 1100.20),
(5, 6, 7, 'E05', 'Business', NOW(), 'Confirmed', 1900.99),
(6, 7, 8, 'F06', 'First Class', NOW(), 'Cancelled', 1700.45),
(7, 8, 9, 'G07', 'Economy', NOW(), 'Confirmed', 1250.60),
(8, 9, 10, 'H08', 'Business', NOW(), 'Confirmed', 1400.80),
(9, 10, 11, 'I09', 'First Class', NOW(), 'Cancelled', 2000.10),
(10, 11, 12, 'J10', 'Economy', NOW(), 'Confirmed', 1050.99),
(11, 12, 13, 'K11', 'Business', NOW(), 'Confirmed', 1750.50),
(12, 13, 14, 'L12', 'First Class', NOW(), 'Cancelled', 1600.25),
(13, 14, 15, 'M13', 'Economy', NOW(), 'Confirmed', 1300.70),
(14, 15, 16, 'N14', 'Business', NOW(), 'Confirmed', 1550.40),
(15, 16, 17, 'O15', 'First Class', NOW(), 'Cancelled', 1900.00),
(16, 17, 18, 'P16', 'Economy', NOW(), 'Confirmed', 1100.85),
(17, 18, 19, 'Q17', 'Business', NOW(), 'Confirmed', 1450.60),
(18, 19, 20, 'R18', 'First Class', NOW(), 'Cancelled', 1750.35),
(19, 20, 21, 'S19', 'Economy', NOW(), 'Confirmed', 1500.20),
(20, 21, 22, 'T20', 'Business', NOW(), 'Confirmed', 2000.90);

INSERT INTO ticket_details (passenger_id, flight_id, route_id, seat_number, class, booking_date, status, payment_cost)
VALUES
(21, 42, 43, 'O41', 'Economy', NOW(), 'Confirmed', 2200.75),
(22, 43, 44, 'P42', 'Business', NOW(), 'Confirmed', 3200.80),
(23, 44, 45, 'Q43', 'First Class', NOW(), 'Cancelled', 4300.90),
(24, 45, 46, 'R44', 'Economy', NOW(), 'Confirmed', 2500.50),
(25, 46, 47, 'S45', 'Business', NOW(), 'Confirmed', 3650.60),
(26, 47, 48, 'T46', 'First Class', NOW(), 'Cancelled', 5500.30),
(27, 48, 49, 'U47', 'Economy', NOW(), 'Confirmed', 2750.40),
(28, 49, 50, 'V48', 'Business', NOW(), 'Confirmed', 4400.99),
(29, 50, 51, 'W49', 'First Class', NOW(), 'Cancelled', 6000.75),
(30, 51, 52, 'X50', 'Economy', NOW(), 'Confirmed', 1900.60),
(31, 52, 53, 'Y51', 'Business', NOW(), 'Confirmed', 3100.25);

select * from ticket_details;
select * from users;

desc users;


INSERT INTO ticket_details (passenger_id, flight_id, route_id, seat_number, class, booking_date, status, payment_cost)
VALUES
(277, 22, 1, 'U277', 'Economy', NOW(), 'Confirmed', 2500.90),
(278, 23, 2, 'V278', 'Business', NOW(), 'Confirmed', 5200.75),
(279, 24, 3, 'W279', 'First Class', NOW(), 'Cancelled', 8800.60),
(280, 25, 4, 'X280', 'Economy', NOW(), 'Confirmed', 3500.40),
(281, 26, 5, 'Y281', 'Business', NOW(), 'Confirmed', 4900.25),
(282, 27, 6, 'Z282', 'First Class', NOW(), 'Cancelled', 7400.80),
(283, 28, 7, 'A283', 'Economy', NOW(), 'Confirmed', 2300.60),
(284, 29, 8, 'B284', 'Business', NOW(), 'Confirmed', 4100.90),
(285, 30, 9, 'C285', 'First Class', NOW(), 'Cancelled', 9500.30),
(286, 31, 10, 'D286', 'Economy', NOW(), 'Confirmed', 2800.75),
(287, 32, 11, 'E287', 'Business', NOW(), 'Confirmed', 5700.50),
(288, 33, 12, 'F288', 'First Class', NOW(), 'Cancelled', 6400.15),
(289, 34, 13, 'G289', 'Economy', NOW(), 'Confirmed', 1900.35),
(290, 35, 14, 'H290', 'Business', NOW(), 'Confirmed', 5000.60),
(291, 36, 15, 'I291', 'First Class', NOW(), 'Cancelled', 9000.85),
(292, 37, 16, 'J292', 'Economy', NOW(), 'Confirmed', 3200.45),
(293, 38, 17, 'K293', 'Business', NOW(), 'Confirmed', 6000.30),
(294, 39, 18, 'L294', 'First Class', NOW(), 'Cancelled', 8500.20),
(295, 40, 19, 'M295', 'Economy', NOW(), 'Confirmed', 3700.60),
(296, 41, 20, 'N296', 'Business', NOW(), 'Confirmed', 4800.95);

INSERT INTO ticket_details (passenger_id, flight_id, route_id, seat_number, class, booking_date, status, payment_cost)
VALUES
(297, 42, 21, 'O297', 'Economy', NOW(), 'Confirmed', 2100.90),
(298, 43, 22, 'P298', 'Business', NOW(), 'Confirmed', 4500.75),
(299, 44, 23, 'Q299', 'First Class', NOW(), 'Cancelled', 9200.65),
(300, 45, 24, 'R300', 'Economy', NOW(), 'Confirmed', 3300.80),
(301, 46, 25, 'S301', 'Business', NOW(), 'Confirmed', 5300.50),
(302, 47, 26, 'T302', 'First Class', NOW(), 'Cancelled', 8300.70),
(303, 48, 27, 'U303', 'Economy', NOW(), 'Confirmed', 2800.60),
(304, 49, 28, 'V304', 'Business', NOW(), 'Confirmed', 6200.25),
(305, 50, 29, 'W305', 'First Class', NOW(), 'Cancelled', 7800.45);

select * from ticket_details;
desc ticket_details;
select * from aircraft;

select * from cargo;
INSERT INTO ticket_details (booking_id, passenger_id, flight_id, route_id, seat_number, class, booking_date, status, payment_cost)  
VALUES (11, 3, 45, 10, '12B', 'Economy', NOW(), 'Confirmed', 250.00);
select * from passengers_on_flight;
select * from employees;


select * from airports;
select * from routes;
desc routes;

desc cargo;
select * from ticket_details;


DELIMITER //

CREATE PROCEDURE GetPassengerBookings(IN passengerID INT)
BEGIN
    SELECT b.booking_id, b.flight_date, r.route_name, a.aircraft_type
    FROM booking_details b
    JOIN routes r ON b.route_id = r.route_id
    JOIN aircraft a ON b.aircraft_id = a.aircraft_id
    WHERE b.passenger_id = passengerID
    ORDER BY b.flight_date DESC;
END //

DELIMITER ;
DROP PROCEDURE IF EXISTS GetBookingsStats;
 DELIMITER //

CREATE PROCEDURE GetRouteDetails()
BEGIN
    SELECT origin_airport, dest_port
    FROM routes;
END //

DELIMITER ;


DELIMITER //

CREATE PROCEDURE GetPassengerBookings(IN passengerID INT)
BEGIN
    SELECT 
        booking_id, 
        flight_id, 
        route_id, 
        seat_number, 
        class, 
        booking_date, 
        status, 
        payment_cost
    FROM ticket_details
    WHERE passenger_id = passengerID
    ORDER BY booking_date DESC;
END //

DELIMITER ;

CALL GetPassengerBookings(26);
CALL GetPassengerBookings(101);  -- Replace 101 with a valid passenger ID.

select * from passengers_on_flight;
DELIMITER //
CREATE PROCEDURE GetBookingByID(IN bookingID INT)
BEGIN
    SELECT * FROM ticket_details WHERE booking_id = bookingID;
END //
DELIMITER ;


SELECT * FROM ticket_details;
select * from passengers_on_flight;
select * from routes;

DELIMITER //

DELIMITER //

CREATE PROCEDURE GetRouteDetails()
BEGIN
    SELECT origin_airport, dest_port
    FROM routes;
END //

DELIMITER ;

CALL GetRouteDetails();

DELIMITER //

CREATE PROCEDURE GetCounts()
BEGIN
    -- Declare variables to store counts
    DECLARE total_passengers INT;
    DECLARE total_customers INT;
    DECLARE total_employees INT;
    DECLARE total_aircrafts INT;
    DECLARE total_airports INT;
    DECLARE total_routes INT;

    -- Fetch counts for each table
    SELECT COUNT(*) INTO total_passengers FROM passengers_on_flight;
    SELECT COUNT(*) INTO total_customers FROM customers;
    SELECT COUNT(*) INTO total_employees FROM employees;
    SELECT COUNT(*) INTO total_aircrafts FROM aircraft;
    SELECT COUNT(*) INTO total_airports FROM airports;
    SELECT COUNT(*) INTO total_routes FROM routes;

    -- Return the results
    SELECT total_passengers AS total_passengers,
           total_customers AS total_customers,
           total_employees AS total_employees,
           total_aircrafts AS total_aircrafts,
           total_airports AS total_airports,
           total_routes AS total_routes;
END //

DELIMITER ;

call getcounts();

DELIMITER //

CREATE PROCEDURE GetBookingsStats()
BEGIN
    -- Declare a variable for the date 30 days ago
    DECLARE start_date DATE;

    -- Set the start_date to 30 days ago
    SET start_date = CURDATE() - INTERVAL 30 DAY;

    -- Return the results aggregated by booking_date
    SELECT 
        DATE(booking_date) AS booking_date, 
        SUM(payment_cost) AS total_payment,
        COUNT(booking_id) AS total_bookings
    FROM ticket_details
    WHERE booking_date >= start_date
    GROUP BY DATE(booking_date)
    ORDER BY booking_date ASC;
END //

DELIMITER ;
call GetBookingsStats();

DELIMITER $$

CREATE PROCEDURE GetRoutes()
BEGIN
  SELECT origin_airport, dest_port FROM routes;
END $$

DELIMITER ;

call getroutes();

CREATE TABLE audit_log (
  id INT AUTO_INCREMENT PRIMARY KEY,
  action VARCHAR(50),          -- Action performed (INSERT, UPDATE, DELETE)
  table_name VARCHAR(50),      -- Name of the table where the action happened
  record_id INT,               -- ID of the affected record
  old_value TEXT,              -- Old value (only for UPDATE)
  new_value TEXT,              -- New value (only for UPDATE)
  timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- Timestamp of the action
);

DROP TABLE audit_log;

CREATE TABLE IF NOT EXISTS `AuditLogs` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `action` VARCHAR(255) NOT NULL,
  `table_name` VARCHAR(255) NOT NULL,
  `record_id` INTEGER NOT NULL,
  `old_value` JSON,
  `new_value` JSON,
  `user_id` INTEGER NOT NULL,
  `created_at` DATETIME,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB;

Drop table auditlogs;

INSERT INTO `AuditLogs` (`action`, `table_name`, `record_id`, `old_value`, `new_value`, `user_id`, `created_at`, `createdAt`, `updatedAt`)
VALUES 
('update', 'Users', 1, '{"name": "John Doe"}', '{"name": "Jane Doe"}', 123, NOW(), NOW(), NOW());

SELECT * FROM `AuditLogs`;

DELIMITER $$

CREATE TRIGGER after_aircraft_insert
AFTER INSERT ON Aircraft
FOR EACH ROW
BEGIN
  INSERT INTO AuditLogs (action, table_name, record_id, old_value, new_value,  created_at, createdAt, updatedAt)
  VALUES (
    'INSERT',
    'aircraft', 
    NEW.aircraft_id, 
    NULL, 
    JSON_OBJECT('aircraft_id', NEW.aircraft_id, 'capacity', NEW.capacity, 'brand', NEW.brand),
    1,  -- Assuming user_id is 1 for now, replace with the actual user ID dynamically
    NOW(),
    NOW(),
    NOW()
  );
END $$

DELIMITER ;

DELIMITER $$

CREATE TRIGGER after_aircraft_update
AFTER UPDATE ON Aircraft
FOR EACH ROW
BEGIN
  INSERT INTO AuditLogs (action, table_name, record_id, old_value, new_value, created_at, createdAt, updatedAt)
  VALUES (
    'UPDATE',
    'aircraft', 
    OLD.aircraft_id,
    JSON_OBJECT('aircraft_id', OLD.aircraft_id, 'capacity', OLD.capacity, 'brand', OLD.brand),
    JSON_OBJECT('aircraft_id', NEW.aircraft_id, 'capacity', NEW.capacity, 'brand', NEW.brand),
    1,  -- Assuming user_id is 1 for now, replace with the actual user ID dynamically
    NOW(),
    NOW(),
    NOW()
  );
END $$

DELIMITER ;

DELIMITER $$

CREATE TRIGGER after_aircraft_delete
AFTER DELETE ON Aircraft
FOR EACH ROW
BEGIN
  INSERT INTO AuditLogs (action, table_name, record_id, old_value, new_value, created_at, createdAt, updatedAt)
  VALUES (
    'DELETE',
    'aircraft', 
    OLD.aircraft_id, 
    JSON_OBJECT('aircraft_id', OLD.aircraft_id, 'capacity', OLD.capacity, 'brand', OLD.brand),
    NULL,
    1,  -- Assuming user_id is 1 for now, replace with the actual user ID dynamically
    NOW(),
    NOW(),
    NOW()
  );
END $$

DELIMITER ;
DELIMITER $$

CREATE TRIGGER after_aircraft_insert
AFTER INSERT ON Aircraft
FOR EACH ROW
BEGIN
  INSERT INTO AuditLogs (
    action, 
    table_name, 
    record_id, 
    old_value, 
    new_value, 
    created_at
  )
  VALUES (
    'INSERT',  -- Action type
    'aircraft',  -- Table name
    NEW.aircraft_id,  -- New record ID from the Aircraft table
    NULL,  -- No old value for an insert action
    JSON_OBJECT('aircraft_id', NEW.aircraft_id, 'capacity', NEW.capacity, 'brand', NEW.brand),  -- New value (JSON formatted)
    NOW()  -- Created timestamp
  );
END $$

DELIMITER ;




DROP TRIGGER IF EXISTS after_aircraft_insert;
DROP TRIGGER IF EXISTS after_aircraft_update;
DROP TRIGGER IF EXISTS after_aircraft_delete;





CREATE TABLE AuditLogs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  action VARCHAR(50),           -- Action type (INSERT, UPDATE, DELETE)
  table_name VARCHAR(50),       -- The table being affected (aircraft)
  record_id INT,                -- The ID of the affected record
  old_value JSON,               -- The old value (for UPDATE or DELETE)
  new_value JSON,               -- The new value (for INSERT or UPDATE)
                -- The ID of the user who performed the action
  created_at DATETIME,          -- When the action was performed
  updated_at DATETIME           -- When the audit log was updatedauditlogs
);
drop table auditlogs;

desc aircraft;
ALTER TABLE Aircraft
MODIFY createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
MODIFY updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;

INSERT INTO Aircraft (capacity, brand)
VALUES (200, 'KingFisher');

ALTER TABLE Aircraft
MODIFY COLUMN createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP;

ALTER TABLE Aircraft
MODIFY COLUMN updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;
INSERT INTO Aircraft (capacity, brand, createdAt, updatedAt)
VALUES (200, 'KingFisher', NOW(), NOW());

DESCRIBE Aircraft;


INSERT INTO Aircraft (capacity, brand)
VALUES (200, 'KingFisher');
INSERT INTO Aircraft (capacity, brand, createdAt, updatedAt)
VALUES (200, 'KingFisher', NOW(), NOW());
ALTER TABLE Aircraft
MODIFY createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
MODIFY updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;
INSERT INTO Aircraft (capacity, brand)
VALUES (200, 'KingFisher');


SHOW CREATE TABLE Aircraft;

DELIMITER $$

CREATE TRIGGER after_aircraft_insert
AFTER INSERT ON Aircraft
FOR EACH ROW
BEGIN
  INSERT INTO AuditLogs (
    action, 
    table_name, 
    record_id, 
    old_value, 
    new_value
  
  )
  VALUES (
    'INSERT',  -- Action type
    'aircraft',  -- Table name
    NEW.aircraft_id,  -- New record ID from the Aircraft table
    NULL,  -- No old value for an insert action
    JSON_OBJECT('aircraft_id', NEW.aircraft_id, 'capacity', NEW.capacity, 'brand', NEW.brand)  -- New value (JSON formatted)
    
  );
END $$

DELIMITER ;
INSERT INTO Aircraft (capacity, brand)
VALUES (200, 'KingFisher');
INSERT INTO Aircraft (capacity, brand)
VALUES (200, 'KingFisher');
SHOW CREATE TABLE Aircraft;

DELIMITER $$

CREATE TRIGGER after_aircraft_insert
AFTER INSERT ON Aircraft
FOR EACH ROW
BEGIN
  INSERT INTO AuditLogs (
    action, 
    table_name, 
    record_id, 
    old_value, 
    new_value, 
    created_at
  )
  VALUES (
    'INSERT',  
    'aircraft',  
    NEW.aircraft_id,  
    NULL,  
    JSON_OBJECT('aircraft_id', NEW.aircraft_id, 'capacity', NEW.capacity, 'brand', NEW.brand),  
    NOW()  
  );

  -- Ensure createdAt is explicitly set
  UPDATE Aircraft 
  SET createdAt = NOW()
  WHERE aircraft_id = NEW.aircraft_id;
  
END $$

DELIMITER ;

INSERT INTO Aircraft (capacity, brand)
VALUES (250, 'KingFisher234');

SELECT * FROM Aircraft;

desc aircraft;
SELECT * FROM Aircraft;

ALTER TABLE Aircraft 
MODIFY createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
MODIFY updatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;
CREATE TRIGGER after_aircraft_insert
AFTER INSERT ON Aircraft
FOR EACH ROW
BEGIN
  INSERT INTO AuditLogs (
    action, 
    table_name, 
    record_id, 
    old_value, 
    new_value
  
  )
  VALUES (
    'INSERT',  -- Action type
    'aircraft',  -- Table name
    NEW.aircraft_id,  -- New record ID from the Aircraft table
    NULL,  -- No old value for an insert action
    JSON_OBJECT('aircraft_id', NEW.aircraft_id, 'capacity', NEW.capacity, 'brand', NEW.brand)  -- New value (JSON formatted)
    
  );
END $$

DELIMITER ;









CREATE TABLE IF NOT EXISTS AuditLogs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  action ENUM('INSERT', 'UPDATE', 'DELETE') NOT NULL,
  table_name VARCHAR(255) NOT NULL,
  record_id INT NOT NULL,
  old_value JSON NULL,
  new_value JSON NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

DELIMITER $$

-- ✅ 1. Generate Triggers for All Tables Dynamically
CREATE PROCEDURE generate_audit_triggers()
BEGIN
  DECLARE done INT DEFAULT FALSE;
  DECLARE tbl_name VARCHAR(255);
  DECLARE col_id VARCHAR(255);
  DECLARE cur CURSOR FOR 
    SELECT table_name, column_name 
    FROM information_schema.columns 
    WHERE table_schema = DATABASE() 
    AND column_name LIKE '%_id' 
    AND table_name NOT IN ('AuditLogs');

  DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = TRUE;

  OPEN cur;
  read_loop: LOOP
    FETCH cur INTO tbl_name, col_id;
    IF done THEN
      LEAVE read_loop;
    END IF;

    -- Insert Trigger
    SET @sql_insert = CONCAT('
      CREATE TRIGGER after_insert_', tbl_name, '
      AFTER INSERT ON ', tbl_name, '
      FOR EACH ROW
      BEGIN
        INSERT INTO AuditLogs (action, table_name, record_id, new_value, created_at)
        VALUES (''INSERT'', ''', tbl_name, ''', NEW.', col_id, ', 
          JSON_OBJECT(', col_id, ', NEW.', col_id, '), NOW());
      END;
    ');
    PREPARE stmt FROM @sql_insert;
    EXECUTE stmt;
    DEALLOCATE PREPARE stmt;

    -- Update Trigger
    SET @sql_update = CONCAT('
      CREATE TRIGGER after_update_', tbl_name, '
      AFTER UPDATE ON ', tbl_name, '
      FOR EACH ROW
      BEGIN
        INSERT INTO AuditLogs (action, table_name, record_id, old_value, new_value, created_at)
        VALUES (''UPDATE'', ''', tbl_name, ''', OLD.', col_id, ', 
          JSON_OBJECT(', col_id, ', OLD.', col_id, '), 
          JSON_OBJECT(', col_id, ', NEW.', col_id, '), NOW());
      END;
    ');
    PREPARE stmt FROM @sql_update;
    EXECUTE stmt;
    DEALLOCATE PREPARE stmt;

    -- Delete Trigger
    SET @sql_delete = CONCAT('
      CREATE TRIGGER after_delete_', tbl_name, '
      AFTER DELETE ON ', tbl_name, '
      FOR EACH ROW
      BEGIN
        INSERT INTO AuditLogs (action, table_name, record_id, old_value, new_value, created_at)
        VALUES (''DELETE'', ''', tbl_name, ''', OLD.', col_id, ', 
          JSON_OBJECT(', col_id, ', OLD.', col_id, '), NULL, NOW());
      END;
    ');
    PREPARE stmt FROM @sql_delete;
    EXECUTE stmt;
    DEALLOCATE PREPARE stmt;
  END LOOP;
  CLOSE cur;
END $$

DELIMITER ;

CALL generate_audit_triggers();

DROP PROCEDURE IF EXISTS generate_audit_triggers;

DELIMITER $$

-- ✅ After INSERT Trigger
CREATE TRIGGER after_insert_aircraft
AFTER INSERT ON Aircraft
FOR EACH ROW
BEGIN
  INSERT INTO AuditLogs (action, table_name, record_id, new_value, created_at)
  VALUES ('INSERT', 'Aircraft', NEW.aircraft_id, 
    JSON_OBJECT('aircraft_id', NEW.aircraft_id, 'capacity', NEW.capacity, 'brand', NEW.brand), 
    NOW());
END $$

-- ✅ After UPDATE Trigger
CREATE TRIGGER after_update_aircraft
AFTER UPDATE ON Aircraft
FOR EACH ROW
BEGIN
  INSERT INTO AuditLogs (action, table_name, record_id, old_value, new_value, created_at)
  VALUES ('UPDATE', 'Aircraft', OLD.aircraft_id, 
    JSON_OBJECT('aircraft_id', OLD.aircraft_id, 'capacity', OLD.capacity, 'brand', OLD.brand), 
    JSON_OBJECT('aircraft_id', NEW.aircraft_id, 'capacity', NEW.capacity, 'brand', NEW.brand), 
    NOW());
END $$

-- ✅ After DELETE Trigger
CREATE TRIGGER after_delete_aircraft
AFTER DELETE ON Aircraft
FOR EACH ROW
BEGIN
  INSERT INTO AuditLogs (action, table_name, record_id, old_value, created_at)
  VALUES ('DELETE', 'Aircraft', OLD.aircraft_id, 
    JSON_OBJECT('aircraft_id', OLD.aircraft_id, 'capacity', OLD.capacity, 'brand', OLD.brand), 
    NOW());
END $$

DELIMITER ;

SHOW TRIGGERS;
INSERT INTO Aircraft (capacity, brand) VALUES (250, 'Airbus');
SELECT * FROM AuditLogs ORDER BY created_at DESC;
UPDATE Aircraft SET capacity = 300 WHERE aircraft_id = 1;



DELIMITER $$

-- After INSERT Trigger for Airport
CREATE TRIGGER after_insert_airport
AFTER INSERT ON Airports
FOR EACH ROW
BEGIN
  INSERT INTO AuditLogs (action, table_name, record_id, new_value, created_at)
  VALUES ('INSERT', 'Airport', NEW.airport_id, 
    JSON_OBJECT('airport_id', NEW.airport_id, 'airport_name', NEW.airport_name, 'city', NEW.city, 'country', NEW.country), 
    NOW());
END $$

-- After UPDATE Trigger for Airport
CREATE TRIGGER after_update_airport
AFTER UPDATE ON Airports
FOR EACH ROW
BEGIN
  INSERT INTO AuditLogs (action, table_name, record_id, old_value, new_value, created_at)
  VALUES ('UPDATE', 'Airport', OLD.airport_id, 
    JSON_OBJECT('airport_id', OLD.airport_id, 'airport_name', OLD.airport_name, 'city', OLD.city, 'country', OLD.country), 
    JSON_OBJECT('airport_id', NEW.airport_id, 'airport_name', NEW.airport_name, 'city', NEW.city, 'country', NEW.country), 
    NOW());
END $$

-- After DELETE Trigger for Airport
CREATE TRIGGER after_delete_airport
AFTER DELETE ON Airports
FOR EACH ROW
BEGIN
  INSERT INTO AuditLogs (action, table_name, record_id, old_value, created_at)
  VALUES ('DELETE', 'Airport', OLD.airport_id, 
    JSON_OBJECT('airport_id', OLD.airport_id, 'airport_name', OLD.airport_name, 'city', OLD.city, 'country', OLD.country), 
    NOW());
END $$

DELIMITER ;

show triggers;

INSERT INTO Airports (airport_id, airport_name, city, country)
VALUES (105, 'Changi Airport', 'Singapore', 'Singapore');

SELECT * FROM AuditLogs WHERE table_name = 'Airport' ORDER BY created_at DESC;

UPDATE Airports
SET city = 'Singapore City'
WHERE airport_id = 101;

DELETE FROM Airports WHERE airport_id = 105;

SHOW TRIGGERS LIKE 'Airports';

SHOW TRIGGERS;

SELECT * FROM AuditLogs WHERE table_name = 'Airport' ORDER BY created_at DESC;
SELECT * FROM airports WHERE airport_id = 201;

SELECT @@global.time_zone, @@session.time_zone;

DELIMITER $$

-- ✅ After INSERT Trigger for Customer
CREATE TRIGGER after_insert_customer
AFTER INSERT ON Customers
FOR EACH ROW
BEGIN
  INSERT INTO AuditLogs (action, table_name, record_id, new_value, created_at)
  VALUES ('INSERT', 'Customers', NEW.customer_id, 
    JSON_OBJECT('customer_id', NEW.customer_id, 'f_name', NEW.f_name, 'l_name', NEW.l_name, 'date_of_birth', NEW.date_of_birth, 'gender', NEW.gender, 'email', NEW.email, 'phone_number', NEW.phone_number, 'address', NEW.address), 
    NOW());
END $$

-- ✅ After UPDATE Trigger for Customer
CREATE TRIGGER after_update_customer
AFTER UPDATE ON Customers
FOR EACH ROW
BEGIN
  INSERT INTO AuditLogs (action, table_name, record_id, old_value, new_value, created_at)
  VALUES ('UPDATE', 'Customers', OLD.customer_id, 
    JSON_OBJECT('customer_id', OLD.customer_id, 'f_name', OLD.f_name, 'l_name', OLD.l_name, 'date_of_birth', OLD.date_of_birth, 'gender', OLD.gender, 'email', OLD.email, 'phone_number', OLD.phone_number, 'address', OLD.address), 
    JSON_OBJECT('customer_id', NEW.customer_id, 'f_name', NEW.f_name, 'l_name', NEW.l_name, 'date_of_birth', NEW.date_of_birth, 'gender', NEW.gender, 'email', NEW.email, 'phone_number', NEW.phone_number, 'address', NEW.address),
    NOW());
END $$

-- ✅ After DELETE Trigger for Customer
CREATE TRIGGER after_delete_customer
AFTER DELETE ON Customers
FOR EACH ROW
BEGIN
  INSERT INTO AuditLogs (action, table_name, record_id, old_value, created_at)
  VALUES ('DELETE', 'Customers', OLD.customer_id, 
    JSON_OBJECT('customer_id', OLD.customer_id, 'f_name', OLD.f_name, 'l_name', OLD.l_name, 'date_of_birth', OLD.date_of_birth, 'gender', OLD.gender, 'email', OLD.email, 'phone_number', OLD.phone_number, 'address', OLD.address), 
    NOW());
END $$

DELIMITER ;

DELIMITER $$

-- ✅ After INSERT Trigger for Route
CREATE TRIGGER after_insert_route
AFTER INSERT ON Routes
FOR EACH ROW
BEGIN
  INSERT INTO AuditLogs (action, table_name, record_id, new_value, created_at)
  VALUES ('INSERT', 'Routes', NEW.route_id, 
    JSON_OBJECT('route_id', NEW.route_id, 'origin_airport', NEW.origin_airport, 'dest_port', NEW.dest_port, 'flightnum', NEW.flightnum, 'distance_miles', NEW.distance_miles),
    NOW());
END $$

-- ✅ After UPDATE Trigger for Route
CREATE TRIGGER after_update_route
AFTER UPDATE ON Routes
FOR EACH ROW
BEGIN
  INSERT INTO AuditLogs (action, table_name, record_id, old_value, new_value, created_at)
  VALUES ('UPDATE', 'Routes', OLD.route_id, 
    JSON_OBJECT('route_id', OLD.route_id, 'origin_airport', OLD.origin_airport, 'dest_port', OLD.dest_port, 'flightnum', OLD.flightnum, 'distance_miles', OLD.distance_miles),
    JSON_OBJECT('route_id', NEW.route_id, 'origin_airport', NEW.origin_airport, 'dest_port', NEW.dest_port, 'flightnum', NEW.flightnum, 'distance_miles', NEW.distance_miles),
    NOW());
END $$

-- ✅ After DELETE Trigger for Route
CREATE TRIGGER after_delete_route
AFTER DELETE ON Routes
FOR EACH ROW
BEGIN
  INSERT INTO AuditLogs (action, table_name, record_id, old_value, created_at)
  VALUES ('DELETE', 'Routes', OLD.route_id, 
    JSON_OBJECT('route_id', OLD.route_id, 'origin_airport', OLD.origin_airport, 'dest_port', OLD.dest_port, 'flightnum', OLD.flightnum, 'distance_miles', OLD.distance_miles),
    NOW());
END $$

DELIMITER ;

select* from auditlogs;auditlogs
