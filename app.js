// ==============
// === IMPORT ===
// ==============
const express = require("express");
const bodyParser = require("body-parser");
const vhost = require("vhost");
const path = require("path");


// ==================
// === SETUP DATA ===
// ==================
const {
  subdomain,
  app_public_route,
  app_public_path,
  app_routes,
  app_views_path
} = require("./app_setup");


// ==================
// === INITIALIZE ===
// ==================
const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));


// --- App Static Files ---
app.use(app_public_route, express.static(app_public_path))


// ==============
// === ROUTES ===
// ==============
const routes = require(app_routes)({
  app_public_route: app_public_route,
  app_views_path: app_views_path
});

app.use(vhost(subdomain + ".localhost", routes));

// --- Temporary for Development ---
app.use("/", routes);


// --- AnimeJS Route ---
app.get("/anime.min.js", function(req, res){
  res.sendFile(path.join(__dirname,"node_modules", "animejs", "lib", "anime.min.js"));
});


// ================
// === LISTENER ===
// ================
app.listen(3000, function(){
  console.log("Server started on port 3000");
});
