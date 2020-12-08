const express = require('express');
const numberRoutes = require('../contollers/sorter');

const router =express.Router();

router.post('/',numberRoutes.sortNumbers);

export default router;


