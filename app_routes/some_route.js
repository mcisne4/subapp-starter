// ==============
// === IMPORT ===
// ==============
const router = require("express").Router();


// =====================
// === APP VARIABLES ===
// =====================
let app_public_route;
let app_views_path;


// ==============
// === ROUTES ===
// ==============
router.get("/", function(req, res){
  res.render(app_views_path + "\\a_page", {
    app_public_route: app_public_route
  });
});


// ==============
// === EXPORT ===
// ==============
module.exports = function(app_info){
  app_public_route = app_info.app_public_route;
  app_views_path = app_info.app_views_path;
  return router;
}