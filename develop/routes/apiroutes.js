var database = require ("../public/database.js");
module.exports = function(app) {

  app.get("/api/notes", function(req, res) {
    res.json(database);
  });


  app.post("/api/notes", function(req, res) {
    if(database.length < 500){
        console.log("your note has been saved!")
    database.push(req.body);
    res.json(true);
    }
    else{
        console.log("you have too many notes saved..")
        res.json(false);
    }
  });


app.post("/api/clear", function(req, res) {
  database.length = 0;
  res.json({ ok: true });
});
};
