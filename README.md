# 📸 SnapGallery - Professional Photo Gallery App

SnapGallery ek modern React application hai jo **Picsum API** ka use karke ek beautiful aur responsive photo gallery display karti hai. Is project ko modular architecture aur performance optimization ke saath develop kiya gaya hai.

## 🚀 Live Demo
Aap is project ka live version yahan dekh sakte hain:  
👉 **[SnapGallery Live View](https://snapgayllery.netlify.app/)**

---

## ✨ Key Features

- **Dynamic Data Fetching:** Picsum API se real-time photos fetch hoti hain.
- **Interactive Search:** Author name ke basis par instant results filter hote hain with a result counter.
- **Category-Based Filters:** Nature, Animals, Tech, aur Architecture categories support karta hai.
- **Advanced Favourites System:** - User photos ko ❤️ (like) kar sakta hai.
  - **Red Heart Animation:** Like karne par icon smooth animation ke saath red fill ho jata hai.
- **Data Persistence:** LocalStorage ka use kiya gaya hai taaki page refresh karne par bhi aapke favourites save rahein.
- **Modern UI/UX:** - Tailwind CSS se build kiya gaya premium grid design.
  - Smooth hover effects aur card lifting animations.
  - Fully responsive (Mobile, Tablet, aur Desktop friendly).

---

## 🛠️ Technical Implementation (Interview Focus)

Maine is project mein standard coding practices aur performance hooks ka use kiya hai:

1. **Modular Components:** Codebase ko separate files (`Header`, `PhotoCard`, `usePhotos`) mein divide kiya hai for better maintainability.
2. **Custom Hook (`usePhotos`):** API call aur data fetching logic ko UI se alag rakha hai.
3. **`useReducer`:** Favourites toggle karne ke logic ko manage karne ke liye `useReducer` ka use kiya hai.
4. **`useMemo`:** Search results ko optimize karne ke liye use kiya hai taaki unnecessary re-renders na hon.

---

## 📦 Tech Stack

- **Framework:** React.js (Vite)
- **Styling:** Tailwind CSS
- **API:** Picsum Photos API
- **Deployment:** Netlify

---

## 🔧 Local Installation & Setup

Agar aap is project ko locally apne machine par run karna chahte hain, toh niche diye gaye commands follow karein:

1. **Repository Clone karein:**
   ```bash
   git clone [https://github.com/abhishekshivahre08/Photo-Gayllery.git](https://github.com/abhishekshivahre08/Photo-Gayllery.git)
2. **Dependencies Install karein:**
   ```bash
   npm install
3. **Development Server Start karein:**
   ```bash
   npm run dev
**👨‍💻 Author**

Abhishek Shivhare B.Tech CSE Student & Full Stack Developer 👉 **[GitHub Profile](https://github.com/abhishekshivahre08)**



