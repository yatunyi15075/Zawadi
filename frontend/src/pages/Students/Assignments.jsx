import React, { useState } from 'react';
import Sidebar from './Sidebar';
import {
  AssignmentsContainer,
  SidebarContainer,
  Content,
  AssignmentCard,
  AssignmentTitle,
  AssignmentDescription,
  AssignmentButton,
  AssignmentDoneMessage,
} from '../../styles/AssignmentsStyles'; // Import styled components from AssignmentStyles.js

const StudentAssignments = () => {
  const [questions] = useState([
    {
      id: 1,
      type: 'Multiple Choice',
      title: 'Algebra 1',
      description: 'Solve the following equations:',
      choices: ['2x + 3 = 11', '3x - 5 = 10', '4x / 2 = 6'],
    },
    {
      id: 2,
      type: 'Multiple Choice',
      title: 'History Quiz',
      description: 'Answer the following multiple-choice questions:',
      choices: [
        'Who was the first President of the United States?',
        'When was the Declaration of Independence signed?',
        'Who discovered America?',
      ],
    },
    {
      id: 3,
      type: 'Fill in the Blank',
      title: 'Physics Quiz',
      description: 'Fill in the blanks with appropriate terms:',
      blanks: ['The force that attracts two objects toward each other is called ____.', 'The unit of electric current is ____.'],
    },
  ]);

  const handleDoAssignment = (id) => {
    // Implement your logic for handling assignment submission
  };

  return (
    <AssignmentsContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <h1>Assignments</h1>
        {questions.map((question) => (
          <AssignmentCard key={question.id}>
            <AssignmentTitle>{question.title}</AssignmentTitle>
            <AssignmentDescription>{question.description}</AssignmentDescription>
            {question.type === 'Multiple Choice' && (
              <MultipleChoiceQuestion choices={question.choices} />
            )}
            {question.type === 'Fill in the Blank' && (
              <FillInTheBlankQuestion blanks={question.blanks} />
            )}
            <AssignmentForm onDoAssignment={() => handleDoAssignment(question.id)} />
          </AssignmentCard>
        ))}
      </Content>
    </AssignmentsContainer>
  );
};

const MultipleChoiceQuestion = ({ choices }) => {
  const [selectedChoice, setSelectedChoice] = useState('');

  const handleChoiceChange = (event) => {
    setSelectedChoice(event.target.value);
  };

  return (
    <div>
      {choices.map((choice, index) => (
        <div key={index}>
          <input type="radio" id={`choice${index}`} name="choice" value={choice} onChange={handleChoiceChange} />
          <label htmlFor={`choice${index}`}>{choice}</label>
        </div>
      ))}
    </div>
  );
};

const FillInTheBlankQuestion = ({ blanks }) => {
  const [answers, setAnswers] = useState(Array(blanks.length).fill(''));

  const handleAnswerChange = (index, event) => {
    const newAnswers = [...answers];
    newAnswers[index] = event.target.value;
    setAnswers(newAnswers);
  };

  return (
    <div>
      {blanks.map((blank, index) => (
        <div key={index}>
          <input type="text" value={answers[index]} onChange={(event) => handleAnswerChange(index, event)} placeholder={blank} />
        </div>
      ))}
    </div>
  );
};

const AssignmentForm = ({ onDoAssignment }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    onDoAssignment();
  };

  return (
    <form onSubmit={handleSubmit}>
      <AssignmentButton type="submit">Submit</AssignmentButton>
    </form>
  );
};

export default StudentAssignments;
