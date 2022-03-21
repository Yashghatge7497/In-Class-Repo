const list = [
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
 
 
      },];
      function get(id){
        return list.find(user => user.id === parseInt(id));
    }
    
    module.exports.list = list;
    module.exports.get = get;