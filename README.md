# 17-My_Fitness_Tracker  

<span align="center">   

---

 <a href="https://img.shields.io/badge/express-v4.16.4-orange?style=plastic"><img alt="Express" src="https://img.shields.io/badge/express-v4.16.4-orange?style=plastic"/></a>
<a href="https://img.shields.io/badge/DB-MongoDB-yellow?style=plastic"><img alt="MongoDB" src="https://img.shields.io/badge/DB-MongoDB-yellow?style=plastic"/></a>
<a href="https://img.shields.io/badge/npm-Mongoose-red?style=plastic"><img alt="Mongoose schema" src="https://img.shields.io/badge/npm-Mongoose-red?style=plastic" /></a>
<a href="https://img.shields.io/badge/npm-morgan-blue?style=plastic"><img alt="Morgan" src="https://img.shields.io/badge/npm-morgan-blue?style=plastic"/></a>
 <a href="https://img.shields.io/badge/License-MIT-brightgreen?style=plastic"><img alt="M.I.T. License use" src="https://img.shields.io/badge/License-MIT-brightgreen?style=plastic"/></a>  
 
 </span>

---

## Table of Contents  
* [Description](#Description)
* [User Story and Details](#User-Story-and-Details)  
* [Installation and Usage](#Installation-and-Usage)  
* [Images of the app](#Images-of-the-app-)  
* [License](#License)  
* [Contact](#Contact) 


## Description
This application helps you to track your workouts: it keeps track of each exercises for given workouts each day and renders them in graphic analysis on the dasboard page. It uses [Express](https://www.npmjs.com/package/express), [MongoDB](https://www.mongodb.com/), [Mongoose](https://https://www.npmjs.com/package/mongoose) and [Morgan](https://www.https://www.npmjs.com/package/morgan).  


## User Story and Details


```
User Story Acceptance Criteria
```
```
AS a exercises fan, I want to be able to view, create and track daily workouts,  
SO I can have a clear an easy visual of my workout details.  
WHEN I create a workout on a given day,  
I want to log multiple exercises for this workout.  
WHEN I add a new excercise,  
I want to track the name, type, weight, sets, reps, and duration of exercise. 
WHEN I enter a cardio exercise,  
I want to track my distance traveled.
```

:information_source:  

The MongoDB _workout_ contains only one collection called _workouts_.  


## Installation and Usage  

You can use directly the [deployed app](https://homework-17-my-fitness-tracker.herokuapp.com/) on Heroku or run it locally with the following steps:   
- Open a terminal instance  
- Clone the following [repo](https://github.com/Delph-Sunny/17-My_Fitness_Tracker)  
- In the working directory, install the dependencies package with the following code line `npm i`  
- Once the dependencies have been installed, enter `npm run seed` if you want some data.  
- Then enter `npm start` or `npm run watch`. 

When using the app, follow the queries to add new workouts or exercises. Note: All fields are mandatory.  
Go to the Dashboard page to see the workout statistics.  

## Images of the App :mag:  

![My_Fitness_Tracker](./images/Snippet1.PNG)  


## License  

Copyright (c) 2021 DT. This project is [MIT](https://choosealicense.com/licenses/mit) licensed.

## Contact  

:octocat:  GitHub: [Delphine](https://github.com/Delph-Sunny)  


---