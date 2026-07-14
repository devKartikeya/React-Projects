# 🔢 SolidJS Calculator

A modern, responsive calculator built with **SolidJS** and **Tailwind CSS**.  
This project demonstrates how to combine reactive state management (`createSignal`) with clean UI design to build a functional and beautiful calculator interface.

---

## ✨ Features
- Built with **SolidJS** for reactivity and performance
- Styled using **Tailwind CSS** with gradients, shadows, and hover effects
- Responsive layout with consistent button sizing
- Interactive button press animations (`active:scale-95`)
- Clear button to reset the input
- Organized button grid using `<For />` loops for clean code

---

## 🚀 Getting Started

### Prerequisites
- Node.js (>= 16)
- npm, pnpm, or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/devKartikeya/solidjs-calculator.git

# Navigate into the project folder
cd solidjs-calculator

# Install dependencies
npm install
Run the development server
bash
npm run dev
Open http://localhost:5173 (localhost in Bing) to view the app in your browser.

🛠️ Project Structure
Code
src/
 ├── components/
 │    └── Button.jsx   # Reusable button component
 ├── App.jsx           # Main calculator layout
 └── index.jsx         # Entry point
🎨 Design Highlights
Gradient backgrounds for depth and modern feel

Rounded corners + shadows for a card-like calculator body

Monospace font for the display input

Hover & active states for tactile button feedback

Distinct Clear button styled in red to stand out

📚 Learning Goals
This project is a great starting point to:

Practice SolidJS signals and reactivity

Learn how to structure UI with nested <For /> loops

Explore Tailwind CSS utilities for professional design

Build scalable, reusable components

🤝 Contributing
Pull requests are welcome!
If you’d like to improve the design, add new features (like history, scientific functions, or keyboard support), feel free to fork and submit a PR.

📄 License
This project is licensed under the MIT License.
You’re free to use, modify, and distribute it.