
const express = require('express')
const router = express.Router()
const userController = require('../controllers/user')
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })


router.get('/get-user/:id', userController.getUser)
router.get('/get-users', userController.getUsers)
router.post('/add-user', upload.single('image'), userController.addUser)
router.put('/edit-user/:id', upload.single('image'), userController.editUser)
router.delete('/delete-user/:id', userController.deleteUser)


module.exports = router