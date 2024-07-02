import AttendanceRecord from '../models/attendanceRecordModel.js';

// Create Attendance Record
export const createAttendanceRecord = async (req, res) => {
  const { student_id, student_name, attendance_date, status, school_id } = req.body;

  if (!student_id || !student_name || !attendance_date || !status) {
    return res.status(400).json({ error: 'Student ID, name, attendance date, and status are required' });
  }

  try {
    const newAttendanceRecord = await AttendanceRecord.create({
      student_id,
      student_name,
      attendance_date,
      status,
      school_id,
    });
    res.status(201).json(newAttendanceRecord);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create attendance record', details: error.message });
  }
};


// Get All Attendance Records
export const getAllAttendanceRecords = async (req, res) => {
  try {
    const attendanceRecords = await AttendanceRecord.findAll();
    res.json(attendanceRecords);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve attendance records' });
  }
};

// Get Attendance Record by ID
export const getAttendanceRecordById = async (req, res) => {
  const { id } = req.params;

  try {
    const attendanceRecord = await AttendanceRecord.findByPk(id);
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
  const { student_id, student_name, attendance_date, status, school_id } = req.body;

  try {
    const existingAttendanceRecord = await AttendanceRecord.findByPk(id);
    if (existingAttendanceRecord) {
      await existingAttendanceRecord.update({
        student_id,
        student_name,
        attendance_date,
        status,
        school_id,
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
    const attendanceRecord = await AttendanceRecord.findByPk(id);
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
