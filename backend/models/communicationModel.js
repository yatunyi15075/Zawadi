import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

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
