# 🌊 Affirmation Generator

A simple affirmation generator built with **Next.js**, **Tailwind CSS**. The app features a soothing **blue-themed UI** and fetches positive affirmations to uplift your day! 🌟

## ✨ Features
- Fetches affirmations from [affirmations.dev](https://www.affirmations.dev/)
- **Next.js API route** to handle API requests and avoid CORS issues
- Responsive and clean **blue-themed UI**

## 📸 Screenshot
![image](https://github.com/user-attachments/assets/a3fcd3cd-35c1-4cc7-ace9-eef84c213a77)

## 🚀 Getting Started
### 1️⃣ Clone the repository
```sh
git clone https://github.com/jemorak/affirmation-generator.git
cd affirmation-generator
```

### 2️⃣ Install dependencies
```sh
npm install
```

### 3️⃣ Run the development server
```sh
npm run dev
```
The app will be available at **http://localhost:3000** 🌐

## 📂 Project Structure
```
📁 affirmation-generator
├── 📁 pages
│   ├── 📄 index.tsx 
│   ├── 📁 api
│   │   ├── 📄 affirmation.ts (API route to fetch affirmations)
├── 📁 public
│   ├── 🎨 hand-drawn-aesthetic-blue-background-vector.jpg (Background image)
├── 📁 styles
│   ├── 📄 globals.css (Tailwind styles)
├── 📄 package.json
```

## 🛠️ Technologies Used
- **Next.js** – React framework for SSR & API routes
- **Tailwind CSS** – Utility-first styling
- **Fetch API** – Calls external API via Next.js backend

## 🔗 API Handling
To avoid **CORS issues**, this app uses a **Next.js API route** (`/api/affirmation.ts`) to fetch affirmations **server-side** before sending them to the frontend.

## 📌 Future Improvements
- Add **animations** (e.g., fade-in and floating objects effects)
- Save affirmations to **local storage**
