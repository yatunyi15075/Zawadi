import School from '../models/schoolModel.js';

export const getAllSchools = async (req, res) => {
  try {
    const schools = await School.findAll();
    res.json(schools);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve schools' });
  }
};

export const createSchool = async (req, res) => {
  try {
    const { name, address, director, location, number_of_students, plan } = req.body;
    const school = await School.create({ name, address, director, location, number_of_students, plan });
    res.status(201).json(school);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create school' });
  }
};

export const getSchoolById = async (req, res) => {
  try {
    const school = await School.findByPk(req.params.id);
    if (school) {
      res.json(school);
    } else {
      res.status(404).json({ error: 'School not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve school' });
  }
};

export const updateSchool = async (req, res) => {
  try {
    const { name, address, director, location, number_of_students, plan } = req.body;
    const school = await School.findByPk(req.params.id);
    if (school) {
      await school.update({ name, address, director, location, number_of_students, plan });
      res.json(school);
    } else {
      res.status(404).json({ error: 'School not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update school' });
  }
};

export const deleteSchool = async (req, res) => {
  try {
    const school = await School.findByPk(req.params.id);
    if (school) {
      await school.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ error: 'School not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete school' });
  }
};
