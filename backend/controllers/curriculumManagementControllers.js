import CurriculumEntry from '../models/curriculumManagementModel.js';

// Create Curriculum Entry
export const createCurriculumEntry = async (req, res) => {
  const { section, grade, subject, lesson, timetable } = req.body;

  if (!section || !grade || !subject) {
    return res.status(400).json({ error: 'Section, grade, and subject are required' });
  }

  try {
    const newCurriculumEntry = await CurriculumEntry.create({
      section,
      grade,
      subject,
      lesson,
      timetable,
    });
    res.status(201).json(newCurriculumEntry);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create curriculum entry', details: error.message });
  }
};

// Get All Curriculum Entries
export const getAllCurriculumEntries = async (req, res) => {
  try {
    const curriculumEntries = await CurriculumEntry.findAll();
    res.json(curriculumEntries);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve curriculum entries' });
  }
};

// Get Curriculum Entry by ID
export const getCurriculumEntryById = async (req, res) => {
  const { id } = req.params;

  try {
    const curriculumEntry = await CurriculumEntry.findByPk(id);
    if (curriculumEntry) {
      res.json(curriculumEntry);
    } else {
      res.status(404).json({ error: 'Curriculum entry not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve curriculum entry' });
  }
};

// Update Curriculum Entry
export const updateCurriculumEntry = async (req, res) => {
  const { id } = req.params;
  const { section, grade, subject, lesson, timetable } = req.body;

  try {
    const existingCurriculumEntry = await CurriculumEntry.findByPk(id);
    if (existingCurriculumEntry) {
      await existingCurriculumEntry.update({
        section,
        grade,
        subject,
        lesson,
        timetable,
      });
      res.json({ message: 'Curriculum entry updated successfully' });
    } else {
      res.status(404).json({ error: 'Curriculum entry not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update curriculum entry', details: error.message });
  }
};

// Delete Curriculum Entry
export const deleteCurriculumEntry = async (req, res) => {
  const { id } = req.params;

  try {
    const curriculumEntry = await CurriculumEntry.findByPk(id);
    if (curriculumEntry) {
      await curriculumEntry.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ error: 'Curriculum entry not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete curriculum entry' });
  }
};
