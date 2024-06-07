'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    static associate(models) {
      Employee.hasOne(models.EmployeeProfile, { foreignKey: 'employeeId' });
      Employee.hasMany(models.EmployeeFamily, { foreignKey: 'employeeId' });
      Employee.hasMany(models.Education, { foreignKey: 'employeeId' });
    }
  }
  Employee.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Employee',
  });
  return Employee;
};
