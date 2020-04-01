module.exports = function(sequelize, DataTypes) {
    // let d = new Date();
    // let date = d. getDate()+1; //to include children born today
    // let month = d. getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12.
    // let year = d. getFullYear();
    // let dateStr = year + "-" + month + "-" + date;
    const Person = sequelize.define("Person", {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isAlpha: true
            }
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
            isAlpha: true
            }
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                max: 120,     
                min: 0
            }
        },
        // dateOfBirth: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        //     validate: {
        //         isDate: true,
        //         isAfter: "1902-01-01",
        //         isBefore: dateStr
        //     }
        // },
        gender: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isIn: [['male', 'female', 'non-binary', 'prefer not to disclose']],
            }
        },
        lat: {
            type: DataTypes.INTEGER,
            allowNull: false, 
            validate: {
                max: 90,
                min: -90
            }
        },
        lon: {
            type: DataTypes.INTEGER,
            allowNull: false, 
            validate: {
                max: 180,
                min: -180
            }
        },
        currentlySmokes: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false,
            set: function(value) {
              if (value === 'true') value = true;
              if (value === 'false') value = false;
              this.setDataValue('currentlySmokes', value);
            }
        },
        historySmoking: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false,
            set: function(value) {
              if (value === 'true') value = true;
              if (value === 'false') value = false;
              this.setDataValue('historySmoking', value);
            }
        },
        preExistingConditions: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false,
            set: function(value) {
              if (value === 'true') value = true;
              if (value === 'false') value = false;
              this.setDataValue('preExistingConditions', value);
            }
        },
        listPreExistingConditions: {
            type: DataTypes.TEXT,
            allowNull:true
        },
        sick: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false,
            set: function(value) {
              if (value === 'true') value = true;
              if (value === 'false') value = false;
              this.setDataValue('sick', value);
            }
        }
    }); 
    
    Person.associate = function(models) {
        Person.belongsTo(models.User, {
            foreignKey: {
              allowNull: false
            }
          });
    
          Person.hasOne(models.Illness, {
              foreignKey: {
                  allowNull: false
              }
          }); 
      };
   

    return Person;
}