module.exports = {
  siteMetadata: {
    title: `EG`,
    description: `This is a site`,
    author: `@ev.bennett`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
	`gatsby-transformer-json`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-emotion`,
    {
          resolve: `gatsby-mdx`,
          options: {
              gatsbyRemarkPlugins: [
                  {
                      resolve: "gatsby-remark-images",
                      options: {
                          maxWidth: 500
                      }
                  }
              ]
          }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
		ignore: [`**/\.*`], 
      },
    },
	{
      resolve: `gatsby-transformer-remark`,
	  options: {
	  	plugins: [
			{
				resolve: `gatsby-remark-images`,
				options: {
					maxWidth: 300,
                    showCaptions: true,
				},
			},
		],
	  },
	},
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/rock_icon.jpg`, // This path is relative to the root of the site.
      },
    },
    {
        resolve: `gatsby-plugin-typography`,
        options: {
            pathToConfigModule: `src/utils/typography`,
        },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
