module.exports = function(sequelize, DataTypes) {
    let d = new Date();
    let date = d. getDate()
    let month = d. getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12.
    let year = d. getFullYear();
    let dateStr = year + "-" + month + "-" + date;
    const Illness = sequelize.define("Illness", {
        tested: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false,
            set: function(value) {
              if (value === 'true') value = true;
              if (value === 'false') value = false;
              this.setDataValue('tested', value);
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
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false,
            set: function(value) {
              if (value === 'true') value = true;
              if (value === 'false') value = false;
              this.setDataValue('hospitalized', value);
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
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false,
            set: function(value) {
              if (value === 'true') value = true;
              if (value === 'false') value = false;
              this.setDataValue('intensiveCare', value);
            }
        },
        death: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false,
            set: function(value) {
              if (value === 'true') value = true;
              if (value === 'false') value = false;
              this.setDataValue('death', value);
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
    
    Illness.associate = function(models) {
        Illness.belongsTo(models.User);
      };

    return Illness;
}