const express = require('express')
const schoolController = require('../controllers/school-controller')
const {schoolSchema, userLocationSchema} = require('../validators/validate')
const {validate} = require('../middlewares/validate-middleware')
const router = express.Router();

router.route("/addSchool").post(validate(schoolSchema), schoolController.addSchool)
router.route("/listSchools").get(validate(userLocationSchema), schoolController.listSchools)

module.exports = router;