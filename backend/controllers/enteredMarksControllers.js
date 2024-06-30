import EnteredMark from '../models/enteredMarksModel.js';

// Create Entered Mark
export const createEnteredMark = async (req, res) => {
  const { student_name, class_level, admission_number, subject, marks } = req.body;

  if (!student_name || !class_level || !admission_number || !subject || !marks) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const newEnteredMark = await EnteredMark.create({
      student_name,
      class_level,
      admission_number,
      subject,
      marks,
    });
    res.status(201).json(newEnteredMark);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create entered mark', details: error.message });
  }
};

// Get All Entered Marks
export const getAllEnteredMarks = async (req, res) => {
  try {
    const enteredMarks = await EnteredMark.findAll();
    res.json(enteredMarks);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve entered marks' });
  }
};

// Get Entered Mark by ID
export const getEnteredMarkById = async (req, res) => {
  const { id } = req.params;

  try {
    const enteredMark = await EnteredMark.findByPk(id);
    if (enteredMark) {
      res.json(enteredMark);
    } else {
      res.status(404).json({ error: 'Entered mark not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve entered mark' });
  }
};

// Update Entered Mark
export const updateEnteredMark = async (req, res) => {
  const { id } = req.params;
  const { student_name, class_level, admission_number, subject, marks } = req.body;

  try {
    const existingEnteredMark = await EnteredMark.findByPk(id);
    if (existingEnteredMark) {
      await existingEnteredMark.update({
        student_name,
        class_level,
        admission_number,
        subject,
        marks,
      });
      res.json({ message: 'Entered mark updated successfully' });
    } else {
      res.status(404).json({ error: 'Entered mark not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update entered mark', details: error.message });
  }
};

// Delete Entered Mark
export const deleteEnteredMark = async (req, res) => {
  const { id } = req.params;

  try {
    const enteredMark = await EnteredMark.findByPk(id);
    if (enteredMark) {
      await enteredMark.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ error: 'Entered mark not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete entered mark' });
  }
};
