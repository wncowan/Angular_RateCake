var c = require("../controllers/cakes")();

module.exports = (app) =>{
    app.get("/desserts", (req, res) =>{
        c.displayDessert(req, res);
    });
    app.post("/newDessert", (req, res) =>{
        c.createDessert(req, res);
    });
    app.post("/newComment/:id", (req, res) =>{
        c.addComment(req,res);
    })
    app.get("/dessertRatings/:id", (req, res) =>{
        console.log("I am in the routes for the dessert ratings");
        c.dessertRatings(req, res);
    })
}