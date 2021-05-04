const express = require('express')


function baseController(){
    return{

        index(req,res){
            res.render('index.ejs')
        },
        care(req,res){
            res.render('care.ejs')
        },
        about(req,res){
            res.render('about.ejs')
        },
        python(req,res){
            res.render('python.ejs')
        },
        datastruc(req,res){
            res.render('datastruc.ejs')
        },
        java(req,res){
            res.render('java.ejs')
        },
        contact(req,res){
            res.render('Contact.ejs')
        },
        quiz(req,res){
            res.render('quiz.ejs')
        },
        quizone(req,res){
            res.render('Quize1/quizone.ejs')
        },
        quitwo(req,res){
            res.render('Quize2/quiztwo.ejs')
        },
        quizthree(req,res){
            res.render('Quize3/quizthree.ejs')
        }
    }
}

module.exports = baseController