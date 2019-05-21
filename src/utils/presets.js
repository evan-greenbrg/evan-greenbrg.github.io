const colors = require(`./colors`).default

module.exports = {
    colors,
    mq: {
        mobile: `@media (min-width: 400px)`,
        phablet: `@media (min-width: 500px)`,
        tablet: `@media (min-width: 750px)`,
        desktop: `@media (min-width: 1000px)`,
        xl: `@media (min-width: 1200px)`,
        xxl: `@media (min-width: 1600px)`,
    },
    animation: {
        curveDefault: `cubix-bezier(0.4, 0, 0.2, 1)`,
        curveExpo: `cubix-bezier(.17 .67 .83 .67)`,
        speedDefault: `200ms`,
        speedFast: `100ms`,
        speedSlow: `350ms`,
    },
    elevation: {
        raised: 10,
        overlay: 20,
    },
    gutter: {
		vertical: `14%`,
		horizontal: `25%`,
    },
    offset: `100vw`,
    offsetXxl: `100rem`,
}

