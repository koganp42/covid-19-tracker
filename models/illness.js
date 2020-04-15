module.exports = function(sequelize, DataTypes) {
    let d = new Date();
    let date = d. getDate()+1
    let month = d. getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12.
    let year = d. getFullYear();
    let dateStr = year + "-" + month + "-" + date; 
    const Illness = sequelize.define("Illness", {
        tested: {
            type: DataTypes.STRING,
            defaultValue: "false",
            validate: {
                isIn: [['false', 'true']],
            }
        },
        dateOfTest: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                isDate: true,
                isAfter: "2019-12-01",
                isBefore: dateStr
            }
        },
        dateOfOnset: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                isDate: true,
                isAfter: "2019-12-01",
                isBefore: dateStr
            }
        },
        symptoms: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        hospitalized: {
            type: DataTypes.STRING,
            defaultValue: "false",
            validate: {
                isIn: [['false', 'true']],
            }
        },
        dateOfHospitalization: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                isDate: true,
                isAfter: "2019-12-01",
                isBefore: dateStr
            }
        },
        intensiveCare: {
            type: DataTypes.STRING,
            defaultValue: "false",
            validate: {
                isIn: [['false', 'true']],
            }
        },
        death: {
            type: DataTypes.STRING,
            defaultValue: "false",
            validate: {
                isIn: [['false', 'true']],
            }
        },
        dateOfRecovery: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                isDate: true,
                isAfter: "2019-12-01",
                isBefore: dateStr
            }
        }
    }); 
    
    Illness.addHook("beforeCreate", function(illness) {
        if (illness.tested=== "false"){
            illness.dateOfTest = null; 
        }
        if (illness.hospitalized === "false"){
            illness.dateOfHospitalization = null; 
        }
      });

    Illness.addHook("beforeBulkUpdate", function(illness) {
        if (illness.tested=== "false"){
            illness.dateOfTest = null; 
        }
        if (illness.hospitalized === "false"){
            illness.dateOfHospitalization = null; 
        }
    });

    Illness.associate = function(models) {
        Illness.belongsTo(models.User);
      };

    return Illness;
}