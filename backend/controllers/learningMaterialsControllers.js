import LearningMaterial from '../models/learningMaterialsModel.js';

// Create Learning Material
export const createLearningMaterial = async (req, res) => {
  const { subject, title, description, link } = req.body;

  if (!subject || !title) {
    return res.status(400).json({ error: 'Subject and title are required fields' });
  }

  try {
    const newLearningMaterial = await LearningMaterial.create({
      subject,
      title,
      description,
      link,
    });
    res.status(201).json(newLearningMaterial);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create learning material', details: error.message });
  }
};

// Get All Learning Materials
export const getAllLearningMaterials = async (req, res) => {
  try {
    const learningMaterials = await LearningMaterial.findAll();
    res.json(learningMaterials);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve learning materials' });
  }
};

// Get Learning Material by ID
export const getLearningMaterialById = async (req, res) => {
  const { id } = req.params;

  try {
    const learningMaterial = await LearningMaterial.findByPk(id);
    if (learningMaterial) {
      res.json(learningMaterial);
    } else {
      res.status(404).json({ error: 'Learning material not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve learning material' });
  }
};

// Update Learning Material
export const updateLearningMaterial = async (req, res) => {
  const { id } = req.params;
  const { subject, title, description, link } = req.body;

  try {
    const existingLearningMaterial = await LearningMaterial.findByPk(id);
    if (existingLearningMaterial) {
      await existingLearningMaterial.update({
        subject,
        title,
        description,
        link,
      });
      res.json({ message: 'Learning material updated successfully' });
    } else {
      res.status(404).json({ error: 'Learning material not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update learning material', details: error.message });
  }
};

// Delete Learning Material
export const deleteLearningMaterial = async (req, res) => {
  const { id } = req.params;

  try {
    const learningMaterial = await LearningMaterial.findByPk(id);
    if (learningMaterial) {
      await learningMaterial.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ error: 'Learning material not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete learning material' });
  }
};
