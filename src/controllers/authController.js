const User = require('../models/Authmodel')
const bcrypt = require('bcrypt')
const passport = require('passport')

function authController(){
    return{
        signup(req,res){
            res.render('signup.ejs')
        },
        async Postsignup(req,res){
            const {name, email, password} = req.body

            //checking if details are entered
            if(!name || !email || !password){
             req.flash('error',"Enter your complete details")
             return res.redirect('/signup')   
            }

            //Hashed password
            const hashedPassword = await bcrypt.hash(password,10)

            //Create a User
            const user =  new User({
                name:name,
                email:email,
                password:hashedPassword,
            })
            
            user.save().then(()=>{
                return res.redirect('/signup')
            }).catch(err=>{
                req.flash('something went wrong')
                return res.redirect('/signup')
            })
        },
        login(req,res){
            res.render('login.ejs')
        },
        Postlogin(req,res,next){

            const {email, password} = req.body

            if(!email || !password) {
                req.flash('error','Enter your completer details')
                return res.redirect('/login')
            }

            passport.authenticate('local',(err, user, info)=>{
                if(err){
                    
                    req.flash('error', info.message)
                    return next(err)
                }

                if(!user){
                    req.flash('error', info.message)
                    return res.redirect('/login')
                }
                req.logIn(user,(err)=>{
                    if(err){
                        req.flash('error', info.message)
                        return next(err)
                    }
                    return res.redirect('/quiz')
                   
                })
            })(req,res,next)


        },
        logout(req,res){
            req.logout()
            return res.redirect('/index')
        },
        async update(req,res){
            
            try{
                const val = await User.findById(req.params.id)
                val.name = req.body.name
                const a1 = await val.save()
                res.send(a1)
            }catch(error){
                res.send(error)
            }
            
    
           },
           async gone(req,res){
            try{
             const val = await User.findByIdAndDelete(req.params.id)
             res.send("Value deleted")
            }catch(error){
                res.send(error)
            }
 
        }
    }
}


module.exports = authController