import { DataTypes } from 'sequelize';
import config from '../config.js';

const { sequelize } = config;

const AssessmentReport = sequelize.define('AssessmentReport', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  assessment_name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  assessment_date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  score: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}, {
  timestamps: true, // Enable Sequelize's automatic timestamps
});

export default AssessmentReport;
