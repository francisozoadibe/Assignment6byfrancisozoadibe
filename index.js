const express = require("express")
const dotenv = require

// importing our functions
const {makeeGetRequest, makeUserRequest, makePostRequest, makeEditUserRequest} = require("./employee_directory")

const {handleGetRequest, handleUserRequest, handlePostRequest, handleEditUserRequest} = require("./customer_management")

const {eventGetRequest, eventUserRequest, eventPostRequest, eventEditUserRequest} = require("./Event_booking")

const {productGetRequest, productUserRequest, productPostRequest, productEditUserRequest} = require("./product_inventory")






("dotenv").config()
// or dotenv.config()

const app = express() // here telling our app to run on express() function


// creation of the middleware function
app.use(express.json())
// here we are telling app to use the express body parser that comes with express and pass json into our backend
const PORT =process.env.PORT || 6500

app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`)
})



// the next thing to do is to  declare the endpoint for instance below

app.get("/", handleGetRequest)
// apis has three part 1. route 2. endpoint and the function to handle the request

// go to post and test your site the reason we are using postman is that, we dont have website or app the our server will be handling request. Hence go to postman and create a get request by clicking on work space, then clicking on the 


// here you have got to create another endpoint for the new variable called handleUserRequest
app.get("/user", handleUserRequest)

// remember while creating an apis you first create the variable with arrow function and then create your endpoint for instance const handleUserRequest = async(resquest, response)=>{return response.status(200).json({message: "User Added Successfully"})} And app.get("/user", handleUserRequest)



// after creating our post request we need to create our endpoints
app.post("/add-user", handlePostRequest)
// when you get such this on your terminal
//TypeError: Cannot destructure property 'email' of 'req.body' as it is undefined. const { email, password } = req.body
// the solution is that you need a middle ware. a middle is a function that run in the middle or in between attempt to the request at the point in which the request is made and the point in which it is attended to. HEnce we are not installing the body parser since express comes with it inbuilt. nb we need a body parser

// Hoisting is when you call your function before declaring it. this is wrong in programming but what javascript does is to move all the function and variables up and this will allow th block of code to run. NB, this can only work with ES5. And the reason people dont use ES5 is because of hoisting, ES5  picks all your variables and functions and move it to the top, it does matter where you declare them.

// CRUD
// AUTHENTICATION & AUTHORISATIONS

// Making your work clean, one need to create a separate files. create a new file name funcion with .js as the file extension and copy all your function inside it and paste them there


app.get("/", productGetRequest)
app.get("/", makeGetRequest)
app.get("/", eventeGetRequest)
app.get("/", handleGetRequest)



app.post("/add-handle_user", handlePostRequest)
app.post("/add-make_user", makePostRequest)
app.post("/add-event_user", eventPostRequest)
app.post("/add-product_user", productPostRequest)


app.put("/update_handle", handleEditUserRequest)
app.put("/update_make", makeEditUserRequest)
app.put("/update_event", eventEditUserRequest)
app.put("/update_product", productEditUserRequest)


app.delete("/delete_management", handleEditUserRequest)
app.delete("/delete_emplyee", makeEditUserRequest)
app.delete("/delete_product", productEditUserRequest)
app.delete("/delete_event", eventEditUserRequest)