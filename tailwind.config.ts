import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#007bff', // Bleu
        secondary: '#6c757d', // Gris
        // Ajoutez ou modifiez selon le design Dribbble
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        // Adaptez à votre choix de typographie
      },
      // Ajoutez d'autres personnalisations ici
    },
  },
  plugins: [],
}
};
export default config;
