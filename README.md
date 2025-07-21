🎧 Evento – DJ Event System





Evento is a modern DJ event management system built with Next.js, styled with TailwindCSS, and powered by Prisma ORM and PostgreSQL. It helps users discover and book DJ events seamlessly.

🚀 Live Demo
👉

📸 Screenshots
🏠 Home Page
<img width="1827" height="989" alt="Screenshot 2025-07-21 232004" src="https://github.com/user-attachments/assets/3aac5277-6f65-4978-a325-f83f44b21695" />

📅 All events<img width="1849" height="941" alt="Screenshot 2025-07-21 232014" src="https://github.com/user-attachments/assets/758f68fe-8ede-4426-9b17-1b9032680487" />




🛠️ Features
🎶 Modern landing page for DJ events

📅 Event listings with filtering by city

📝 Booking system for easy reservations

🟢 Backend API built with Prisma and PostgreSQL

💨 Fast local development with Bun or npm

🌐 Seamless deployment on Vercel

🏗️ Tech Stack
Technology	Purpose
Next.js	Frontend Framework
Prisma	Database ORM
PostgreSQL	Database
TailwindCSS	Styling
Vercel	Hosting & Deployment
Bun	Optional ultra-fast dev

🚀 Getting Started
1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/yourusername/evento.git
cd evento
2. Install Dependencies
bash
Copy
Edit
bun install
# or
npm install
3. Configure Environment Variables
Create a .env file in the root:

env
Copy
Edit
DATABASE_URL=your_postgres_database_url
4. Prisma Setup
bash
Copy
Edit
npx prisma migrate dev
npx prisma generate
5. Start Development Server
bash
Copy
Edit
bun dev
# or
npm run dev
🌐 Deployment
Deployed via Vercel:

bash
Copy
Edit
vercel --prod
✅ Remember to add your DATABASE_URL in Vercel Dashboard → Project Settings → Environment Variables.

📚 Resources
Next.js Documentation

Prisma Documentation

Vercel Deployment Guide

TailwindCSS Documentation


📝 License
MIT License.

💡 Open for contributions. Feel free to fork or raise issues!
Built with ❤️ by Monu.

