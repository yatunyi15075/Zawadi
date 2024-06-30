import Progress from '../models/progressModel.js';

// Create Progress
export const createProgress = async (req, res) => {
  const { student_id, subject, progress_data } = req.body;

  if (!student_id || !subject || !progress_data) {
    return res.status(400).json({ error: 'Student ID, subject, and progress data are required' });
  }

  try {
    const newProgress = await Progress.create({
      student_id,
      subject,
      progress_data,
    });
    res.status(201).json(newProgress);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create progress', details: error.message });
  }
};

// Get All Progress
export const getAllProgress = async (req, res) => {
  try {
    const progress = await Progress.findAll();
    res.json(progress);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve progress' });
  }
};

// Get Progress by ID
export const getProgressById = async (req, res) => {
  const { id } = req.params;

  try {
    const progress = await Progress.findByPk(id);
    if (progress) {
      res.json(progress);
    } else {
      res.status(404).json({ error: 'Progress data not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve progress data' });
  }
};

// Update Progress
export const updateProgress = async (req, res) => {
  const { id } = req.params;
  const { student_id, subject, progress_data } = req.body;

  try {
    const existingProgress = await Progress.findByPk(id);
    if (existingProgress) {
      await existingProgress.update({
        student_id,
        subject,
        progress_data,
      });
      res.json({ message: 'Progress data updated successfully' });
    } else {
      res.status(404).json({ error: 'Progress data not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update progress data', details: error.message });
  }
};

// Delete Progress
export const deleteProgress = async (req, res) => {
  const { id } = req.params;

  try {
    const progress = await Progress.findByPk(id);
    if (progress) {
      await progress.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ error: 'Progress data not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete progress data' });
  }
};
