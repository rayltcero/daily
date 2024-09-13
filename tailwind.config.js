// tailwind.config.js
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{css,xml,html,vue,svelte,ts,tsx}'],
  // use the .ns-dark class to control dark mode (applied by NativeScript) - since 'media' (default) is not supported.
  darkMode: ['class', '.ns-dark'],
  theme: {
    fontFamily: {
      serif: ['Playfair Display', 'PlayfairDisplay-Regular', 'PlayfairDisplay-Bold', 'Playfair Display Medium', 'PlayfairDisplay-Medium'],
      sans: ['Montserrat', 'Montserrat-Regular', 'Montserrat Thin', 'Montserrat-Thin', 'Montserrat Medium', 'Montserrat-Medium', 'Montserrat-Bold'],
    },
    extend: {
      colors: {
        'primary': '#EDF2F4',
        'secondary': '#2B2D42',
        'accent': '#8D99AE'
      }

    },
  },
  plugins: [
    /**
     * A simple inline plugin that adds the ios: and android: variants
     *
     * Example usage:
     *
     *   <Label class="android:text-red-500 ios:text-blue-500" />
     *
     */
    plugin(function ({ addVariant }) {
      addVariant('android', '.ns-android &')
      addVariant('ios', '.ns-ios &')
    }),
  ],
  corePlugins: {
    preflight: false, // disables browser-specific resets
  },
}
