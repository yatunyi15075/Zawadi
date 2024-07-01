import { DataTypes } from 'sequelize';
import config from '../config.js';

const { sequelize } = config;

const EnteredMark = sequelize.define('EnteredMark', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  student_name: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  class_level: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  admission_number: {
    type: DataTypes.STRING(255),
    allowNull: false,
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

export default EnteredMark;
