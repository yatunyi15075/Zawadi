import { DataTypes } from 'sequelize';
import config from '../config.js';

const { sequelize } = config;

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
  }
}, {
  timestamps: true, // Enable Sequelize's automatic timestamps
});

export default Announcement;
