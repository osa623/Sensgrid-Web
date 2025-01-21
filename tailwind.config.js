

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
      'mmds': { 'min': '640px', 'max':'1200px'},
      'llgs': { 'min': '1201px' ,'max':'9000px'},
      'lgs': { 'min': '1025px' ,'max':'9000px'}
    
    },
    
    
    },
  },
  plugins: [],
}

