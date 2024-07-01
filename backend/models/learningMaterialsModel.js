import { DataTypes } from 'sequelize';
import config from '../config.js';

const { sequelize } = config;

const LearningMaterial = sequelize.define('LearningMaterial', {
  material_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  subject: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  link: {
    type: DataTypes.STRING(255),
  },
});

export default LearningMaterial;
