const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1><p>Try /api/categories or /api/products or /api/tags</p>")
});

module.exports = router;