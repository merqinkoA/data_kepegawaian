'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EmployeeFamily extends Model {
    static associate(models) {
      EmployeeFamily.belongsTo(models.Employee, { foreignKey: 'employeeId' });
    }
  }
  EmployeeFamily.init({
    employeeId: DataTypes.INTEGER,
    familyInfo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'EmployeeFamily',
  });
  return EmployeeFamily;
};
