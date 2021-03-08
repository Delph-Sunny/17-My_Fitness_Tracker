const db = require("../models");

function durationCalculation(workout) {
  // Add the total duration without the aggregate methode
  workout.forEach((workout) => {
    let total = 0;
    workout.exercises.forEach((ex) => {
      total += ex.duration;
    });
    workout.totalDuration = total;
  });
  return workout.totalDuration;
}

module.exports = (app) => {
// Create new workout
  app.post("/api/workouts", ({ body }, res) => {
    console.log("New workout: ", body); // FOR TESTING
    db.Workout.create(body).then((workout) => {
      res.status(201).json(workout);
    }).catch((err) => {
      res.status(400).json(err);
    });
  });

  // Get all workouts
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
    /*  .aggregate(
        {
          $addFields: { totalDuration: { $sum: "$exercises.duration" } }
        }) */
      .then((workout) => {
        durationCalculation(workout);
        console.log("All past data:", workout); // FOR TESTING
        res.status(200).json(workout);
      }).catch((err) => {
        res.status(400).json(err);
      });
  });

  app.put("/api/workouts/:id", function({body, params}, res) {
    db.Workout.findByIdAndUpdate(
      params.id,
      { $push: { exercises: body } }, // The $push operator appends a specified value to an array
      { new: true }
    )
      .then((workout) => {
        console.log("new exercise in Workout = ", workout); // FOR TESTING
        res.status(200).json(workout);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });


  app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
    /* .limit(7)*/  // TO DO: Replace by last 7 days
      .sort( {day: "asc" })
      .then((workout) => {
        durationCalculation(workout); // Calculate TotalDuration
        res.status(200).json(workout);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });
};