// CREATION OF GET REQUEST

// after creating your server, the next thing is to start to communicate with the server for instance the below functions

const customerGetRequest = async(resquest, response)=>{
    return response.status(200).json({ message: "successful"})
   }
   
   const customerUserRequest = async(request, response)=>{
       return response.status(200).json({message:"List Users"})
   }
   
// CREATION OF POST REQUEST
// nb, in post request we will be getting data from the users

const customerPostRequest = async(req, res)=>{
    // or you decide to accept email and password from the user by creating a variable below
    const { email, password } = req.body

    if(!email){
        return res.status(400).json({
            message: "please add your email address corectly"
        })
    }
    if(!email.includes("@")){
      return res.status(400).json({
          message: "please add ur @ sign"
      })
    }

    return res.status(200).json({message:"getting user data successfully.."})
    email
// send back what ever they send in request.body
   
// here whatever is being send should become the user thats why we are using user:request.body
}

// in other for our function to work properly, we need to export them properly

const customerEditUserRequest = async(request, response)=>{
    return response.status(300).json({message:"update ur email and password"})
}

module.exports = {
    customerGetRequest,
    customerUserRequest,
    customerPostRequest,
    customerEditUserRequest
}

// go back to main files and import them there