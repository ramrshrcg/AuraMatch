import User from "../model/user/userModel.js"


const loginController = async (req, res) => {
    const { name, email, password, userName } = req.body
    const user = await User.findOne({ email })
    if (!user) {
       return res.status(404).json({ message: "User not found . Please register first" })
    }
   
    res.status(200).json({
        "message":"login sucessfully ",
        "user":user
    })
        
}




const registerController = async (req, res) => {
    const { name, email, password, userName } = req.body
    console.log(req.body);

    const user = await User.findOne({ userName })
    console.log(user)
    if (user==userName) {
        return res.status(400).json({ message: "User name already exists. Please choose another one" })
    }
    const newUser = new User({ name, email, password, userName })

    res.status(200).json({
        "message": "User created successfully",
        "user": newUser
    })


}
export  {loginController, registerController}  