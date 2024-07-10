// models/userModel.js
import { Sequelize, DataTypes } from 'sequelize';
import config from '../config.js';
import School from '../models/schoolModel.js'; // Import the School model

const sequelize = config.sequelize;

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM('super-admin', 'admin', 'teacher', 'parent'),
    allowNull: false,
  },
  school_id: {
    type: DataTypes.INTEGER,
    allowNull: true, // Optional for super-admin
    references: {
      model: School, // Correct reference to the School model
      key: 'id',
    },
  },
}, {
  timestamps: true, // Enable timestamps
  createdAt: 'timestamp',
  updatedAt: 'timestamp',
});

export default User;
