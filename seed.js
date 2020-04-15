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
    },
    {
        email: "marshall@work.com",
        password:  "1234pass",
        admin: "false"
    },
    {
        email: "mojo@work.com",
        password:  "1234pass",
        admin: "false"
    },
    {
        email: "carmine@work.com",
        password:  "1234pass",
        admin: "false"
    },
    {
        email: "jenine@work.com",
        password:  "1234pass",
        admin: "false"
    },
    {
        email: "tilda@work.com",
        password:  "1234pass",
        admin: "false"
    },
    {
        email: "aña@work.com",
        password:  "1234pass",
        admin: "false"
    },
    {
        email: "ryan@work.com",
        password:  "1234pass",
        admin: "false"
    },
    {
        email: "carl@work.com",
        password:  "1234pass",
        admin: "false"
    },
    {
        email: "timothy@work.com",
        password:  "1234pass",
        admin: "false"
    },
    {
        email: "henry@work.com",
        password:  "1234pass",
        admin: "false"
    }
]

const peopleToSeed= [
    {
        firstName: "Ben",
        lastName:"Hale",
        age: 44,
        dateOfBirth: "1975/11/01",
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
        dateOfBirth: "1980/11/01",
        sex:"female",
        lat: 36.138750,
        lon: -86.801790,
        smoking: "never",
        preExistingConditions: "false",
        sick: "true",
        UserId: 2 
    },    
    {
        firstName: "Marshall",
        lastName:"Claiborne",
        age: 25,
        dateOfBirth: "1994/11/01",
        sex:"male",
        lat: 35.938750,
        lon: -87.601790,
        smoking: "never",
        preExistingConditions: "false",
        sick: "false",
        UserId: 3 
    },    
    {
        firstName: "Mojo",
        lastName:"Jojo",
        age: 90,
        dateOfBirth: "1929/11/01",
        sex:"male",
        lat: 35.638750,
        lon: -86.901790,
        smoking: "never",
        preExistingConditions: "true",
        sick: "true",
        UserId: 4 
    },    
    {
        firstName: "Carmine",
        lastName:"Bosc",
        age: 60,
        dateOfBirth: "1959/11/01",
        sex:"male",
        lat: 36.368750,
        lon: -87.021790,
        smoking: "never",
        preExistingConditions: "true",
        sick: "true",
        UserId: 5 
    },    
    {
        firstName: "Jennine",
        lastName:"Peck",
        age: 8,
        dateOfBirth: "2011/11/01",
        sex:"female",
        lat: 36.298750,
        lon: -87.028790,
        smoking: "never",
        preExistingConditions: "false",
        sick: "true",
        UserId: 6 
    },    
    {
        firstName: "Tilda",
        lastName:"Fuentes",
        age: 82,
        dateOfBirth: "1937/11/01",
        sex:"female",
        lat: 35.714750,
        lon: -86.640790,
        smoking: "never",
        preExistingConditions: "true",
        sick: "false",
        UserId: 7 
    },    
    {
        firstName: "Aña",
        lastName:"Machado",
        age: 30,
        dateOfBirth: "1989/11/01",
        sex:"female",
        lat: 36.248750,
        lon: -86.701790,
        smoking: "never",
        preExistingConditions: "false",
        sick: "true",
        UserId: 8 
    },    
    {
        firstName: "Ryan",
        lastName:"Allen-Grave",
        age: 56,
        dateOfBirth: "1963/11/01",
        sex:"male",
        lat: 34.988750,
        lon: -86.8901790,
        smoking: "currently",
        preExistingConditions: "true",
        sick: "true",
        UserId: 9 
    },    
    {
        firstName: "Carl",
        lastName:"Dietrich",
        age: 17,
        dateOfBirth: "2004/03/20",
        sex:"male",
        lat: 36.278750,
        lon: -86.491790,
        smoking: "false",
        preExistingConditions: "false",
        sick: "false",
        UserId: 10 
    },    
    {
        firstName: "Timothy",
        lastName:"Voss",
        age: 73,
        dateOfBirth: "1945/07/31",
        sex:"male",
        lat: 36.6038750,
        lon: -86.501790,
        smoking: "never",
        preExistingConditions: "false",
        sick: "true",
        UserId: 11 
    },    
    {
        firstName: "Henry",
        lastName:"Leake",
        age: 48,
        dateOfBirth: "1971/07/31",
        sex:"male",
        lat: 36.618750,
        lon: -86.251790,
        smoking: "never",
        preExistingConditions: "false",
        sick: "true",
        UserId: 12 
    }
]

