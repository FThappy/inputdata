/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      boxShadow: {
        "red-shadow": "0px 4px 10px 0px rgba(255, 45, 70, 0.25)",
        "white-shadow": "0px 4px 8px 0px rgba(20, 20, 43, 0.04)",
        "gray-shadow": "0px 2px 40px 0px rgba(0, 0, 0, 0.15)",
        "template-shadow": "0px 6px 20px 0px rgba(20, 20, 43, 0.06)",
        "hover-shadow":
          "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px",
        "card-shadow": "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      },
    },
  },
  plugins: [],
};
