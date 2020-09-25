const path = require('path');
const router = require('express').Router();
const resourceRoutes = require('./api/resource');
const snippetRoutes = require('api/snippets')

router.use('/api/resources', resourceRoutes);
router.use('/api/snippets', snippetRoutes)

// If no API routes are hit, send the React app
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });

module.exports = router;