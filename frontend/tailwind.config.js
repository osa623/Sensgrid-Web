

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {

      colors:{ //adding colors to the platform
        primary:"#FFFFFF",
        secondary:"#000000",
        baseprimary:"#00bfff",
        theme01: "#0056A3",
        darkTheme:"#021526",
        darkPrimary:"#0d0326",
        darkSecondary:"#0760d5",
        fontbasic:"#fdd122",
        fontsecondary:"#E5E4E2"
    },
    fontFamily:{

      poppins: ['Poppins', 'sans-serif'],
      russoone: ['Russo One', 'sans-serif'],
      kdamThmorPro: ['Kdam Thmor Pro', 'sans-serif'],
      lorniasolid:['Londrina Solid', 'sans-serif'],
      bebasneue:['Bebas Neue', 'sans-serif'],
      bricolagegrotesque:['Bricolage Grotesque', 'sans-serif'],
      kanit:['Kanit', 'sans-serif'],
      dmsans:['DM Sans', 'sans-serif'],
      londrina:['Londrina Solid', 'sans-serif'],
      atma:['Atma', 'sans serif']

    },

    screens: {
      'sms': { 'min': '10px', 'max': '640px' },
      'mds': { 'min': '640px', 'max':'1024px'},
      'lgs': { 'min': '1025px' ,'max':'9000px'}
    
    },
    
    
    },
  },
  plugins: [
      require('tailwindcss-textshadow'),
  ],
}

