const express = require('express')
const router = express.Router()
const authController = require('../src/controllers/authController')
const baseController = require('../src/controllers/baseController')


router.get('/')
router.get('/signup',authController().signup) //Read
router.post('/signup',authController().Postsignup) //Create

router.get('/login',authController().login)
router.post('/login',authController().Postlogin)

router.post('/logout',authController().logout)
 
router.get('/index',baseController().index)
router.get('/about',baseController().about)
router.get('/contact',baseController().contact)
router.get('/care',baseController().care)
router.get('/python',baseController().python)
router.get('/java',baseController().java)
router.get('/data-structure',baseController().datastruc)
router.get('/quiz',baseController().quiz)
router.get('/quiztwo',baseController().quitwo)
router.get('/quizthree',baseController().quizthree)
router.get('/quizone',baseController().quizone)

router.patch('/signup/:id',authController().update) // Update
router.delete('/signup/:email',authController().gone) // Delete

module.exports = router