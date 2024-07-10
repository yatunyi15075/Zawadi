+---------------------+     +-------------------+     +----------------------+
|        Users        |     |      Schools      |     |     Announcements    |
+---------------------+     +-------------------+     +----------------------+
| id                  |     | id                |     | id                   |
| username            |     | name              |     | announcement         |
| password            |     | address           |     | section              |
| role                |     | director          |     | created_at           |
| school_id (FK)      |     | location          |     +----------------------+
+---------------------+     | number_of_students|
                           | plan              |
                           +-------------------+

+---------------------+     +-------------------+     +----------------------+
|       Classes       |     | AssessmentReports |     | AttendanceRecords    |
+---------------------+     +-------------------+     +----------------------+
| id                  |     | id                |     | id                   |
| grade               |     | assessment_name   |     | student_id           |
| category            |     | assessment_date   |     | student_name         |
| created_at          |     | score             |     | attendance_date      |
+---------------------+     +-------------------+     | status               |
                                                     | school_id (FK)       |
                                                     +----------------------+

+---------------------+     +-------------------+     +----------------------+
| CurriculumManagement|     |       Classes     |     |        Teachers      |
+---------------------+     +-------------------+     +----------------------+
| id                  |     | id                |     | id                   |
| section             |     | name              |     | name                 |
| grade               |     |                   |     | email                |
| subject             |     +-------------------+     | phone                |
| lesson              |                              | address              |
| timetable           |                              | qualification        |
| created_at          |                              +----------------------+
+---------------------+

+---------------------+     +-------------------+     +----------------------+
|       Students      |     |      Progress     |     |       Performance    |
+---------------------+     +-------------------+     +----------------------+
| id                  |     | id                |     | id                   |
| name                |     | student_id (FK)   |     | student_id (FK)      |
| class_id (FK)       |     | subject           |     | class_id (FK)        |
+---------------------+     | progress_data     |     | subject              |
                            +-------------------+     | marks                |
                                                       +----------------------+

+---------------------+     +-------------------+     +----------------------+
|   EnteredMarks      |     |    LessonPlans    |     |       Timetable      |
+---------------------+     +-------------------+     +----------------------+
| id                  |     | id                |     | id                   |
| student_name        |     | title             |     | class_id (FK)        |
| class_level         |     | content           |     | day                  |
| admission_number    |     | class_id (FK)     |     | subject              |
| subject             |     +-------------------+     | time                 |
| marks               |                              +----------------------+

+---------------------+     +-------------------+     +----------------------+
|     Attendance      |     |    Assignments    |     |     Communication    |
+---------------------+     +-------------------+     +----------------------+
| id                  |     | id                |     | communication_id     |
| student_id (FK)     |     | title             |     | title                |
| date                |     | description       |     | content              |
| status              |     | grade             |     | date_sent            |
+---------------------+     | deadline          |     +----------------------+
                            +-------------------+

+---------------------+     +-------------------+     +----------------------+
|     Students        |     | StudentAssignments|     |       Feedback       |
+---------------------+     +-------------------+     +----------------------+
| student_id          |     | student_id (FK)   |     | feedback_id          |
| first_name          |     | assignment_id (FK)|     | title                |
| last_name           |     | submission_date   |     | content              |
| email               |     | status            |     | date_received        |
| date_of_birth       |     | grade             |     +----------------------+
| gender              |     +-------------------+
| address             |
| phone               |
+---------------------+

+---------------------+     +-------------------+
|   Grades            |     | LearningMaterials |
+---------------------+     +-------------------+
| grade_id            |     | material_id       |
| student_id (FK)     |     | subject           |
| subject             |     | title             |
| grade               |     | description       |
| performance_level   |     | link              |
+---------------------+     +-------------------+






-- SUPER-ADMIN
CREATE TABLE Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role ENUM('super-admin', 'admin', 'teacher', 'parent') NOT NULL,
    school_id INT,
    FOREIGN KEY (school_id) REFERENCES Schools(id)
);

CREATE TABLE Schools (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    director VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    number_of_students INT NOT NULL,
    plan ENUM('free', 'silver', 'gold') NOT NULL
);

-- ADMIN

