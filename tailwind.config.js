
   module.exports = {
    purge: [],
    darkMode: 'class', // false or 'media' or 'class'
    theme: {
      colors: {
        simplecyto:{
          primary:'#5969F3',
          secondary:'#012A70',
          ternairy:'#444444'
        },
        transparent: 'transparent',
        current: 'currentColor',
        midnight: '#2A343E',
        white: '#FFFFFF',
        licorice: '#2E3945',
        catalina_blue: '#243B56',
        blue_charcoal: '#1F2933',
        nepal: '#8EA5BA',
        slate_grey: '#72808C',
        primary: {
          common: '#025E73',
          gray: '#CFD8D8',
        },
        primary_dark: {
          common: '#347E8F',
          gray: '#38424D',
        },
        signal: {
          green: '#37B062',
          orange: '#FF9100',
          red: '#E21A1A',
        },
        signal_dark: {
          red: '#FF5C5C',
        },
        chargestation: {
          selected: '#09B2B2',
          fast: '#532C80',
          fast_second: '#291640',
          normal: '#9573BD',
          slow: '#C2AFD9',
          tariff: '#EFEBF5',
          tariff_dark: '#474649',
          activePlugsPrimary: '#394E66',
          activePlugsSecondary: '#BCC3C4',
          inactivePlugsPrimary: '#C6C6C6',
          inactivePlugsSecondary: '#EDEDED',
        },
      },
      textColor: theme => ({
        simplecyto_primary:theme('colors').simplecyto.primary,
        simplecyto_secondary:theme('colors').simplecyto.secondary,
        simplecyto_ternairy:theme('colors').simplecyto.ternairy,
        white: theme('colors').white,
        primary: theme('colors').catalina_blue,
        primary_dark: '#DDDDDD',
        secondary: '#4F7690',
        secondary_dark: '#AFC0D0',
        summer_sky: '#329FCF',
        tertiary: theme('colors').nepal,
        tertiary_dark: theme('colors').slate_grey,
        signal: theme('colors').signal,
        signal_dark: theme('colors').signal_dark,
        button: theme('colors').primary,
        button_dark: theme('colors').primary_dark,
        icon: {
          primary: theme('colors').white,
          secondary: theme('colors').nepal,
        },
        icon_dark: {
          primary: theme('colors').midnight,
          secondary: theme('colors').slate_grey,
        },
        section: theme('colors').primary,
        section_dark: theme('colors').primary_dark,
        chargestation: theme('colors').chargestation,
        gray: theme('colors').primary.gray,
        gray_dark: theme('colors').primary_dark.gray,
      }),
      backgroundColor: theme => ({
        write:theme('colors').write,
        simplecyto_primary:theme('colors').simplecyto.primary,
        simplecyto_secondary:theme('colors').simplecyto.secondary,
        simplecyto_ternairy:theme('colors').simplecyto.ternairy,
        transparent: theme('colors').transparent,
        current: theme('colors').current,
        primary: theme('colors').primary,
        primary_dark: theme('colors').primary_dark,
        tertiary: theme('colors').nepal,
        tertiary_dark: theme('colors').slate_grey,
        signal: theme('colors').signal,
        signal_dark: theme('colors').signal_dark,
        common: '#FCFBFC',
        fringy_flower: '#AFDFC0',
        common_dark: theme('colors').blue_charcoal,
        card: {
          primary: theme('colors').white,
          secondary: '#FCFCFC',
        },
        card_dark: {
          primary: theme('colors').midnight,
          secondary: theme('colors').licorice,
        },
        search_input: theme('colors').white,
        search_input_dark: theme('colors').licorice,
        overlay: theme('colors').catalina_blue,
        overlay_dark: '#0C1014',
        search_section: { common: '#B3CED5' },
        search_section_dark: { common: '#00252E' },
        footer: '#F1F8F6',
        footer_dark: theme('colors').blue_charcoal,
        icon: theme('textColor').icon,
        icon_dark: theme('textColor').icon_dark,
        chargestation: theme('colors').chargestation,
      }),
      placeholderColor: theme => ({
        ...theme('textColor'),
      }),
      extend: {
        fontFamily: {
          body: ['Nunito'],
          chargestation: ['Oswald'],
        },
        borderRadius: {
          small: '0.625rem', // 10px
          medium: '0.9375rem', // 15px
          large: '1.25rem', // 20px
        },
        width: {
          container: '23.4375rem',
          dialog: '21.4375rem',
        },
        maxWidth: {
          container: '23.4375rem',
          dialog: '21.4375rem',
        },
        zIndex: {},
        scale: {
          65: '.65',
          70: '.70',
          80: '.80',
          85: '.85',
        },
        spacing: {
          4.5: '1.125rem',
          5.5: '1.375rem',
          6.5: '1.625rem',
          8.5: '2.125rem',
          10.5: '2.625rem',
          16.5: '4.125rem',
          17: '4.25rem',
          17.5: '4.4375rem',
          18: '4.5rem',
          18.5: '4.625rem',
        },
        strokeWidth: {
          3: '3',
          4: '4',
        },
        typography: theme => ({
          DEFAULT: {
            css: {
              color: theme('textColor.tertiary'),
            },
          },
        }),
      },
  
      screens: {
        portrait: { raw: '(orientation: portrait)' },
        phonelandscape: { raw: '(max-height: 600px) and (orientation: landscape)' },
        bigphone: { raw: '(min-height: 834px) and (orientation: portrait)' },//ancien 641px
        small: { raw: '(min-width: 480px) and (min-height: 600px)' }, //Tablet Small
        smallh: { raw: '(min-width: 480px) and (min-height: 600px) and (max-height: 767px)' }, //Tablet Small Height
        big: '834px', // Tablet Big //ancient 834px
        sbig: '600px', 
        // => @media (min-width: 834px) { ... }
        desk: '1024px', // Desktop
        // => @media (min-width: 1024px) { ... }
        xl: '1280px',
        '2xl': '1536px',
      },
    },
    variants: {
      extend: {
        display: ['odd', 'even', 'last'],
      },
    },
    plugins: [
       require('@tailwindcss/forms'),
      //require('@tailwindcss/typography'),
       require('@tailwindcss/line-clamp'),
       require('@tailwindcss/aspect-ratio'),
       
    ],
  } 