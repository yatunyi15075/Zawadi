import Feedback from '../models/feedbackModel.js';

// Create Feedback
export const createFeedback = async (req, res) => {
  const { title, content } = req.body;

  if (!title) {
    return res.status(400).json({ error: 'Title is required' });
  }

  try {
    const newFeedback = await Feedback.create({
      title,
      content,
    });
    res.status(201).json(newFeedback);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create feedback', details: error.message });
  }
};

// Get All Feedbacks
export const getAllFeedbacks = async (req, res) => {
  try {
    const feedbacks = await Feedback.findAll();
    res.json(feedbacks);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve feedbacks' });
  }
};

// Get Feedback by ID
export const getFeedbackById = async (req, res) => {
  const { id } = req.params;

  try {
    const feedback = await Feedback.findByPk(id);
    if (feedback) {
      res.json(feedback);
    } else {
      res.status(404).json({ error: 'Feedback not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve feedback' });
  }
};

// Update Feedback
export const updateFeedback = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  try {
    const existingFeedback = await Feedback.findByPk(id);
    if (existingFeedback) {
      await existingFeedback.update({
        title,
        content,
      });
      res.json({ message: 'Feedback updated successfully' });
    } else {
      res.status(404).json({ error: 'Feedback not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update feedback', details: error.message });
  }
};

// Delete Feedback
export const deleteFeedback = async (req, res) => {
  const { id } = req.params;

  try {
    const feedback = await Feedback.findByPk(id);
    if (feedback) {
      await feedback.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ error: 'Feedback not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete feedback' });
  }
};
