DROP DATABASE IF EXISTS covid_tracker; 
CREATE DATABASE covid_tracker; 
USE covid_tracker; 

-- if you already have created this user, you cannot create it again
CREATE USER 'dummy'@'localhost' IDENTIFIED BY 'password'; 
GRANT ALL PRIVILEGES ON covid_tracker. * TO 'dummy'@'localhost';