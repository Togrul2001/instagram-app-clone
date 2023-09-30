/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'login-logo': "url('https://www.instagram.com/static/images/homepage/phones/home-phones-2x.png/cbc7174b4f05.png')"
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}

