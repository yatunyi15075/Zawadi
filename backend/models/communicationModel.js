import { DataTypes } from 'sequelize';
import config from '../config.js';

const { sequelize } = config;

const Communication = sequelize.define('Communication', {
  communication_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
  },
  date_sent: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

export default Communication;
