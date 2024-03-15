import type { Config } from 'tailwindcss'

const config: Config = {
  important: true,
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'gradient-linear-light': 'linear-gradient(196.35deg, #f9f9f9 16.7%, #fdfdfd 82.55%)',
          'gradient-linear-dark': 'linear-gradient(196.35deg, #5B062A 16.7%, #1B023A 82.55%)',
      },
      gap: {
        '3.6': '0.938rem',
        '4.5': '1.125rem',
      }
    },
    fontSize: {
      h1: ['76px', '114px'],
      h2: ['64px', '80px'],
      h3: ['46px', '58px'],
      h4: ['30px', '38px'],
      paragraph: ['22px', '28px'],
    },
    screens: {
      'smPhone': {'min' : '0px', 'max' : '320px'},
      'mdPhone': {'min' : '321px', 'max' : '375px'},
      'lgPhone': {'min' : '376px', 'max' : '390px'},
      'xlPhone': {'min' : '391px', 'max' : '554px'},
      'flexScreen': {'min' : '555px', 'max' : '709px'},
      'smTablet': {'min' : '710px', 'max' : '990px'},
      'lgTablet': {'min' : '991px', 'max' : '1279px'},
      'smLaptop': {'min' : '1280px', 'max' : '1366px'},
      'lgLaptop': {'min' : '1367px', 'max' : '1600px'},
      // minimum values
      'min321px' : {'min' : '321px'},
      'min376px' : {'min' : '376px'},
      'min391px' : {'min' : '391px'},
      'min555px' : {'min' : '555px'},
      'min710px' : {'min' : '710px'},
      'min991px' : {'min' : '991px'},
      'min1280px' : {'min' : '1280px'},
      'min1367px' : {'min' : '1367px'},
      'min1661px': {'min' : '1661px'},
      // maximum values
      'max375px' : {'max' : '375px'},
      'max390px' : {'max' : '390px'},
      'max554px' : {'max' : '554px'},
      'max709px' : {'max' : '709px'},
      'max990px' : {'max' : '990px'},
      'max1279px' : {'max' : '1279px'},
      'max1366px' : {'max' : '1366px'},
      'max1600px' : {'max' : '1600px'},
    },
    important: true,
    colors: {
      foreground: {
        DEFAULT: 'rgb(0, 0, 0)',
        dark: 'rgb(255, 255, 255)',
      },
      background: {
        DEFAULT: 'rgb(255, 255, 255)',
        dark: 'rgb(0, 0, 0)',
      },
      grid: {
        bg: {
          DEFAULT: 'rgb(255, 255, 255)',
          dark: 'rgb(36, 36, 38)',
        },
        cardHoverColor: {
          DEFAULT: 'rgb(251, 242, 220)',
          dark: 'rgb(46, 44, 32)',
        },
        cardBoxShadow: '0 0 15px -5px rgba(0, 0, 0, 0.1)',
        sectionHeadingGradient: {
          DEFAULT: 'linear-gradient(-225deg, #c69e00 0%, #fff93e 29%, #ffd013 67%, #cdc601 100%)',
          dark: 'linear-gradient(-225deg, #231557 0%, #44107a 29%, #ff1361 67%, #fff800 100%)',
        },
      },
      btnBgColor: {
        DEFAULT: 'rgb(245, 245, 180)',
        dark: 'rgb(0, 0, 0)',
      },
      menuNavBoxShadow: {
        DEFAULT: '-2px 2px 70px -25px rgba(0, 0, 0, 0.3)',
        dark: '-2px 2px 70px -25px rgba(255, 255, 255, 0.3)',
      },
      btnGradient: {
        DEFAULT: 'linear-gradient(90deg, #B100C0 0%, #0048D3 100%)',
      },
      mobileMenuBg: {
        DEFAULT: 'rgb(239, 239, 239)',
        dark: 'rgb(18, 18, 18)',
      },
      filterValue: {
        DEFAULT: 'brightness(0) invert(0)',
        dark: 'brightness(0) invert(1)',
      },
      neutralWhite: {
        DEFAULT: 'rgb(255, 255, 255)',
      },
      navItemHoverBg: {
        DEFAULT: 'rgb(236, 241, 246)',
        dark: 'rgb(6, 14, 25)',
      },
      blogs: {
        cloudComputing: {
          DEFAULT: 'rgb(231, 245, 255)',
          dark: 'rgb(27, 34, 40)',
        },
        microsoft365: {
          DEFAULT: 'rgb(250, 255, 234)',
          dark: 'rgb(56, 59, 41)',
        },
        cyberSecurity: {
          DEFAULT: 'rgb(251, 241, 255)',
          dark: 'rgb(33, 13, 41)',
        },
        migrations: {
          DEFAULT: 'rgb(239, 255, 253)',
          dark: 'rgb(23, 42, 40)',
        },
      },
      newsletterSection: {
        DEFAULT: 'rgb(251, 241, 255)',
        dark: 'rgb(33, 13, 41)',
      },
      backgroundCertificationSection: {
        DEFAULT: 'rgb(206, 255, 249)',
        dark: 'rgb(3, 27, 25)',
      },
    },
  },
  plugins: [],
}
export default config
