import User from "../model/user/userModel.js"


const loginController = async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (!user) {
        return res.status(404).json({ message: "User not found . Please register first" })
    }
    if(password!=user.password)
    {
        return res.status(401).json({ message: "Invalid password" })

    }
    res.status(200).json({
        "message": "login sucessfully ",
        "user": user
    })

}

const registerController = async (req, res) => {
    const { name, email, password, userName } = req.body
    console.log(req.body);

    const user = await User.findOne({ userName })

    if (user) {
        return res.status(400).json({ message: "User name already exists. Please choose another one" })
    }
    const newUser = await User.create({ name, email, password, userName })

    res.status(200).json({
        "message": "User created successfully",
        "user": newUser
    })


}
export { loginController, registerController }  