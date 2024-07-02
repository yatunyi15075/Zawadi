import config from '../config.js';

const db = config.db;

// Function to create a new user
export const createUser = async (fullName, email, password) => {
  const [result] = await db.execute(
    'INSERT INTO users (full_name, email, password) VALUES (?, ?, ?)',
    [fullName, email, password]
  );
  return result.insertId; 
};

// Function to get a user by email
export const getUserByEmail = async (email) => {
  const [rows] = await db.execute('SELECT * FROM users WHERE email = ?', [email]);
  return rows[0];
};

// Additional functions for managing users
export const getAllUsers = async () => {
  const [rows] = await db.execute('SELECT * FROM users');
  return rows;
};

export const getUserById = async (id) => {
  const [rows] = await db.execute('SELECT * FROM users WHERE id = ?', [id]);
  return rows[0];
};

export const updateUser = async (id, updates) => {
  const fields = Object.keys(updates).map(key => `${key} = ?`).join(', ');
  const values = Object.values(updates);
  await db.execute(`UPDATE users SET ${fields} WHERE id = ?`, [...values, id]);
};

export const deleteUser = async (id) => {
  await db.execute('DELETE FROM users WHERE id = ?', [id]);
};
