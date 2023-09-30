// Require the 'express' module to create a router
var express = require('express');
// Create a new router instance
var router = express.Router();

/* GET home page. */
// Define a route for the root URL ("/"). When a user accesses the root URL,
// it will render the 'index' view and pass it the title 'Express'.
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Define a route for the '/about' URL. When a user accesses the '/about' URL,
// it will render the 'about' view and pass it the title 'About'.
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

// Define a route for the '/projects' URL. When a user accesses the '/portfolio' URL,
// it will render the 'portfolio' view and pass it the title 'Portfolio'.
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

// Define a route for the '/contact' URL. When a user accesses the '/contact' URL,
// it will render the 'contact' view and pass it the title 'Contact'.
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

// Define a route for the '/service' URL. When a user accesses the '/service' URL,
// it will render the 'service' view and pass it the title 'Service'.
router.get('/service', function(req, res, next) {
  res.render('service', { title: 'Service' });
});

// Export the router to make it available for use in other parts of the application
module.exports = router;
