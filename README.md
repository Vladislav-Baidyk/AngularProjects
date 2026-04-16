# 👑 The Sovereign — Modern User Directory Dashboard

A high-performance, sleek admin dashboard built with **Angular 18**. This project demonstrates modern frontend practices, focusing on clean UI/UX, reactive state management with Signals, and a fully responsive component-driven architecture.

## ✨ Key Features

* 📱 **Fully Responsive:** Adaptive UI built with **Tailwind CSS**, optimized for mobile, tablet, and desktop views. Includes a custom mobile slide-out navigation.
* 🧩 **Standalone Architecture:** Modern Angular structure without unnecessary NgModules for faster loading and a cleaner, modular codebase.
* ⚡ **Angular Signals:** Implements the latest reactive primitives for efficient state management (Pagination, Search, and Active User tracking).
* 🔍 **Live Search & Filtering:** Instant client-side filtering of user records with optimized `computed` signals.
* 📄 **Advanced Pagination:** Custom-built pagination logic with dynamic data slicing and "Next/Back" navigation.
* 🎨 **Professional UI:** Features a deep navy palette, Google Fonts integration (Inter), and smooth hover transitions for a premium "Enterprise" feel.
* 🛠 **Shared State Service:** Uses Angular Services as a "Single Source of Truth" to sync data between independent components (Header, Sidebar, and Grid).

## 🔧 Technologies Used

* **Angular 18** (Standalone Components, Signals, Effect, Computed, `imports` array)
* **Tailwind CSS** (Utility-first styling, responsive design, custom arbitrary values)
* **RxJS & HttpClient** (Asynchronous data fetching from JSONPlaceholder API)
* **TypeScript** (Strict typing for robust data handling and component logic)
* **Lucide/Custom Icons** (High-quality iconography for a professional look)

## 📸 Preview
<img width="800" height="411" alt="2026-04-16185028-ezgif com-video-to-gif-converter" src="https://github.com/user-attachments/assets/a35116e3-d6c1-406d-8677-f3bc87b8c955" />

## 📂 Project Structure

```text
src/
├── app/
│   ├── components/
│   │   ├── header/        # Search and Profile actions
│   │   ├── left/          # Desktop sidebar navigation
│   │   ├── grid-right/    # Main content area with user cards
│   │   └── header-mobile/ # Responsive slide-out menu
│   ├── services/
│   │   ├── users.service.ts         # HTTP logic & Pagination
│   │   └── current-user.service.ts  # Shared state for active selection
│   └── interfaces/        # TypeScript models (UserI, etc.)
