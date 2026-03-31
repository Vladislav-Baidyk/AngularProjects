![2026-03-31160111-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/49e6f323-d6cf-4b38-8344-5eb141dd10d1)E-commerce Product Page — Modern Angular & Signals Challenge
A high-performance, interactive product page built with Angular 18. This project demonstrates advanced frontend practices, focusing on complex reactive state management, service-driven data flow, and a seamless user experience.

✨ Features
📱 Fully Responsive: Adaptive UI built with Tailwind CSS, featuring a custom mobile side-drawer and optimized desktop layouts.

🛒 Reactive Cart System: Powered by Angular Signals and Injectable Services. Includes automatic price calculation using computed() and real-time quantity synchronization.

🖼️ Dynamic Gallery: Interactive image slider with thumbnail selection, "active" state management, and optimized asset loading.

🧩 Standalone Architecture: Clean, module-free Angular structure using the latest standalone component patterns for faster performance.

⚡ Latest Control Flow: Implements the new @if, @else, and @for syntax for elegant and performant template logic.

🔧 Technologies Used
Angular 18 (Standalone Components, Signals, Computed, Dependency Injection)

Tailwind CSS (Utility-first styling, custom arbitrary values, and Flexbox/Grid layouts)

TypeScript (Strict typing for product interfaces and robust business logic)

JSON Data Handling (Dynamic import and mapping of product assets and details)

HTML5 & CSS3 (Semantic layout, Fixed/Absolute positioning, and smooth transitions)
🎥 Preview
![2026-03-31160111-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/ae00b3f9-4e99-4660-adc8-9ea49e646ffd)


📂 What I Learned & Implemented
State Management with Signals: Mastered signal(), update(), and set() to manage product quantities and UI toggle states (Cart/Menu).

Derived State (Computed): Implemented totalPrice logic that automatically recalculates based on quantity changes without manual triggers.

Shared Services: Developed a centralized ServeCart service to facilitate communication between independent components (Header, Product, and Basket).

Z-Index & Overlay Logic: Solved complex UI layering issues and implemented fixed positioning for a flicker-free mobile navigation experience.

Component Composition: Built modular, reusable components with clear Input/Output logic and clean separation of concerns.

📁 How to Run Locally
Clone the repository:

Bash
git clone https://github.com/Vladislav-Baidyk/AngularProjects.git
Navigate to the project folder:

Bash
cd [your-folder-name]
Install dependencies:

Bash
npm install
Start the development server:

Bash
ng serve
Build for production:

Bash
ng build
