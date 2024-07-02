import { DataTypes } from 'sequelize';
import config from '../config.js';

const { sequelize } = config;

const Class = sequelize.define('Class', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  grade: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  category: {
    type: DataTypes.ENUM('Early Years', 'Middle School', 'Junior Secondary'),
    allowNull: false,
  }
}, {
  timestamps: true, // Enable Sequelize's automatic timestamps
});

export default Class;
