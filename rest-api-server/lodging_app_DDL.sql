-- Hosts
INSERT INTO Hosts(name, phone_number, email, address_of_host)
    VALUES (
        'Chad Thunderdome',
        3034553300,
        'chadtdome@gmail.com',
        '71 Red Hill Rd, Boulder, CO 80302'
    );

INSERT INTO Hosts(name, phone_number, email, address_of_host)
    VALUES (
        'Brock Anthony',
        4354262860,
        'banthony@gmail.com',
        '55 Canyon Dr, Ivins, UT 84738'
    );

INSERT INTO Hosts(name, phone_number, email, address_of_host)
    VALUES ('John Beauvillier',
        8024429846,
        'jbeauvillier@gmail.com',
        '127 Memory Lane, Putney, VT 05346'  
    );

INSERT INTO Hosts(name, phone_number, email, address_of_host)
    VALUES ('Blade Jenkins',
        8605473214,
        'bladejenkins@gmail.com',
        '127 Breeze Dr, East Hampton, NY 11937'  
    );

INSERT INTO Hosts(name, phone_number, email, address_of_host)
    VALUES ('Michelle Jones',
        8008177254,
        'michellejones@gmail.com',
        '2060 Berkley St, Manhasset, NY 11030'  
    );


-- Guests
INSERT INTO Guests(name, phone_number, address_of_guest, email)
    VALUES ('Felix Yengel',
        5162449023,
        '149 Majors Path, Southhampton, NY 11968', 
        'xqc@gmail.com' 
    );

INSERT INTO Guests(name, phone_number, 
address_of_guest, email)
    VALUES ('Tyler Steinkamp',
        2136579083,
        '8309 Yucca Lane, Los Angeles, CA 90046', 
        'tyler1@gmail.com'
    );

INSERT INTO Guests(name, phone_number, address_of_guest, email)
    VALUES ('Sammy Jade',
        7738413542,
        '225 Menomonee St, Chicago, IL 60614', 
        'sammyjade@gmail.com' 
    );

INSERT INTO Guests(name, phone_number, address_of_guest, email)
    VALUES ('Bradley Best',
        5166599414,
        '25 Pilgrim St, Lynbrook, NY 11563', 
        'bradleybest@gmail.com' 
    );

INSERT INTO Guests(name, phone_number, address_of_guest, email)
    VALUES ('Peter Parker',
        3475389942,
        '3314 146th St, Flushing, NY 11354', 
        'peterparker@gmail.com' 
    );

-- Properties
INSERT INTO Properties(property_name, bedroom_amount, bed_amount, bath_amount, capacity, 
                        price_per_night, style, 
                        host_unique_id, street_address_property)
    VALUES ('Luxe Boulder on Mountain Peak',
        3,
        4,
        3,
        6,
        616,
         'Home',
        (SELECT host_unique_id FROM Hosts WHERE name = 'Chad Thunderdome'),
         '13 Mountaintop Rd, Boulder, Colorado 08901'
    );

INSERT INTO Properties(property_name, bedroom_amount, bed_amount, bath_amount, capacity, 
                        price_per_night, style, 
                        host_unique_id, street_address_property)
    VALUES ('Exquisite Luxury Home Lucky #22',
        3,
        3,
        3,
        6,
        448,
         'Home',
        (SELECT host_unique_id FROM Hosts WHERE name = 'Brock Anthony'),
         '22 Encanto Circle, Ivins, UT 84738'
    );

INSERT INTO Properties(property_name, bedroom_amount, bed_amount, bath_amount, capacity, 
                        price_per_night, style, 
                        host_unique_id, street_address_property)
    VALUES ('Honeycrisp Cottage - A Tiny Timber Frame',
        2,
        2,
        1,
        4,
        182,
         'Home',
        (SELECT host_unique_id FROM Hosts WHERE name = 'John Beauvillier'),
         '67 Sunset Dr, Putney, VT 05346'
    );

INSERT INTO Properties(property_name, bedroom_amount, bed_amount, bath_amount, capacity, 
                        price_per_night, style, 
                        host_unique_id, street_address_property)
    VALUES ('Million Dollar View Luxury Spacious Apartment',
        1,
        2,
        1,
        4,
        258,
         'Apartment',
        (SELECT host_unique_id FROM Hosts WHERE name = 'Blade Jenkins'),
         '47 W 33rd St, New York, NY 05346'
    );

INSERT INTO Properties(property_name, bedroom_amount, bed_amount, bath_amount, capacity, 
                        price_per_night, style, 
                        host_unique_id, street_address_property)
    VALUES ('Stunning Downtown High Rise Apartment',
        1,
        1,
        1,
        2,
        76,
         'Apartment',
        (SELECT host_unique_id FROM Hosts WHERE name = 'Michelle Jones'),
         '53 S Clark St, Chicago, IL 60007'
    );

-- Reservations
INSERT INTO Reservations(guest_unique_id, date_arrive, date_leave, total_price, guest_amount, property_unique_id)
VALUES (
    (SELECT guest_unique_id FROM Guests WHERE name = 'Felix Yengel'),
    '2022-04-25',
    '2022-05-02',
    5316.74,
    2,
    (SELECT property_unique_id FROM Properties WHERE property_name = 'Luxe Boulder on Mountain Peak')
);

INSERT INTO Reservations(guest_unique_id, date_arrive, date_leave, total_price, guest_amount, property_unique_id)
VALUES (
    (SELECT guest_unique_id FROM Guests WHERE name = 'Tyler Steinkamp'),
    '2022-04-17',
    '2022-05-24',
    4273.51,
    2,
    (SELECT property_unique_id FROM Properties WHERE property_name = 'Exquisite Luxury Home Lucky #22')
);

INSERT INTO Reservations(guest_unique_id, date_arrive, date_leave, total_price, guest_amount, property_unique_id)
VALUES (
    (SELECT guest_unique_id FROM Guests WHERE name = 'Sammy Jade'),
    '2022-06-12',
    '2022-06-19',
    1645.66,
    4,
    (SELECT property_unique_id FROM Properties WHERE property_name = 'Honeycrisp Cottage - A Tiny Timber Frame')
);

INSERT INTO Reservations(guest_unique_id, date_arrive, date_leave, total_price, guest_amount, property_unique_id)
VALUES (
    (SELECT guest_unique_id FROM Guests WHERE name = 'Bradley Best'),
    '2022-03-21',
    '2022-03-25',
    1251.87,
    2,
    (SELECT property_unique_id FROM Properties WHERE property_name = 'Million Dollar View Luxury Spacious Apartment')
);

INSERT INTO Reservations(guest_unique_id, date_arrive, date_leave, total_price, guest_amount, property_unique_id)
VALUES (
    (SELECT guest_unique_id FROM Guests WHERE name = 'Peter Parker'),
    '2022-06-12',
    '2022-06-17',
    797.59,
    2,
    (SELECT property_unique_id FROM Properties WHERE property_name = 'Stunning Downtown High Rise Apartment')
);