const illnessesToSeed= [
    {
        "tested": "true",
        "dateOfTest": "2020-03-10",
        "dateOfOnset": "2020-01-05",
        "symptoms": "dry cough and fever",
        "hospitalized": "true",
        "dateOfHospitalization": "2020-03-10",
        "intensiveCare": "false",
        "death": "false",
        "dateOfRecovery": "2020-02-17",
        "UserId": 1
    },
    {
        "tested": "true",
        "dateOfTest": "2020-03-10",
        "dateOfOnset": "2020-02-10",
        "symptoms": "dry cough and fever",
        "hospitalized": "true",
        "dateOfHospitalization": "2020-03-10",
        "intensiveCare": "true",
        "death": "true",
        "dateOfRecovery": "2020-03-17",
        "UserId": 2
    },
    {
        "tested": "true",
        "dateOfTest": "2020-03-15",
        "dateOfOnset": "2020-04-01",
        "symptoms": "dry cough and fever",
        "hospitalized": "true",
        "dateOfHospitalization": "2020-03-10",
        "intensiveCare": "true",
        "death": "false",
        "dateOfRecovery": "2020-03-17",
        "UserId": 4
    },
    {
        "tested": "true",
        "dateOfTest": "2020-03-10",
        "dateOfOnset": "2020-02-29",
        "symptoms": "dry cough and fever",
        "hospitalized": "true",
        "dateOfHospitalization": "2020-03-10",
        "intensiveCare": "true",
        "death": "false",
        "dateOfRecovery": "2020-03-10",
        "UserId": 5
    },
    {
        "tested": "true",
        "dateOfTest": "2020-02-11",
        "dateOfOnset": "2020-03-18",
        "symptoms": "dry cough and fever",
        "hospitalized": "true",
        "dateOfHospitalization": "2020-03-10",
        "intensiveCare": "true",
        "death": "false",
        "dateOfRecovery": "2020-03-17",
        "UserId": 6
    },
    {
        "tested": "true",
        "dateOfTest": "2020-01-29",
        "dateOfOnset": "2020-02-12",
        "symptoms": "dry cough and fever",
        "hospitalized": "true",
        "dateOfHospitalization": "2020-03-01",
        "intensiveCare": "false",
        "death": "false",
        "dateOfRecovery": "2020-03-09",
        "UserId": 8
    },
    {
        "tested": "true",
        "dateOfTest": "2020-03-10",
        "dateOfOnset": "2020-03-26",
        "symptoms": "dry cough and fever",
        "hospitalized": "true",
        "dateOfHospitalization": "2020-03-29",
        "intensiveCare": "false",
        "death": "false",
        "dateOfRecovery": "2020-04-08",
        "UserId": 9
    },
    {
        "tested": "true",
        "dateOfTest": "2020-03-10",
        "dateOfOnset": "2020-03-26",
        "symptoms": "dry cough and fever",
        "hospitalized": "true",
        "dateOfHospitalization": "2020-03-29",
        "intensiveCare": "false",
        "death": "false",
        "dateOfRecovery": "2020-04-08",
        "UserId": 11
    },
    {
        "tested": "true",
        "dateOfTest": "2020-03-10",
        "dateOfOnset": "2020-03-26",
        "symptoms": "dry cough and fever",
        "hospitalized": "true",
        "dateOfHospitalization": "2020-03-29",
        "intensiveCare": "false",
        "death": "true",
        "dateOfRecovery": "2020-04-08",
        "UserId": 12
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