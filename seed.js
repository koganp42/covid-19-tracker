require('dotenv').config();
const db = require("./models"); 

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

const peopleToSeed= [
    {
        firstName: "Ben",
        lastName:"Simmons",
        age: 44,
        sex:"male",
        lat: 36.151490,
        lon: -86.765010,
        smoking: "never",
        preExistingConditions: false,
        sick: true,
        UserId: 1
    },
    {
        firstName: "Brenda",
        lastName:"Lockwood",
        age: 39,
        sex:"female",
        lat: 36.138750,
        lon: -86.801790,
        smoking: "never",
        preExistingConditions: false,
        sick: false,
        UserId: 2 
    }

]

const seedDatabase = ()=>{
    return db.User.bulkCreate(usersToSeed)
        .then(async()=> {
            await db.Person.bulkCreate(peopleToSeed)
                .then(()=>{
                    console.log("seed complete"); 
                })
                .catch(err=> console.log(err)); 
            console.log("created users"); 
        })
        .catch( err => console.log(err)); 
}


seedDatabase()
    .then(()=>{
        process.exit(); 
    }); 

// module.exports = seedDatabase(); 