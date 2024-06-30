import Communication from '../models/communicationModel.js';

// Create Communication
export const createCommunication = async (req, res) => {
  const { title, content } = req.body;

  if (!title) {
    return res.status(400).json({ error: 'Title is required' });
  }

  try {
    const newCommunication = await Communication.create({
      title,
      content,
    });
    res.status(201).json(newCommunication);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create communication', details: error.message });
  }
};

// Get All Communications
export const getAllCommunications = async (req, res) => {
  try {
    const communications = await Communication.findAll();
    res.json(communications);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve communications' });
  }
};

// Get Communication by ID
export const getCommunicationById = async (req, res) => {
  const { id } = req.params;

  try {
    const communication = await Communication.findByPk(id);
    if (communication) {
      res.json(communication);
    } else {
      res.status(404).json({ error: 'Communication not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve communication' });
  }
};

// Update Communication
export const updateCommunication = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  try {
    const existingCommunication = await Communication.findByPk(id);
    if (existingCommunication) {
      await existingCommunication.update({
        title,
        content,
      });
      res.json({ message: 'Communication updated successfully' });
    } else {
      res.status(404).json({ error: 'Communication not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update communication', details: error.message });
  }
};

// Delete Communication
export const deleteCommunication = async (req, res) => {
  const { id } = req.params;

  try {
    const communication = await Communication.findByPk(id);
    if (communication) {
      await communication.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ error: 'Communication not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete communication' });
  }
};
