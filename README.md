#Project Title
Health and Wellness Project

##Introduction
The Health and Wellness Project aims to create a platform that provides a holistic and personalized approach to health management. With the increasing importance of maintaining a healthy lifestyle, this project addresses the challenges individuals face in managing their health effectively. The platform integrates various aspects of wellness, including physical activity tracking, nutrition management, mental wellness, and personalized health advice, into a cohesive and user-friendly application.

#Project Type
Fullstack

#Deployed App
Frontend: https://pixel-pole-vault-040.vercel.app

#Directory Structure
pixel-pole-vault-040/
├─mnode_module/
├─ public/
├─ src/
│  ├─ components/
│  ├─ SagarComponents/
│  │  ├─ OmComponents/
│  │  ├─ ArpanCpmponents/
│  │  └─ SaifComponents/
│  ├─ context/
│  ├─ App.jsx
│  ├─ main.jsx
│  ├─ hooks/
│  ├─ styles/
│  └─ public/
├─ index.html
├─ package.json
├─ README.md
└─ server.js

#Video Walkthrough of the Project
https://youtu.be/K1aRigLCq68?si=wQqD79Be-GSu_1V1

#Features
User Authentication: Secure user login and registration using Firebase or Supabase.
![image](https://github.com/user-attachments/assets/53f5a23c-36be-4498-a0a4-236212b07440)

![image](https://github.com/user-attachments/assets/5afa49c6-241d-4f18-8009-89b28a6c640b)
![image](https://github.com/user-attachments/assets/5f0b6c44-10ed-473e-a85b-043203c23c98)
![image](https://github.com/user-attachments/assets/53f3ccb6-054e-4ff6-96ec-62e3a4845c62)
![image](https://github.com/user-attachments/assets/c8300635-9240-4ec6-aa2d-8dbe487d8120)

AI Health Assistant: Real-time health advice using AI, with dynamic recommendations.
![image](https://github.com/user-attachments/assets/46119bb5-2498-477c-9624-25911bb43eda)

Physical Activity Tracking: Manual input of exercises, workout recommendations based on goals.
![image](https://github.com/user-attachments/assets/7259ba04-3e49-46fe-b26f-1fdabecf532b)
![image](https://github.com/user-attachments/assets/f04976ca-66ac-483b-a92b-74f0da0ebf06)

![image](https://github.com/user-attachments/assets/39ce0611-975d-43c6-9372-e65dbb9e31e3)
![image](https://github.com/user-attachments/assets/6a9dd10d-29aa-4641-89ee-b3998009516b)
![image](https://github.com/user-attachments/assets/7cd09b75-d02b-4f3d-a0d0-48f224727313)

Nutrition Management: Food diary, nutritional analysis, daily intake recommendations.
![image](https://github.com/user-attachments/assets/9dd2c8e5-aaac-4aa7-a375-d302c0f4f2d1)

Searching and Suggestions: Implemented search with debouncing and edit distance algorithm.
![image](https://github.com/user-attachments/assets/3b4c698d-b8b8-430c-b500-a14eda427155)
![image](https://github.com/user-attachments/assets/35ed700b-7bc8-4b18-b52b-7c51ef7c4197)
![image](https://github.com/user-attachments/assets/305aedb4-3c03-4b09-8d8a-1f16fd84628a)

#Design Decisions or Assumptions
UI/UX Focus: Prioritized a modern and intuitive interface.
![image](https://github.com/user-attachments/assets/70ccc1a8-583c-4852-a6e6-d375683c6200)
![image](https://github.com/user-attachments/assets/fec5ed50-3615-4603-9c66-c922c5a2af95)

#Installation & Getting Started
git clone https://github.com/sagarrathod7568/Pixel-Pole-Vault-040.git
cd Pixel-Pole-Vault-040
npm install
npm run dev

#Example Frontend Usage:
Navigate to the "Activity" page to log exercises.
Go to the "Nutrition" section to track your meals.

#Credentials
For testing authenticated pages, use the following credentials:
User: sagarrathod050.com
Password: Sagar@7568

#APIs Used
Firebase Authentication: For secure login and registration.
OpenAI/Google Gemini API: For AI-based health advice.
Supabase/Firebase Database: For data storage and retrieval.

#API Endpoints
User Authentication:
POST /api/auth/register: Register a new user.
POST /api/auth/login: User login.

#Technology Stack
Frontend: React.js, Context API, Custom Hooks, Bootstrap for responsive design.
Backend: Node.js, Express.js, Firebase.
Database: Firebase Firestore.
AI Integration: Google Gemini API for the AI Health Assistant.
Other Libraries/Modules: Axios, bcrypt, JSON Web Token (JWT) for authentication.



