require('dotenv').config();
const db = require("./models"); 

const usersToSeed = [
    {
        email: "ben@work.com",
        password:  "1234pass",
        admin: "true",
        adminPassword: "admin"

    },
    {
        email: "brenda@work.com",
        password:  "1234pass",
        admin: "false"
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
        preExistingConditions: "false",
        sick: "true",
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
        preExistingConditions: "false",
        sick: "false",
        UserId: 2 
    }
]

const illnessesToSeed= [
    {
        "tested": "true",
        "dateOfTest": "2020-03-10",
        "dateOfOnset": "2020-03-05",
        "symptoms": "dry cough and fever",
        "hospitalized": "true",
        "dateOfHospitalization": "2020-03-10",
        "intensiveCare": "false",
        "death": "false",
        "dateOfRecovery": "2020-03-17",
        "PersonId": 1
    }
]

// want to refactor this so it's not using await and then
const seedDatabase = ()=>{
    return db.User.bulkCreate(usersToSeed)
        .then(async ()=> {
            await db.Person.bulkCreate(peopleToSeed)
                .then(async()=>{
                    await db.Illness.bulkCreate(illnessesToSeed)
                        .then(()=>{
                            console.log("seed complete"); 
                        })
                        .catch(err => {
                            console.log(err)
                        }); 
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