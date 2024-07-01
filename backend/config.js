// config.js
import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    host: process.env.DATABASE_HOST,
    dialect: 'mysql',
  }
);

sequelize.authenticate()
  .then(() => {
    console.log('Connected to the database.');
    console.log('Database Object:', sequelize); // Debugging: Log the sequelize object
  })
  .catch(error => {
    console.error('Error connecting to the database:', error.message);
  });

const config = {
  sequelize,
  jwtSecret: process.env.JWT_SECRET,
  port: process.env.PORT || 5000,
};

export default config;
