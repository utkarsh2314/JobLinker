# JobLinker

JobLinker is a comprehensive job portal built using the MERN stack (MongoDB, Express, React, Node.js) with Redux Toolkit for state management. The application offers real-time job notifications, secure user authentication, automated email alerts, and efficient media management, providing a seamless experience for both job seekers and employers.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Authentication:** Secure login and registration with `jsonwebtoken` and `bcrypt`.
- **Job Listings & Matching:** Dynamic job search and application system with real-time job notifications.
- **Email Automation:** Automated email alerts for job updates and application statuses using `nodemailer`.
- **File Management:** Media management with `cloudinary` and file uploads using `express-fileupload`.
- **State Management:** Efficient state management with Redux Toolkit.
- **Scheduled Tasks:** Automated background tasks using `node-cron`.
- **Cross-Origin Resource Sharing:** Secure API interactions with `cors`.
- **Input Validation:** Data integrity with `validator`.

## Technologies Used

- **Frontend:** React, Redux Toolkit
- **Backend:** Node.js, Express
- **Database:** MongoDB, Mongoose
- **Authentication:** bcrypt, jsonwebtoken
- **File Management:** cloudinary, express-fileupload
- **Email Service:** nodemailer
- **Task Scheduling:** node-cron
- **Environment Variables:** dotenv
- **Middleware:** cookie-parser, cors
- **Validation:** validator

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/utkarsh2314/JobLinker.git
   cd JobLinker
