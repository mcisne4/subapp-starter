// ==============
// === IMPORT ===
// ==============
const path = require("path");

// ================
// === GET DATA ===
// ================
const subdomain = "setup";


// ==============
// === EXPORT ===
// ==============
module.exports = {
  subdomain: subdomain,
  app_public_route: "/" + subdomain + "_public",
  app_public_path: path.join(__dirname, "..", "app_public"),
  app_routes: path.join(__dirname, "..", "app_routes"),
  app_views_path: path.join(__dirname, "..", "app_views"),
}