import Announcement from '../models/announcementModel.js';

// Create Announcement
export const createAnnouncement = async (req, res) => {
  const { announcement, section } = req.body;

  if (!announcement || !section) {
    return res.status(400).json({ error: 'Announcement and section are required' });
  }

  try {
    const newAnnouncement = await Announcement.create({ announcement, section });
    res.status(201).json(newAnnouncement);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create announcement', details: error.message });
  }
};

// Get All Announcements
export const getAllAnnouncements = async (req, res) => {
  try {
    const announcements = await Announcement.findAll();
    res.json(announcements);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve announcements' });
  }
};

// Get Announcement by ID
export const getAnnouncementById = async (req, res) => {
  const { id } = req.params;

  try {
    const announcement = await Announcement.findByPk(id);
    if (announcement) {
      res.json(announcement);
    } else {
      res.status(404).json({ error: 'Announcement not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve announcement' });
  }
};

// Update Announcement
export const updateAnnouncement = async (req, res) => {
  const { id } = req.params;
  const { announcement, section } = req.body;

  try {
    const existingAnnouncement = await Announcement.findByPk(id);
    if (existingAnnouncement) {
      await existingAnnouncement.update({ announcement, section });
      res.json({ message: 'Announcement updated successfully' });
    } else {
      res.status(404).json({ error: 'Announcement not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update announcement', details: error.message });
  }
};

// Delete Announcement
export const deleteAnnouncement = async (req, res) => {
  const { id } = req.params;

  try {
    const announcement = await Announcement.findByPk(id);
    if (announcement) {
      await announcement.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ error: 'Announcement not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete announcement' });
  }
};
