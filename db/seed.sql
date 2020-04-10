
USE covid_tracker; 

INSERT INTO Users (email, password, createdAt, updatedAt)
    VALUES ("ben@work.com", "1234pass", "2020-02-22 04:01:38", "2020-02-22 04:01:38"), 
            ("brenda@work.com", "1234pass", "2020-02-22 04:01:38", "2020-02-22 04:01:38"); 

INSERT INTO People (firstName, lastName, age, sex, lat, lon, smoking, preExistingConditions, sick, UserId, createdAt, updatedAt)
    VALUES ("Ben", "Simmons", 44, "male", 36.151490, -86.765010, "never", false, true, 1, "2020-02-22 04:01:38", "2020-02-22 04:01:38"),
     ("Brenda", "Lockwood", 39, "female", 36.138750, -86.801790, "never", false, false, 2, "2020-02-22 04:01:38", "2020-02-22 04:01:38");
 -- [

 --     {
 --         "name": "Brenda Lockwood",
 --         "id":2,
 --         "lat": 36.138750,
 --         "lng": -86.801790,
 --         "sex": "F",
 --         "smoker": false,
 --         "age": 39
 --     },
 --     {
 --         "name": "Kevin Garrentino",
 --         "id":3,
 --         "lat": 36.123750,
 --         "lng": -86.541790,
 --         "sex": "M",
 --         "Smoker": true,
 --         "age": 18
 --     },
 --     {
 --         "name": "Tilda Fuches",
 --         "id":4,
 --         "lat": 36.368750,
 --         "lng": -86.441790,
 --         "sex": "F",
 --         "smoker": false,
 --         "age": 82
 --     },
 --     {
 --         "name": "Ryan Allen-Grave",
 --         "id":5,
 --         "lat": 36.208750,
 --         "lng": -86.741790,
 --         "sex": "M",
 --         "smoker": false,
 --         "age": 26
 --     }
 --     ,    {
 --         "name": "Carmine Bosc",
 --         "id":6,
 --         "lat": 36.118750,
 --         "lng": -87.011790,
 --         "sex": "M",
 --         "smoker": true,
 --         "age": 60
 --     }
 -- ]