const express = require('express')
const router = express.Router()

const userlogincontrol = require('../../controller/user/userlogin_c')

// router.get('/',userlogincontrol.get)
router.post('/',userlogincontrol.post)

module.exports = router