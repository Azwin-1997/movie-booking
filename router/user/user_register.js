const express = require('express')
const router = express.Router()

const userregistercontrol = require('../../controller/user/userregister_c')


// router.get('/',userregistercontrol.get)
router.post('/',userregistercontrol.post)

module.exports = router