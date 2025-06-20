/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core brand
        primary: "var(--primary)", // Main brand color, titles, primary BG
        secondary: "var(--secondary)", // Secondary surfaces, nav, borders
        accent: "var(--accent)", // Primary button BG, highlights

        // Semantic surfaces
        surface: "var(--white)", // Main page background
        "surface-muted": "var(--grey-100)", // Card backgrounds, light sections
        "surface-alt": "var(--grey-200)", // Alternate backgrounds

        // Text
        text: "var(--text)", // Main body text
        "text-secondary": "var(--grey-500)", // Secondary text
        "text-inverse": "var(--white)", // Text on dark backgrounds

        // Borders
        border: "var(--grey-200)", // Default border
        "border-strong": "var(--secondary)", // Stronger border

        // Brand highlights
        highlight: "var(--highlight)", // Highlight color (e.g. hover)
        brand: "var(--brand-400)", // Brand accent (e.g. CTA)
        "brand-muted": "var(--brand-200)", // Subtle brand background
        "brand-dark": "var(--brand-700)", // Brand border or hover

        // Status
        link: "var(--link)",
        error: "var(--error)",
        warning: "var(--warning)",
        success: "var(--success)",
      },
      fontFamily: {
        heading: ["var(--font-heading)"],
        body: ["var(--font-body)"],
      },
    },
  },
  plugins: [],
};
