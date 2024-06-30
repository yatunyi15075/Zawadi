import Student from '../models/studentModel.js';

// Create Student
export const createStudent = async (req, res) => {
  const { name, class_id } = req.body;

  if (!name || !class_id) {
    return res.status(400).json({ error: 'Name and class ID are required' });
  }

  try {
    const newStudent = await Student.create({
      name,
      class_id,
    });
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create student', details: error.message });
  }
};

// Get All Students
export const getAllStudents = async (req, res) => {
  try {
    const students = await Student.findAll();
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve students' });
  }
};

// Get Student by ID
export const getStudentById = async (req, res) => {
  const { id } = req.params;

  try {
    const student = await Student.findByPk(id);
    if (student) {
      res.json(student);
    } else {
      res.status(404).json({ error: 'Student not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve student' });
  }
};

// Update Student
export const updateStudent = async (req, res) => {
  const { id } = req.params;
  const { name, class_id } = req.body;

  try {
    const existingStudent = await Student.findByPk(id);
    if (existingStudent) {
      await existingStudent.update({
        name,
        class_id,
      });
      res.json({ message: 'Student updated successfully' });
    } else {
      res.status(404).json({ error: 'Student not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update student', details: error.message });
  }
};

// Delete Student
export const deleteStudent = async (req, res) => {
  const { id } = req.params;

  try {
    const student = await Student.findByPk(id);
    if (student) {
      await student.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ error: 'Student not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete student' });
  }
};
