import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
			background: {
				DEFAULT: 'hsl(var(--background))',
				skobeloff: '#07636A' 
			},
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
			border: {
				DEFAULT: 'hsl(var(--border))',
				skobeloff: '#07636A',
			},
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
			Skobeloff:'#07636A',
			sliversand: "#C2C2C2",
			darkslategray: '#006066',
			darkgray: '#9A9A9A',
			dimgray: '#6D6D6D'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		borderColor :{
			sunglow:'#FFCA2C',
		},
		  fontFamily: {
			euclid: ['var(--font-euclid)'],
		  },
		  fontWeight: {
			light: '300',
			regular: '400',
			medium: '500',
			bold: '700',
		  },
		  backgroundImage: {
			'main-gradient': 'linear-gradient(180deg, #F0F0F0 0%, #FFFFFF 100%)',
		  },
		  boxShadow: {
			'search-bar': '0px 0px 12.73px 0px #FFCA2C80',
			 'category': '0px 0px 25px 0px #0000001A'

		  }
  	},

  },
  plugins: [require("tailwindcss-animate"), require('@tailwindcss/line-clamp')],
} satisfies Config;
