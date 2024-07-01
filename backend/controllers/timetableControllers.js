import Timetable from '../models/timetableModel.js';

// Create Timetable
export const createTimetable = async (req, res) => {
  const { class_id, day, subject, time } = req.body;

  if (!class_id || !day || !subject || !time) {
    return res.status(400).json({ error: 'Class ID, day, subject, and time are required fields' });
  }

  try {
    const newTimetable = await Timetable.create({
      class_id, 
      day,
      subject,
      time,
    });
    res.status(201).json(newTimetable);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create timetable', details: error.message });
  }
};

// Get All Timetables
export const getAllTimetables = async (req, res) => {
  try {
    const timetables = await Timetable.findAll();
    res.json(timetables);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve timetables' });
  }
};

// Get Timetable by ID
export const getTimetableById = async (req, res) => {
  const { id } = req.params;

  try {
    const timetable = await Timetable.findByPk(id);
    if (timetable) {
      res.json(timetable);
    } else {
      res.status(404).json({ error: 'Timetable not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve timetable' });
  }
};

// Update Timetable
export const updateTimetable = async (req, res) => {
  const { id } = req.params;
  const { class_id, day, subject, time } = req.body;

  try {
    const existingTimetable = await Timetable.findByPk(id);
    if (existingTimetable) {
      await existingTimetable.update({
        class_id,
        day,
        subject,
        time,
      });
      res.json({ message: 'Timetable updated successfully' });
    } else {
      res.status(404).json({ error: 'Timetable not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update timetable', details: error.message });
  }
};

// Delete Timetable
export const deleteTimetable = async (req, res) => {
  const { id } = req.params;

  try {
    const timetable = await Timetable.findByPk(id);
    if (timetable) {
      await timetable.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ error: 'Timetable not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete timetable' });
  }
};
