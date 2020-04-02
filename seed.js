const db = require("./models"); 
// const seedDatabase= ()=>{
//         db.sequelize.sync({ force: true }).then( async function(){
//             try{
//                 console.log('connected'); 
//                 // const ben = await db.Person.create({ firstName: "Ben", lastName: "Simmons", age: 44, sex: "male", lat: 36.151490, lon: -86.765010, smoking: "never", preExistingConditions: false, sick: true, UserId: 3});
//                 // console.log("Jane's auto-generated ID:", ben.id);
//             }  catch (err){
//                 console.log(err); 
//             }
           
//           });
    
// }; 

const usersToSeed = [
    {
        email: "ben@work.com",
        password:  "1234pass"
    },
    {
        email: "brenda@work.com",
        password:  "1234pass"
    }
]

const seedDatabase = ()=>{
    return db.User.bulkCreate(usersToSeed)
        .then(()=> console.log("users seeded"))
        .catch( err => console.log(err)); 
}

seedDatabase()
    .then(()=>{
        process.exit(); 
    }); 