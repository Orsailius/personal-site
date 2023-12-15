/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  daisyui:
  {
    themes: [
      {
        coolLight: 
        {        
          "primary": "#3b89ae",  
          "primary-content":"#ffffff",              
          "secondary": "#e8f5fb",                
          "accent": "#993bae",                
          "neutral": "#312734",                
          "base-100": "#feffff",   
          "base-200": "#eeeeee",              
          "base-300": "#dddddd",     
          "info": "#4399ea",                
          "success": "#36aa5a",                
          "success-content": "#ffffff",
          "warning": "#fde047",                
          "error": "#dc2626",
        },
        coolDark: 
        {        
          "primary": "#3b89ae",  
          "primary-content":"#ffffff",              
          "secondary": "#466b75",                
          "secondary-content": "#ffffff",  
          "accent": "#993bae",                
          "neutral": "#312734",                
          "base-100": "#323835",   
          "base-200": "#212724",              
          "base-300": "#101613",     
          "info": "#4399ea",                
          "success": "#36aa5a",                
          "success-content": "#ffffff",
          "warning": "#fde047",                
          "error": "#dc2626",
        },
      },
    ],
  },
  plugins: [require("daisyui"),require('@tailwindcss/typography'),],
}

