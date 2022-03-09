
import router from "../router";
import * as users from "../models/user";
import { reactive } from "vue";

const session = reactive({
    user: null as users.User | null,
})

export async function Login(handle: string, password: string) {
    const user = users.list.find(u=>u.handle === handle );
    if(!user){

        throw {message: "user not found"};
        
    }
    if(user.password !== password){

        throw {message: "Incorrect Password"};
    }
    session.user = user;
    router.push('/messages');
}
    
export default session;