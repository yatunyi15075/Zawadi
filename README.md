# MERN Stack School Management System

![YouTube Thumbnail](https://github.com/yatunyi15075/Mern-School-Management-System/blob/master/frontend/src/assets/YouTube_Thumbnail.png)

This is a School Management System built using the MERN (MongoDB, Express.js, React, Node.js) stack. The frontend is developed with React and Vite, with styling done using styled-components.

## Features

- **Admin Dashboard:** Administrators can manage student records, teacher information, courses, exams, assignments, track student attendance, add teachers, and view school performance metrics.
- **Student Dashboard:** Students have access to their own dashboard where they can view their class schedules, assignments, submit assignments, and track their academic progress.
- **Teachers Dashboard:** Teachers can manage class schedules, assign and grade exams and assignments, and view student performance metrics.

### Operations Include:
- **Adding Students:** Admins can add new student records, including personal details and academic information.
- **Class Management:** Admins can create and manage classes, assign teachers, and schedule classes.
- **Exam Management:** Teachers can create and manage exams, assign them to classes, and grade student submissions.
- **Assignment Management:** Teachers can create assignments, assign them to classes, and track student submissions.
- **Student Submission:** Students can submit assignments through the student dashboard.
- **Adding Teachers:** Admins can add new teachers to the system.
- **School Performance Metrics:** Admins can view various metrics related to the school's performance.

## Technologies Used

- **Frontend:** React, Vite, styled-components
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JSON Web Tokens (JWT)
- **Deployment:** Not deployed yet

## Setup Instructions

1. **Clone the repository:**

git clone https://github.com/yatunyi15075/mern-school-management-system.git


2. **Install dependencies:**

cd mern-school-management-system
npm install


3. **Set up environment variables:**

- Create a `.env` file in the root directory.
- Define the following environment variables:

  ```
  PORT=4000
  MONGODB_URI=your_mongodb_connection_string
  SECRET_KEY=your_secret_key_for_jwt
  ```

4. **Run the development servers:**

- Start the frontend server:

  ```
  npm run dev
  ```

- Start the backend server:

  ```
  npm start
  ```

5. **Access the application:**

Open your browser and navigate to `http://localhost:5173` for the frontend and `http://localhost:4000` for the backend.

## Contributing

Contributions are welcome! Feel free to submit pull requests, bug reports, feature requests, or any suggestions to improve this project.

## License

This project is licensed under the [MIT License](LICENSE).




Super Admin Frontend Features:
System Settings:

Manage system-wide configurations such as application settings, permissions, and preferences.
Configure global parameters for user roles, access control, and data privacy settings.
User Management:

View and manage user accounts, roles, and permissions.
Add, edit, or delete user accounts and assign roles.
Reset passwords, enable/disable accounts, and manage user profile information.
Advanced Analytics:

Access comprehensive analytics and insights on system usage, user engagement, and performance metrics.
View reports and visualizations to monitor key performance indicators (KPIs), trends, and patterns.
Analyze data to identify opportunities for optimization and improvement.
Integration Options:

Manage integrations with external systems, services, or APIs.
Configure and monitor data exchange, synchronization, and interoperability with third-party platforms.
Enable/disable integrations and manage authentication credentials.
Admin Frontend Features:
Admin Dashboard:

View summary information and statistics related to the administration of the educational platform.
Access quick links and shortcuts to common administrative tasks and functionalities.
User Management:

Manage user accounts, roles, and permissions within the assigned administrative scope.
Add, edit, or delete user accounts for teachers, students, parents, and other stakeholders.
Handle user authentication, password management, and profile updates.
Curriculum Management:

Create, edit, and organize curriculum content, including subjects, topics, lessons, and learning objectives.
Manage curriculum resources such as textbooks, materials, multimedia content, and assessments.
Reports:

Generate and view reports on student performance, attendance, assessment results, and progress.
Customize report parameters, filters, and formats to meet specific administrative needs.
Export reports in various formats (e.g., PDF, CSV) for further analysis or distribution.
Teacher Frontend Features:
Teacher Dashboard:

Access a personalized dashboard with tools and resources for classroom management and instructional planning.
View notifications, reminders, and updates related to student activities, assignments, and assessments.
Lesson Plans:

Create, edit, and manage lesson plans for individual classes or subjects.
Include details such as objectives, instructional strategies, resources, and assessment methods.
Student Progress:

Track and monitor student progress, performance, and participation in class activities.
View individual student profiles, assessment results, grades, and feedback.
Attendance:

Take and manage attendance records for each class session or activity.
Mark student attendance, record absences, and track attendance trends over time.
Student Frontend Features:
Student Dashboard:

Access a personalized dashboard with information on courses, assignments, grades, and upcoming events.
View notifications, announcements, and messages from teachers and administrators.
Learning Materials:

Access digital learning materials such as textbooks, lecture notes, presentations, and multimedia resources.
Download or view materials online for self-study or reference.
Assignments:

View assignments, projects, quizzes, and other tasks assigned by teachers.
Submit assignments online, track deadlines, and receive feedback and grades.
Grades:

View grades and assessment results for completed assignments, quizzes, tests, and exams.
Monitor overall academic performance, cumulative GPA, and progress towards learning objectives.
These frontend features cater to the specific needs and responsibilities of each user role within the educational platform, providing a user-friendly interface for efficient management, communication, and collaboration.




mern-educational-platform/
│
└── client/
    ├── public/
    └── src/
        ├── components/
        │   ├── StudentDashboard/
        │   │   ├── StudentDashboard.js        // Main Student Dashboard component
        │   │   ├── Notifications.js           // Component for displaying notifications
        │   │   ├── LearningMaterials.js       // Component for displaying learning materials
        │   │   ├── Assignments.js             // Component for displaying assignments
        │   │   └── Grades.js                  // Component for displaying grades
        ├── services/                          // Placeholder for API service functions (to be implemented)
        ├── styles/                            // Placeholder for CSS/SCSS files (to be implemented)
        ├── App.js                             // Main application component
        └── index.js                           // Entry point for React application




mern-educational-platform/
│
├── client/
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       │   ├── AdminDashboard/
│       │   │   ├── AdminDashboard.js
│       │   │   ├── AdminUsers.js
│       │   │   ├── CurriculumManagement.js
│       │   │   ├── Reports.js
│       │   │   └── Analytics.js
│       │   ├── TeacherDashboard/
│       │   │   ├── TeacherDashboard.js
│       │   │   ├── LessonPlans.js
│       │   │   ├── StudentProgress.js
│       │   │   ├── Attendance.js
│       │   │   └── Communication.js
│       │   ├── StudentDashboard/
│       │   │   ├── StudentDashboard.js
│       │   │   ├── LearningMaterials.js
│       │   │   ├── Assignments.js
│       │   │   ├── Grades.js
│       │   │   └── Feedback.js
│       │   ├── ParentDashboard/
│       │   │   ├── ParentDashboard.js
│       │   │   ├── ChildProgress.js
│       │   │   ├── Grades.js
│       │   │   ├── Attendance.js
│       │   │   └── Communication.js
│       │   └── SuperAdminDashboard/
│       │       ├── SuperAdminDashboard.js
│       │       ├── SystemSettings.js
│       │       ├── UserManagement.js
│       │       ├── AdvancedAnalytics.js
│       │       └── IntegrationOptions.js
│       ├── services/
│       ├── styles/
│       ├── App.js
│       └── index.js
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── config.js
│   ├── server.js
│   └── app.js
│
├── scripts/
│
├── tests/
│
├── README.md
├── package.json
└── .gitignore









mern-educational-platform/
│
├── client/                  # Frontend React.js application
│   ├── public/              # Public assets
│   └── src/                 # React components and application logic
│       ├── components/      # Reusable React components
│       ├── pages/           # Page-level React components
│       ├── services/        # API service functions (for making requests to the backend)
│       ├── styles/          # CSS or SCSS files
│       ├── App.js           # Main application component
│       └── index.js         # Entry point for React application
│
├── server/                  # Backend Node.js & Express.js application
│   ├── controllers/         # Route controllers (handling HTTP requests)
│   ├── models/              # Mongoose models for MongoDB schemas
│   ├── routes/              # Express.js route definitions
│   ├── utils/               # Utility functions or modules
│   ├── config.js            # Configuration file (e.g., database connection)
│   ├── server.js            # Entry point for backend application
│   └── app.js               # Express.js application setup
│
├── scripts/                 # Scripts for deployment or other tasks
│
├── tests/                   # Unit or integration tests
│
├── README.md                # Project documentation
├── package.json             # Node.js dependencies and scripts
└── .gitignore               # Git ignore file
