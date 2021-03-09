const db = require("../models");

module.exports = (app) => {
// Create new workout
  app.post("/api/workouts", ({ body }, res) => {
    db.Workout.create(body).then((workout) => {
      res.status(201).json(workout);
    }).catch((err) => {
      res.status(400).json(err);
    });
  });

  // Get all workouts
  app.get("/api/workouts", (req, res) => {
    db.Workout.aggregate(
      [
        {
          $addFields: {
            totalDuration: {$sum: "$exercises.duration"}
          }
        }
      ]
    ).then((workout) => {
      res.status(200).json(workout);
    }).catch((err) => {
      res.status(400).json(err);
    });
  });

  // Update workout: Add new exercises to the last workout displayed
  app.put("/api/workouts/:id", function({body, params}, res) {
    db.Workout.findByIdAndUpdate(
      params.id,
      { $push: { exercises: body } }, // The $push operator appends a specified value to an array
      { new: true }
    )
      .then((workout) => {
        res.status(200).json(workout);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });

  // Get all workouts within a range
  app.get("/api/workouts/range", (req, res) => {
    db.Workout.aggregate(
      [
        {
          $addFields: {
            totalDuration: {$sum: "$exercises.duration"}
          }
        }
      ]
    )
    // Get the last 7 workouts only
     // .sort( {day: "desc" })
      .limit(7)
     // .sort( {day: "asc" }) // reorder from oldest to newest for charts display
      .then((workout) => {
        res.status(200).json(workout);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });
};