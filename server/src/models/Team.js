const { DataTypes, UUIDV4 } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Team', {
        pk: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: UUIDV4
        },
        team_name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        timestamps: false
    })
}