import type { Config } from 'tailwindcss'

const config: Config = {
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
  },
  plugins: [],
}
export default config
