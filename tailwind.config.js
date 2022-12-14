const defaultTheme = require("tailwindcss/defaultTheme");

const scale = {
	"3xs": "0.146rem",
	"2xs": "0.236rem",
	xs: "0.382rem",
	sm: "0.618rem",
	base: "1rem",
	md: "1.618rem",
	lg: "2.618rem",
	xl: "4.236rem",
	"2xl": "6.854rem",
};

const colors = require("tailwindcss/colors");

module.exports = {
	content: ["./public/**/*.html", "./src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}"],
	important: true,
	theme: {
		borderColor: (theme) => ({
			...theme("colors"),
			default: theme("colors.black", "currentColor"),
		}),
		inset: (theme, { negative }) => ({
			...theme("spacing"),
			...negative(theme("spacing")),
			0: "0",
			auto: "auto",
		}),
		extend: {
			borderRadius: {
				xl: ".75rem",
			},
			colors: {
				body: colors.stone[800],
				highlight: colors.amber[600],
				highlight2: colors.orange[500],
			},
			spacing: scale,
			fontFamily: {
				display: ["superclarendon", ...defaultTheme.fontFamily.serif],
				sans: ["trade-gothic-next", ...defaultTheme.fontFamily.sans],
			},
			fontSize: {
				"3xs": "0.5rem",
				"2xs": "0.625rem",
				"7xl": "5rem",
				"8xl": "6rem",
				"9xl": "7rem",
			},
			typography: (theme) => ({
				DEFAULT: {
					css: {
						color: colors.stone[800],
						a: {
							color: colors.amber[600],
							"&:hover": {
								color: colors.orange[500],
							},
						},
						h1: {
							fontFamily: 'superclarendon, ui-serif, Georgia, Cambria, "Times New Roman", Times, serif !important',
							fontWeight: 700,
						},
						h2: {
							fontFamily: 'superclarendon, ui-serif, Georgia, Cambria, "Times New Roman", Times, serif !important',
							fontWeight: 700,
						},
					},
				},
			}),
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
