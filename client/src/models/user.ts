export interface User{

    firstname : string;
    lastname : string;
    handle : string;
    password : string;
    email : string;
    pic : string;
    id : number
}
export const list: User[] = [
   {
        firstname : 'yash',
        lastname : 'ghatge',
        handle : '@yash',
        password : 'password',
        email :'yash@gmail.com',
        pic : 'https://randomwordgenerator.com/img/picture-generator/54e1d24b4d5aaa14f1dc8460962e33791c3ad6e04e5074417d2e7ed69f49cd_640.jpg',
        id : 1,


     },
     {
        firstname : 'sakshi',
        lastname : 'ghatge',
        handle : '@sakshi',
        password : 'password1',
        email :'sakshi@gmail.com',
        pic : 'https://randomwordgenerator.com/img/picture-generator/54e1d24b4d5aaa14f1dc8460962e33791c3ad6e04e5074417d2e7ed69f49cd_640.jpg',
        id : 2,


     }]


