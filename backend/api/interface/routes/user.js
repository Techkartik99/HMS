
import authMiddleware from "../../lib/authMiddleware.js"
import { bookHotel, searchHotel } from "../controllers/hotel_controller.js"
import { myBookings, Signin, Signup } from "../controllers/user_controller.js"

export default function userRouter(router){
    router.post("/user/signup",Signup)
    router.post("/user/signin",Signin)
    router.post("/user/search",searchHotel)
    router.post("/user/book",authMiddleware,bookHotel)
    router.get("/user/mybookings",authMiddleware,myBookings)
}