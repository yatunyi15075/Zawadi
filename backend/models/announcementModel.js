import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Announcement = sequelize.define('Announcement', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  announcement: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  section: {
    type: DataTypes.ENUM('All Parents', 'Early Years', 'Middle School', 'Junior Secondary'),
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

export default Announcement;
