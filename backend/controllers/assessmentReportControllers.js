import AssessmentReport from '../models/assessmentReportModel.js';

// Create Assessment Report
export const createAssessmentReport = async (req, res) => {
  const { assessment_name, assessment_date, score } = req.body;

  if (!assessment_name || !assessment_date || !score) {
    return res.status(400).json({ error: 'Assessment name, date, and score are required' });
  }

  try {
    const newAssessmentReport = await AssessmentReport.create({
      assessment_name,
      assessment_date,
      score,
    });
    res.status(201).json(newAssessmentReport);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create assessment report', details: error.message });
  }
};

// Get All Assessment Reports
export const getAllAssessmentReports = async (req, res) => {
  try {
    const assessmentReports = await AssessmentReport.findAll();
    res.json(assessmentReports);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve assessment reports' });
  }
};

// Get Assessment Report by ID
export const getAssessmentReportById = async (req, res) => {
  const { id } = req.params;

  try {
    const assessmentReport = await AssessmentReport.findByPk(id);
    if (assessmentReport) {
      res.json(assessmentReport);
    } else {
      res.status(404).json({ error: 'Assessment report not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve assessment report' });
  }
};

// Update Assessment Report
export const updateAssessmentReport = async (req, res) => {
  const { id } = req.params;
  const { assessment_name, assessment_date, score } = req.body;

  try {
    const existingAssessmentReport = await AssessmentReport.findByPk(id);
    if (existingAssessmentReport) {
      await existingAssessmentReport.update({
        assessment_name,
        assessment_date,
        score,
      });
      res.json({ message: 'Assessment report updated successfully' });
    } else {
      res.status(404).json({ error: 'Assessment report not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update assessment report', details: error.message });
  }
};

// Delete Assessment Report
export const deleteAssessmentReport = async (req, res) => {
  const { id } = req.params;

  try {
    const assessmentReport = await AssessmentReport.findByPk(id);
    if (assessmentReport) {
      await assessmentReport.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ error: 'Assessment report not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete assessment report' });
  }
};
