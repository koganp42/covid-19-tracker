# Covid-19-Tracker
A website for users to self-report their COVID-19 test results which can then be tracked by epidemiologists to model the spread of the illness, and view data visualizations about patients' medical statuses. On opening the page, the user is prompted to create an account. They then fill out a form with personal information and medical history, and are asked permission for the browser to use their location. On sumbitting the form, a map is displayed with their location and information displayed, and tabs to view aggregate data about users' demographic information, medical status and outcomes. 

## Motivation
Our motivation for this project was simple: as the COVID-19 pandemic unfolded, we knew we wanted to build something, even something simple, that would address the crisis through coding. 

![](images/screenshot2.png)

## View
View the deployed application on [Heroku](hhttps://covid19trackerapp.herokuapp.com/)

## Instillation/ Set-up
1. Clone or Fork this repo on to your local machine
2. Open in your code editor
3. run `npm start`
4. run `npm run seed` to seed the database with fake users (optional)
5. Enjoy!

## Technologies Used
#### Front-End
* React.js
* Material-UI
* Victory Charts
* React-Google-Maps
* Geolocation API

#### Back-End
* Node.js
* MySQL
* Sequelize ORM
* Passport.js

## Plans for Future Development
For the future, we would like to make the Admin priviliges more robust. An admin would be able to edit/update patient data, and track the user's movements to update their location on the map. We would also like to utilize the patient's information to display more data visualizations, charts, graphs, etc, such as the duration of their illness. One other useful feature would be an email alert system that, upon a positive test result, automatically alerts other users via email that there is a covid-19 patient in their general vicinity, and recommends their getting tested.   


## Authors: github/email
* Kogan Pack: koganp42 / koganp42@gmail.com
* Jamie Kook: JamieKook / kookjc6@gmail.com
* Alex Dollard: acdollard / alexdollard141@gmail.com
