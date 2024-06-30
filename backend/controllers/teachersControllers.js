import Teacher from '../models/teachersModel.js';

// Create Teacher
export const createTeacher = async (req, res) => {
  const { name, email, phone, address, qualification } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required fields' });
  }

  try {
    const newTeacher = await Teacher.create({
      name,
      email,
      phone,
      address,
      qualification,
    });
    res.status(201).json(newTeacher);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create teacher', details: error.message });
  }
};

// Get All Teachers
export const getAllTeachers = async (req, res) => {
  try {
    const teachers = await Teacher.findAll();
    res.json(teachers);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve teachers' });
  }
};

// Get Teacher by ID
export const getTeacherById = async (req, res) => {
  const { id } = req.params;

  try {
    const teacher = await Teacher.findByPk(id);
    if (teacher) {
      res.json(teacher);
    } else {
      res.status(404).json({ error: 'Teacher not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve teacher data' });
  }
};

// Update Teacher
export const updateTeacher = async (req, res) => {
  const { id } = req.params;
  const { name, email, phone, address, qualification } = req.body;

  try {
    const existingTeacher = await Teacher.findByPk(id);
    if (existingTeacher) {
      await existingTeacher.update({
        name,
        email,
        phone,
        address,
        qualification,
      });
      res.json({ message: 'Teacher updated successfully' });
    } else {
      res.status(404).json({ error: 'Teacher not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update teacher data', details: error.message });
  }
};

// Delete Teacher
export const deleteTeacher = async (req, res) => {
  const { id } = req.params;

  try {
    const teacher = await Teacher.findByPk(id);
    if (teacher) {
      await teacher.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ error: 'Teacher not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete teacher data' });
  }
};
