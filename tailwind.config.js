/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
    content: ['./src/**/*.{js,jsx}'],
    darkMode: 'class',
    plugins: [require('@tailwindcss/typography')],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-poppins)', ...fontFamily.sans],
                serif: ['var(--font-silkscreen)', ...fontFamily.serif],
            },
            colors: {
                'primary': {
                    DEFAULT: '#1B6170',
                    '50': '#C4E9F1',
                    '100': '#AADFEA',
                    '200': '#74CBDE',
                    '300': '#3FB7D1',
                    '400': '#288FA5',
                    '500': '#1B6170',
                    '600': '#164F5B',
                    '700': '#113D47',
                    '800': '#0C2C32',
                    '900': '#071A1E'
                },
                'accent': {
                    DEFAULT: '#F97316',
                    '50': '#FEDFC9',
                    '100': '#FDD3B5',
                    '200': '#FCBB8D',
                    '300': '#FBA366',
                    '400': '#FA8B3E',
                    '500': '#F97316',
                    '600': '#F46806',
                    '700': '#E05F06',
                    '800': '#CD5705',
                    '900': '#B94E05'
                },
                'neutral': {
                    DEFAULT: '#303030',
                    '50': '#F4F4F4',
                    '100': '#E8E8E8',
                    '200': '#D1D1D1',
                    '300': '#BABABA',
                    '400': '#A3A3A3',
                    '500': '#8C8C8C',
                    '600': '#757575',
                    '700': '#5E5E5E',
                    '800': '#474747',
                    '900': '#303030'
                },
                'info': {
                    DEFAULT: '#7E2A9F',
                    '50': '#F8E4F6',
                    '100': '#F2CCF0',
                    '200': '#E29CE5',
                    '300': '#CB6CD8',
                    '400': '#AE3BCB',
                    '500': '#7E2A9F',
                    '600': '#602383',
                    '700': '#451B66',
                    '800': '#2D144A',
                    '900': '#190C2E'
                },
                'success': {
                    DEFAULT: '#72E87E',
                    '50': '#E8FBEA',
                    '100': '#DBF9DE',
                    '200': '#C1F5C6',
                    '300': '#A7F1AE',
                    '400': '#8CEC96',
                    '500': '#72E87E',
                    '600': '#53E362',
                    '700': '#35DE46',
                    '800': '#22CD33',
                    '900': '#1CAF2B'
                },
                'caution': {
                    DEFAULT: '#FFC757',
                    '50': '#FFF5E0',
                    '100': '#FFF0D1',
                    '200': '#FFE5B3',
                    '300': '#FFDB94',
                    '400': '#FFD175',
                    '500': '#FFC757',
                    '600': '#FFBE3D',
                    '700': '#FFB624',
                    '800': '#FFAD0A',
                    '900': '#F0A000'
                },
                'warning': {
                    DEFAULT: '#F97316',
                    '50': '#FEDFC9',
                    '100': '#FDD3B5',
                    '200': '#FCBB8D',
                    '300': '#FBA366',
                    '400': '#FA8B3E',
                    '500': '#F97316',
                    '600': '#F46806',
                    '700': '#E05F06',
                    '800': '#CD5705',
                    '900': '#B94E05'
                },
                'danger': {
                    DEFAULT: '#C70035',
                    '50': '#FFD1DD',
                    '100': '#FFBDCE',
                    '200': '#FF94B0',
                    '300': '#FF6B93',
                    '400': '#FF4275',
                    '500': '#FF1A57',
                    '600': '#F00040',
                    '700': '#C70035',
                    '800': '#A3002C',
                    '900': '#800022'
                },
            },
        },
        fontSize: {
            xs: ['0.8125rem', {lineHeight: '1.5rem'}],
            sm: ['0.875rem', {lineHeight: '1.5rem'}],
            base: ['1rem', {lineHeight: '1.75rem'}],
            lg: ['1.125rem', {lineHeight: '1.75rem'}],
            xl: ['1.25rem', {lineHeight: '2rem'}],
            '2xl': ['1.5rem', {lineHeight: '2rem'}],
            '3xl': ['1.875rem', {lineHeight: '2.25rem'}],
            '4xl': ['2rem', {lineHeight: '2.5rem'}],
            '5xl': ['3rem', {lineHeight: '3.5rem'}],
            '6xl': ['3.75rem', {lineHeight: '1'}],
            '7xl': ['4.5rem', {lineHeight: '1'}],
            '8xl': ['6rem', {lineHeight: '1'}],
            '9xl': ['8rem', {lineHeight: '1'}],
        },
        typography: (theme) => ({
            invert: {
                css: {
                    '--tw-prose-body': 'var(--tw-prose-invert-body)',
                    '--tw-prose-headings': 'var(--tw-prose-invert-headings)',
                    '--tw-prose-links': 'var(--tw-prose-invert-links)',
                    '--tw-prose-links-hover': 'var(--tw-prose-invert-links-hover)',
                    '--tw-prose-underline': 'var(--tw-prose-invert-underline)',
                    '--tw-prose-underline-hover':
                        'var(--tw-prose-invert-underline-hover)',
                    '--tw-prose-bold': 'var(--tw-prose-invert-bold)',
                    '--tw-prose-counters': 'var(--tw-prose-invert-counters)',
                    '--tw-prose-bullets': 'var(--tw-prose-invert-bullets)',
                    '--tw-prose-hr': 'var(--tw-prose-invert-hr)',
                    '--tw-prose-quote-borders': 'var(--tw-prose-invert-quote-borders)',
                    '--tw-prose-captions': 'var(--tw-prose-invert-captions)',
                    '--tw-prose-code': 'var(--tw-prose-invert-code)',
                    '--tw-prose-code-bg': 'var(--tw-prose-invert-code-bg)',
                    '--tw-prose-pre-code': 'var(--tw-prose-invert-pre-code)',
                    '--tw-prose-pre-bg': 'var(--tw-prose-invert-pre-bg)',
                    '--tw-prose-pre-border': 'var(--tw-prose-invert-pre-border)',
                    '--tw-prose-th-borders': 'var(--tw-prose-invert-th-borders)',
                    '--tw-prose-td-borders': 'var(--tw-prose-invert-td-borders)',
                },
            },
            DEFAULT: {
                css: {
                    '--tw-prose-body': theme('colors.zinc.600'),
                    '--tw-prose-headings': theme('colors.zinc.900'),
                    '--tw-prose-links': theme('colors.teal.500'),
                    '--tw-prose-links-hover': theme('colors.teal.600'),
                    '--tw-prose-underline': theme('colors.teal.500 / 0.2'),
                    '--tw-prose-underline-hover': theme('colors.teal.500'),
                    '--tw-prose-bold': theme('colors.zinc.900'),
                    '--tw-prose-counters': theme('colors.zinc.900'),
                    '--tw-prose-bullets': theme('colors.zinc.900'),
                    '--tw-prose-hr': theme('colors.zinc.100'),
                    '--tw-prose-quote-borders': theme('colors.zinc.200'),
                    '--tw-prose-captions': theme('colors.zinc.400'),
                    '--tw-prose-code': theme('colors.zinc.700'),
                    '--tw-prose-code-bg': theme('colors.zinc.300 / 0.2'),
                    '--tw-prose-pre-code': theme('colors.zinc.100'),
                    '--tw-prose-pre-bg': theme('colors.zinc.900'),
                    '--tw-prose-pre-border': 'transparent',
                    '--tw-prose-th-borders': theme('colors.zinc.200'),
                    '--tw-prose-td-borders': theme('colors.zinc.100'),

                    '--tw-prose-invert-body': theme('colors.zinc.400'),
                    '--tw-prose-invert-headings': theme('colors.zinc.200'),
                    '--tw-prose-invert-links': theme('colors.teal.400'),
                    '--tw-prose-invert-links-hover': theme('colors.teal.400'),
                    '--tw-prose-invert-underline': theme('colors.teal.400 / 0.3'),
                    '--tw-prose-invert-underline-hover': theme('colors.teal.400'),
                    '--tw-prose-invert-bold': theme('colors.zinc.200'),
                    '--tw-prose-invert-counters': theme('colors.zinc.200'),
                    '--tw-prose-invert-bullets': theme('colors.zinc.200'),
                    '--tw-prose-invert-hr': theme('colors.zinc.700 / 0.4'),
                    '--tw-prose-invert-quote-borders': theme('colors.zinc.500'),
                    '--tw-prose-invert-captions': theme('colors.zinc.500'),
                    '--tw-prose-invert-code': theme('colors.zinc.300'),
                    '--tw-prose-invert-code-bg': theme('colors.zinc.200 / 0.05'),
                    '--tw-prose-invert-pre-code': theme('colors.zinc.100'),
                    '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 0.4)',
                    '--tw-prose-invert-pre-border': theme('colors.zinc.200 / 0.1'),
                    '--tw-prose-invert-th-borders': theme('colors.zinc.700'),
                    '--tw-prose-invert-td-borders': theme('colors.zinc.800'),

                    // Base
                    color: 'var(--tw-prose-body)',
                    lineHeight: theme('lineHeight.7'),
                    '> *': {
                        marginTop: theme('spacing.10'),
                        marginBottom: theme('spacing.10'),
                    },
                    p: {
                        marginTop: theme('spacing.7'),
                        marginBottom: theme('spacing.7'),
                    },

                    // Headings
                    'h2, h3': {
                        color: 'var(--tw-prose-headings)',
                        fontWeight: theme('fontWeight.semibold'),
                    },
                    h2: {
                        fontSize: theme('fontSize.xl')[0],
                        lineHeight: theme('lineHeight.7'),
                        marginTop: theme('spacing.20'),
                        marginBottom: theme('spacing.4'),
                    },
                    h3: {
                        fontSize: theme('fontSize.base')[0],
                        lineHeight: theme('lineHeight.7'),
                        marginTop: theme('spacing.16'),
                        marginBottom: theme('spacing.4'),
                    },
                    ':is(h2, h3) + *': {
                        marginTop: 0,
                    },

                    // Images
                    img: {
                        borderRadius: theme('borderRadius.3xl'),
                    },

                    // Inline elements
                    a: {
                        color: 'var(--tw-prose-links)',
                        fontWeight: theme('fontWeight.semibold'),
                        textDecoration: 'underline',
                        textDecorationColor: 'var(--tw-prose-underline)',
                        transitionProperty: 'color, text-decoration-color',
                        transitionDuration: theme('transitionDuration.150'),
                        transitionTimingFunction: theme('transitionTimingFunction.in-out'),
                    },
                    'a:hover': {
                        color: 'var(--tw-prose-links-hover)',
                        textDecorationColor: 'var(--tw-prose-underline-hover)',
                    },
                    strong: {
                        color: 'var(--tw-prose-bold)',
                        fontWeight: theme('fontWeight.semibold'),
                    },
                    code: {
                        display: 'inline-block',
                        color: 'var(--tw-prose-code)',
                        fontSize: theme('fontSize.sm')[0],
                        fontWeight: theme('fontWeight.semibold'),
                        backgroundColor: 'var(--tw-prose-code-bg)',
                        borderRadius: theme('borderRadius.lg'),
                        paddingLeft: theme('spacing.1'),
                        paddingRight: theme('spacing.1'),
                    },
                    'a code': {
                        color: 'inherit',
                    },
                    ':is(h2, h3) code': {
                        fontWeight: theme('fontWeight.bold'),
                    },

                    // Quotes
                    blockquote: {
                        paddingLeft: theme('spacing.6'),
                        borderLeftWidth: theme('borderWidth.2'),
                        borderLeftColor: 'var(--tw-prose-quote-borders)',
                        fontStyle: 'italic',
                    },

                    // Figures
                    figcaption: {
                        color: 'var(--tw-prose-captions)',
                        fontSize: theme('fontSize.sm')[0],
                        lineHeight: theme('lineHeight.6'),
                        marginTop: theme('spacing.3'),
                    },
                    'figcaption > p': {
                        margin: 0,
                    },

                    // Lists
                    ul: {
                        listStyleType: 'disc',
                    },
                    ol: {
                        listStyleType: 'decimal',
                    },
                    'ul, ol': {
                        paddingLeft: theme('spacing.6'),
                    },
                    li: {
                        marginTop: theme('spacing.6'),
                        marginBottom: theme('spacing.6'),
                        paddingLeft: theme('spacing[3.5]'),
                    },
                    'li::marker': {
                        fontSize: theme('fontSize.sm')[0],
                        fontWeight: theme('fontWeight.semibold'),
                    },
                    'ol > li::marker': {
                        color: 'var(--tw-prose-counters)',
                    },
                    'ul > li::marker': {
                        color: 'var(--tw-prose-bullets)',
                    },
                    'li :is(ol, ul)': {
                        marginTop: theme('spacing.4'),
                        marginBottom: theme('spacing.4'),
                    },
                    'li :is(li, p)': {
                        marginTop: theme('spacing.3'),
                        marginBottom: theme('spacing.3'),
                    },

                    // Horizontal rules
                    hr: {
                        marginTop: theme('spacing.20'),
                        marginBottom: theme('spacing.20'),
                        borderTopWidth: '1px',
                        borderColor: 'var(--tw-prose-hr)',
                        '@screen lg': {
                            marginLeft: `calc(${theme('spacing.12')} * -1)`,
                            marginRight: `calc(${theme('spacing.12')} * -1)`,
                        },
                    },

                    // Tables
                    table: {
                        width: '100%',
                        tableLayout: 'auto',
                        textAlign: 'left',
                        fontSize: theme('fontSize.sm')[0],
                    },
                    thead: {
                        borderBottomWidth: '1px',
                        borderBottomColor: 'var(--tw-prose-th-borders)',
                    },
                    'thead th': {
                        color: 'var(--tw-prose-headings)',
                        fontWeight: theme('fontWeight.semibold'),
                        verticalAlign: 'bottom',
                        paddingBottom: theme('spacing.2'),
                    },
                    'thead th:not(:first-child)': {
                        paddingLeft: theme('spacing.2'),
                    },
                    'thead th:not(:last-child)': {
                        paddingRight: theme('spacing.2'),
                    },
                    'tbody tr': {
                        borderBottomWidth: '1px',
                        borderBottomColor: 'var(--tw-prose-td-borders)',
                    },
                    'tbody tr:last-child': {
                        borderBottomWidth: 0,
                    },
                    'tbody td': {
                        verticalAlign: 'baseline',
                    },
                    tfoot: {
                        borderTopWidth: '1px',
                        borderTopColor: 'var(--tw-prose-th-borders)',
                    },
                    'tfoot td': {
                        verticalAlign: 'top',
                    },
                    ':is(tbody, tfoot) td': {
                        paddingTop: theme('spacing.2'),
                        paddingBottom: theme('spacing.2'),
                    },
                    ':is(tbody, tfoot) td:not(:first-child)': {
                        paddingLeft: theme('spacing.2'),
                    },
                    ':is(tbody, tfoot) td:not(:last-child)': {
                        paddingRight: theme('spacing.2'),
                    },
                },
            },
        }),
    },
}
