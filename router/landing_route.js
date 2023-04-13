const express = require('express')
const router = express.Router()

const landingcontrol = require('../controller/landing_c')

router.get('/',landingcontrol.get)

module.exports = router