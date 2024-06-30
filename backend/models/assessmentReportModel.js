import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

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
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

export default AssessmentReport;
