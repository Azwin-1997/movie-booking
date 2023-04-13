const express = require('express')
const router = express.Router()

const AdminController = require('../../controller/Admin/adminlogin_c')
router.get('/',AdminController.get)
router.post('/adminlogin',AdminController.post)
router.post('/admin', AdminController.addAdmin);

router.post('/owner',AdminController.ownerpost)
router.get('/owner',AdminController.ownerget)






module.exports = router