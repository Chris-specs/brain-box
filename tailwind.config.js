module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            borderWidth: {
                3: '3px',
            },
            keyframes: {
                'fade-left': {
                    '0%': {
                        opacity: '0',
                        // transform: 'translateX(200px)',
                    },
                    '50%': {
                        opacity: '0',
                    },
                    '100%': {
                        opacity: '1',
                        // transform: 'translateX(0)',
                    },
                },
            },
            animation: {
                'fade-left': 'fade-left 0.3s normal',
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
};
