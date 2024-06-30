import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Student from './Student.js'; // Assuming Student model is imported correctly
import Class from './Class.js'; // Assuming Class model is imported correctly

const Performance = sequelize.define('Performance', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  student_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Student,
      key: 'id',
    },
  },
  class_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Class,
      key: 'id',
    },
  },
  subject: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  marks: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default Performance;
