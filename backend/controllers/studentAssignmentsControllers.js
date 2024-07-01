import StudentAssignment from '../models/studentAssignmentsModel.js';

// Create Student Assignment
export const createStudentAssignment = async (req, res) => {
  const { studentId, assignmentId, submissionDate, status, grade } = req.body;

  try {
    const newStudentAssignment = await StudentAssignment.create({
      studentId,
      assignmentId,
      submissionDate,
      status,
      grade,
    });
    res.status(201).json(newStudentAssignment);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create student assignment', details: error.message });
  }
};

// Get All Student Assignments
export const getAllStudentAssignments = async (req, res) => {
  try {
    const studentAssignments = await StudentAssignment.findAll();
    res.json(studentAssignments);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve student assignments' });
  }
};

// Get Student Assignment by IDs
export const getStudentAssignment = async (req, res) => {
  const { studentId, assignmentId } = req.params;

  try {
    const studentAssignment = await StudentAssignment.findOne({
      where: { studentId, assignmentId },
    });
    if (studentAssignment) {
      res.json(studentAssignment);
    } else {
      res.status(404).json({ error: 'Student assignment not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve student assignment' });
  }
};

// Update Student Assignment
export const updateStudentAssignment = async (req, res) => {
  const { studentId, assignmentId } = req.params;
  const { submissionDate, status, grade } = req.body;

  try {
    const existingAssignment = await StudentAssignment.findOne({
      where: { studentId, assignmentId },
    });
    if (existingAssignment) {
      await existingAssignment.update({ submissionDate, status, grade });
      res.json({ message: 'Student assignment updated successfully' });
    } else {
      res.status(404).json({ error: 'Student assignment not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update student assignment', details: error.message });
  }
};

// Delete Student Assignment
export const deleteStudentAssignment = async (req, res) => {
  const { studentId, assignmentId } = req.params;

  try {
    const studentAssignment = await StudentAssignment.findOne({
      where: { studentId, assignmentId },
    });
    if (studentAssignment) {
      await studentAssignment.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ error: 'Student assignment not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete student assignment' });
  }
};
