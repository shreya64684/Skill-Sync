# SkillSync 💼🎙 - https://skill-sync-psi.vercel.app/

*SkillSync* is an AI-powered interview practice platform that helps users improve their interview readiness and enhance their resumes. Our platform uses a Voice AI Agent to simulate mock interviews and offers intelligent suggestions to optimize resumes for better job outcomes.

We worked very hard overnight and truly enjoyed participating in this incredible journey. It was a rewarding experience of collaboration, learning, and innovation. 💪🚀

---

## 🚀 Key Features

### 🎯 AI Mock Interview Simulation
  - Users can enter their job position, job description, and years of experience.
  - The system uses AI to generate a set of customized interview questions tailored to the provided role and domain.
  - Users respond via voice input, and their answers are analyzed in real-time for both content relevance and delivery quality.
  - The platform then provides:
    - *Smart feedback on answer correctness and completeness*
    - *Ratings on communication skills and domain knowledge*
    - *Suggestions to improve specific areas of the response*
  - This feature offers a realistic and adaptive mock interview experience, helping users build confidence and prepare effectively.

### 🎤 Voice AI Agent-Based Dynamic Mock Interviews
- Users input their *desired job role, **key skills, and **experience level*.
- The system dynamically generates *five relevant interview questions* based on input.
- Users can *record their responses* directly using their voice.
- The AI evaluates the responses using voice analytics and content understanding to provide:
  - *Confidence scores*
  - *Clarity and fluency ratings*
  - *Constructive feedback*
  - *Tips for improvement*

### 📄 Resume Enhancement with Gemini AI
- Users can upload their *existing resume (PDF or DOC)*.
- The system uses AI to:
  - Parse the content and analyze structure, clarity, and keyword relevance.
  - Suggest *top sections*, *areas to improve*, *recommended projects and courses*.
  - Recommend *tailored improvements* based on the user's target role and experience.

---

## 🎯 Who Is It For?

- 👩‍🎓 Final-year students preparing for campus placements
- 👨‍💻 Job seekers entering or re-entering the workforce
- 🔁 Professionals exploring career transitions
- 🧑‍🏫 Universities and training institutes
- 👥 Freelancers aiming to align with industry standards

---

## Tech Stack

### 🚀 Frontend  
- **Next.js 14 (App Router)**  
- **Tailwind CSS**  
- **ShadCN UI & Lucide Icons**  
- **face-api.js**  (Real-time facial expression analysis)
 
---
### 🧠 Backend AI Integration  
- **Gemini API (Google Generative AI)**  
- **Dynamic Question Generator**  
- **Feedback Engine**  
---

### 🔐 Authentication & User Management  
- **Clerk.dev**  
---

### 🗂️ Database  
- **PostgreSQL (via Drizzle ORM)**  
  Relational database used to persist all user data, interview responses, feedback, and mock session metadata.
---

### ☁️ Deployment & Hosting  
- **Vercel**  - https://skill-sync-psi.vercel.app/

---

## 🛠 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/shreya64684/Skill-Sync
cd Skill-Sync
```
### 2. Install Dependencies
```bash
npm install
```
### 3. Set Up Environment Variables - create .env.local file
```bash
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_URL=
# PostgreSQL Drizzke
NEXT_PUBLIC_DRIZZLE_DB_URL=
# Gemini API
NEXT_PUBLIC_GEMINI_API_KEY=
NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT=5
NEXT_PUBLIC_API_URL=
```
### 4. Run the Development Server
```bash
npm run dev
```
  #### *Open http://localhost:3000 to see the app in action.*
---
## ✨ Features
✅ Secure authentication with Clerk

✅ Dynamic user dashboard

✅ AI-generated interview questions (based on job title, experience)

✅ Voice recording & Gemini-based feedback

✅ Real-time facial emotion detection (Confident, Nervous, etc.)

✅ Resume upload & AI analysis

✅ Voice-based AI interviewer

✅ Interview history saved in DB (with feedback and scores)
