FlivoAI - Full Stack Developer Assignment
Candidate: Jonnagaddala Mohan Sai
Role: Full Stack Developer – Internship (Remote)
Overview
This is the full-stack solution for the FlivoAI Full Stack Developer Assignment. 
The project includes both frontend (Next.js) and backend (Node.js + Express + Prisma + PostgreSQL) implementations.
The application replicates the Contact page from the given Figma design, supports form submission, and stores data in a PostgreSQL database.

Tech Stack
Layer	Technology
Frontend	Next.js 14 + Tailwind CSS
Backend	Node.js + Express.js
ORM	Prisma
Database	PostgreSQL
API Testing	Postman
Deployment	Vercel (Frontend) / Render (Backend)
Setup Instructions (Step-by-Step)

1️⃣ Clone the Repository:
git clone https://github.com/jonnagaddalamohansai/flivoai-fullstack-assignment.git
cd flivo_assignment

2️⃣ Backend Setup:
cd backend
npm install

Create a .env file with DATABASE_URL, PORT and FRONTEND_URL values.
Run Prisma migrations:
npx prisma generate
npx prisma migrate dev --name init --schema=prisma/schema.prisma

Start backend server:
node index.js

3️⃣ Frontend Setup:
cd ../frontend
npm install
Create .env.local file with NEXT_PUBLIC_API_URL
npm run dev

Deployment

Frontend: Deploy on Vercel
Backend: Deploy on Render
Add required environment variables before deployment.

API Endpoints

POST /api/contact
Request Body:
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "phone": "9876543210",
  "service": "Web App Audit",
  "message": "Hello there!",
  "terms": true
}

Response:
{
  "ok": true,
  "data": { "id": 1, "firstName": "John", "email": "john@example.com" }
}

GET /api/contact
Fetch the latest 20 submissions.

Deliverables

✅ Frontend + Backend source code (GitHub)
✅ Database schema (prisma/schema.prisma)
✅ Postman API collection
✅ Demo link (Vercel + Render)
✅ README documentation

Contact
📧 jonnagaddalamohansai@gmail.com
