import Attendance from '../models/Attendance.js';

// Create Attendance Record
export const createAttendanceRecord = async (req, res) => {
  const { student_id, date, status } = req.body;

  if (!student_id || !date || !status) {
    return res.status(400).json({ error: 'Student ID, date, and status are required fields' });
  }

  try {
    const newAttendanceRecord = await Attendance.create({
      student_id,
      date,
      status,
    });
    res.status(201).json(newAttendanceRecord);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create attendance record', details: error.message });
  }
};

// Get All Attendance Records
export const getAllAttendanceRecords = async (req, res) => {
  try {
    const attendanceRecords = await Attendance.findAll();
    res.json(attendanceRecords);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve attendance records' });
  }
};

// Get Attendance Record by ID
export const getAttendanceRecordById = async (req, res) => {
  const { id } = req.params;

  try {
    const attendanceRecord = await Attendance.findByPk(id);
    if (attendanceRecord) {
      res.json(attendanceRecord);
    } else {
      res.status(404).json({ error: 'Attendance record not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve attendance record' });
  }
};

// Update Attendance Record
export const updateAttendanceRecord = async (req, res) => {
  const { id } = req.params;
  const { student_id, date, status } = req.body;

  try {
    const existingAttendanceRecord = await Attendance.findByPk(id);
    if (existingAttendanceRecord) {
      await existingAttendanceRecord.update({
        student_id,
        date,
        status,
      });
      res.json({ message: 'Attendance record updated successfully' });
    } else {
      res.status(404).json({ error: 'Attendance record not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update attendance record', details: error.message });
  }
};

// Delete Attendance Record
export const deleteAttendanceRecord = async (req, res) => {
  const { id } = req.params;

  try {
    const attendanceRecord = await Attendance.findByPk(id);
    if (attendanceRecord) {
      await attendanceRecord.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ error: 'Attendance record not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete attendance record' });
  }
};
