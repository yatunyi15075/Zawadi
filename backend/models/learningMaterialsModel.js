import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

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
