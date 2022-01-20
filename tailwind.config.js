const plugin = require('tailwindcss/plugin');

module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                'gray-brand' : '#111317'
            },
            borderWidth: {
                3: '3px',
            },
            keyframes: {
                'fade-up': {
                    '0%': {
                        // opacity: '0',
                        transform: 'translateY(200px)',
                    },
                    '50%': {
                        // opacity: '0',
                    },
                    '100%': {
                        // opacity: '1',
                        transform: 'translateY(0)',
                    },
                },
            },
            animation: {
                'fade-up': 'fade-up 0.15s normal',
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        plugin(function ({ addUtilities }) {
            addUtilities({
                '.scrollbar-hidden': {
                    '-ms-overflow-style': 'none',
                    'scrollbar-width': 'none',
                },
                '.scrollbar-hidden::-webkit-scrollbar': {
                    display: 'none',
                },
            });
        }),
    ],
};
