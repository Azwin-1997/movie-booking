const express = require('express');
const router = express.Router();

const ownercontrol = require('../../controller/owner/ownerlogin_c')


router.get('/',ownercontrol.get)
// router.post('/',ownercontrol.post)

router.post('/',ownercontrol.post);

module.exports = router