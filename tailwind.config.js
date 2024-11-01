import { nextui } from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './templates/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
    './public/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
    
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-linear": "linear-gradient(140deg, #c80000 0%, #620000 50%, #ffffff 100%)",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        
      },

      animation: {
        'moveIn': "1s ease-in moveIn forwards",
        'shake': "2s shake",
      },
      
      transitionTimingFunction: {
        'custom-ease': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      },

      width: {
        'full-minus-56': 'calc(100% - 14rem)',
        'full-minus-20': 'calc(100% - 5rem)',
      },

      colors: {
        "primary": "rgb(200, 0, 0)",
        "primaryLight": "rgb(200, 0, 0, 0.4)",
        "bgPrimary": "rgba(55, 55, 55, 0.02)",
        "sideBarPrimary": "rgba(55, 55, 55, 0.02)",
        "darkBgPrimary": "rgba(200, 0, 0, 0.03)",
        "greyOff": 'rgb(211, 211, 211)',
        "grey": "rgb(217, 217, 217)",
        "success": "rgb(0, 128, 0)",
        "greenLightest": "rgba(0, 128, 0, 0.1)",
        "white": "rgb(255, 255, 255)",
        "deepBlack": "rgb(0, 0, 0)",
        "orange": "rgb(242, 72, 34)",
        "orangeLightest": "rgba(242, 72, 34, 0.1)",
        "orangeLineLight": "rgba(242, 72, 34, 0.3)",
        "graphBg": "rgb(248, 242, 242)",
        "darkGraphBg": "rgb(86, 86, 86)",
        "graphLine": "rgb(230, 175, 175)",
        "blue": "rgb(0, 35, 123)",
        "blueLight": "rgb(0,35,123, 0.4)",
        "yellow": "rgb(255, 255, 0)",
        "yellowLight": "rgb(255, 255, 0, 0.4)",
        "pending": "rgb(255, 168, 0)",
        "sunColor": "rgb(255, 199,0)",
        "tableHead": "rgba(200, 0, 0, 0.11)",
        "darkTableHead": "rgba(200, 0, 0, 0.07)",
        "tableColorI": "rgba(243, 239, 235, 0.62)",
        "dateColor": "rgb(144, 139, 120)"
      },

      screens: {
        'lt': '1024px',
        'tb': '769px',
        'pn': '470px',
        'sm-pn': '426px',
        'xs-pn': '321px'
      },

      
      
    },
  },
  darkMode: "class",
  plugins: [ nextui({
    themes: {
      dark: {
        colors:  {
          background: "rgb(30, 30, 30)"
        }
      }
    }
  }),],
}
