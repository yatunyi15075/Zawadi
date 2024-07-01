import { DataTypes } from 'sequelize';
import config from '../config.js';

const { sequelize } = config;

const CurriculumEntry = sequelize.define('CurriculumEntry', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  section: {
    type: DataTypes.ENUM('Early Years', 'Middle School', 'Junior Secondary'),
    allowNull: false,
  },
  grade: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  subject: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  lesson: {
    type: DataTypes.STRING(100),
  },
  timetable: {
    type: DataTypes.TEXT,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

export default CurriculumEntry;
