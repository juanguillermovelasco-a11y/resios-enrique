/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    {
      pattern: /(bg|text|border)-(rose|amber|emerald|blue|purple|slate|navy|accent)-(50|100|200|300|400|500|600|700|800|900)/,
    },
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50:  "#f0f2f9",
          100: "#dbe0ef",
          200: "#b8c1df",
          300: "#8e9bca",
          400: "#6172b1",
          500: "#3f5197",
          600: "#2c3a78",
          700: "#1E2761",
          800: "#161c4a",
          900: "#0d1230",
        },
        accent: {
          DEFAULT: "#F5A623",
          50:  "#fff8eb",
          100: "#fdecc8",
          200: "#fbd58c",
          300: "#f8b94f",
          400: "#F5A623",
          500: "#d8870e",
          600: "#a96809",
        },
        ice: "#CADCFC",
      },
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};