CREATE TABLE Announcements (
    id INT AUTO_INCREMENT PRIMARY KEY,
    announcement TEXT NOT NULL,
    section ENUM('All Parents', 'Early Years', 'Middle School', 'Junior Secondary') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Classes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    grade VARCHAR(50) NOT NULL,
    category ENUM('Early Years', 'Middle School', 'Junior Secondary') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE AssessmentReports (
    id INT AUTO_INCREMENT PRIMARY KEY,
    assessment_name VARCHAR(100) NOT NULL,
    assessment_date DATE NOT NULL,
    score INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE AttendanceRecords (
    id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT NOT NULL,
    student_name VARCHAR(100) NOT NULL,
    attendance_date DATE NOT NULL,
    status ENUM('Present', 'Absent') NOT NULL,
    school_id INT,
    FOREIGN KEY (student_id) REFERENCES students(student_id),
    FOREIGN KEY (school_id) REFERENCES Schools(id)
);

CREATE TABLE CurriculumManagement (
    id INT AUTO_INCREMENT PRIMARY KEY,
    section ENUM('Early Years', 'Middle School', 'Junior Secondary') NOT NULL,
    grade VARCHAR(50) NOT NULL,
    subject VARCHAR(100) NOT NULL,
    lesson VARCHAR(100),
    timetable TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- TEACHERS

CREATE TABLE classes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255)
);

CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    class_id INT,
    FOREIGN KEY (class_id) REFERENCES classes(id)
);

CREATE TABLE progress (
    id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT,
    subject VARCHAR(255),
    progress_data TEXT,
    FOREIGN KEY (student_id) REFERENCES students(id)
);

CREATE TABLE teachers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    phone VARCHAR(20),
    address VARCHAR(255),
    qualification VARCHAR(255)
);

CREATE TABLE performance (
    id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT,
    class_id INT,
    subject VARCHAR(255),
    marks INT,
    FOREIGN KEY (student_id) REFERENCES students(id),
    FOREIGN KEY (class_id) REFERENCES classes(id)
);

CREATE TABLE entered_marks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    student_name VARCHAR(255),
    class_level VARCHAR(255),
    admission_number VARCHAR(255),
    subject VARCHAR(255),
    marks INT
);

CREATE TABLE lesson_plans (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    content TEXT,
    class_id INT,
    FOREIGN KEY (class_id) REFERENCES classes(id)
);

CREATE TABLE timetable (
    id INT AUTO_INCREMENT PRIMARY KEY,
    class_id INT,
    day VARCHAR(255),
    subject VARCHAR(255),
    time VARCHAR(20),
    FOREIGN KEY (class_id) REFERENCES classes(id)
);

CREATE TABLE attendance (
    id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT,
    date DATE,
    status VARCHAR(50),
    FOREIGN KEY (student_id) REFERENCES students(id)
);

CREATE TABLE assignments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    description TEXT,
    grade VARCHAR(50),
    deadline DATE
);

-- STUDENTS

CREATE TABLE students (
    student_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    date_of_birth DATE,
    gender ENUM('Male', 'Female', 'Other'),
    address VARCHAR(255),
    phone VARCHAR(20)
);

CREATE TABLE student_assignments (
    student_id INT,
    assignment_id INT,
    submission_date DATE,
    status ENUM('Pending', 'Submitted', 'Graded'),
    grade DECIMAL(5,2),
    PRIMARY KEY (student_id, assignment_id),
    FOREIGN KEY (student_id) REFERENCES students(student_id),
    FOREIGN KEY (assignment_id) REFERENCES assignments(id)
);

CREATE TABLE communication (
    communication_id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    content TEXT,
    date_sent TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE feedback (
    feedback_id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    content TEXT,
    date_received TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE grades (
    grade_id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT,
    subject VARCHAR(50) NOT NULL,
    grade DECIMAL(5,2),
    performance_level VARCHAR(50),
    FOREIGN KEY (student_id) REFERENCES students(student_id)
);

CREATE TABLE learning_materials (
    material_id INT AUTO_INCREMENT PRIMARY KEY,
    subject VARCHAR(50) NOT NULL,
    title VARCHAR(100) NOT NULL,
    description TEXT,
    link VARCHAR(255)
);

-- PARENT-STUDENT RELATIONSHIP

CREATE TABLE Parent_Student (
    parent_id INT,
    student_id INT,
    PRIMARY KEY (parent_id, student_id),
    FOREIGN KEY (parent_id) REFERENCES Users(id),
    FOREIGN KEY (student_id) REFERENCES students(student_id)
);
