import {Schema, model} from "mongoose"

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Please Enter a password"],
    }
}, { timestamps: true })


const  User = model("User", userSchema)

export default User;


