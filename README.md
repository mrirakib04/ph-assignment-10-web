# PH Assignment-10 - EcoTrack

## Sustainable Living Community

**EcoTrack** is a web-based platform aimed at promoting sustainable living by helping users track, manage, and improve their eco-friendly habits. The application focuses on creating a community where individuals can share tips, track their progress, and participate in sustainability challenges.

---

### Features

- **User Dashboard:** Track daily eco-friendly activities like recycling, energy savings, and water conservation.
- **Challenges & Goals:** Participate in sustainability challenges and set personal environmental goals.
- **Community Interaction:** Share tips, achievements, and progress with other users.
- **Analytics & Reports:** Visualize your impact with charts and summaries of eco-friendly actions.
- **Notifications:** Get reminders and suggestions to maintain sustainable habits consistently.

---

### Technologies Used

- **Frontend:** React.js, Tailwind CSS, HTML5, CSS3, JavaScript
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** Firebase Authentication (optional)
- **API Integration:** RESTful APIs for data fetching and submission
- **Deployment:** Netlify / Vercel

---

## Dev Dependencies

```json
  "dependencies": {
    "@emotion/react": "^11.14.0",
    "@emotion/styled": "^11.14.1",
    "@mui/material": "^7.3.5",
    "@tailwindcss/vite": "^4.1.17",
    "@tanstack/react-query": "^5.90.7",
    "animate.css": "^4.1.1",
    "aos": "^2.3.4",
    "axios": "^1.13.2",
    "dotenv": "^17.2.3",
    "firebase": "^12.5.0",
    "framer-motion": "^12.23.24",
    "prop-types": "^15.8.1",
    "react": "^19.1.1",
    "react-dom": "^19.1.1",
    "react-head": "^3.4.2",
    "react-icons": "^5.5.0",
    "react-router": "^7.9.5",
    "react-simple-typewriter": "^5.0.1",
    "react-toastify": "^11.0.5",
    "sweetalert2": "^11.26.3",
    "swiper": "^12.0.3",
    "tailwindcss": "^4.1.17"
  },
  "devDependencies": {
    "@eslint/js": "^9.36.0",
    "@types/react": "^19.1.16",
    "@types/react-dom": "^19.1.9",
    "@vitejs/plugin-react": "^5.0.4",
    "eslint": "^9.36.0",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.22",
    "globals": "^16.4.0",
    "vite": "^7.1.7"
  }
```

---

# ⚙️ **Installation Guide (Client + Server)**

## **🖥️ 1) Clone the Repositories**

### **Client**

```bash
git clone https://github.com/mrirakib04/ph-assignment-10-web
cd ph-assignment-10-web
```

### **Server**

```bash
git clone https://github.com/mrirakib04/ph-assignment-10-server
cd ph-assignment-10-server
```

---

## **📌 2) Install Dependencies**

### Client

```bash
npm install
```

### Server

```bash
npm install
```

---

## **🔐 3) Create Environment Variables**

### Client → `.env`

```
VITE_apiKey=YOUR_FIREBASE_API_KEY
VITE_authDomain=YOUR_PROJECT.firebaseapp.com
VITE_projectId=YOUR_PROJECT_ID
VITE_storageBucket=YOUR_BUCKET
VITE_messagingSenderId=XXXX
VITE_appId=XXXX
VITE_baseURL=http://localhost:5000
```

### Server → `.env`

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret
```

---

## **▶️ 4) Run the Server**

```bash
npm run start
```

---

## **▶️ 5) Run the Client**

```bash
npm run dev
```

---

---

## Live Site Link

- [https://mrirakib-ph-assignment-10.netlify.app/](https://mrirakib-ph-assignment-10.netlify.app/)

## Client Repository

- [https://github.com/mrirakib04/ph-assignment-10-web](https://github.com/mrirakib04/ph-assignment-10-web)

## Server Repository

- [https://github.com/mrirakib04/ph-assignment-10-server](https://github.com/mrirakib04/ph-assignment-10-server)
