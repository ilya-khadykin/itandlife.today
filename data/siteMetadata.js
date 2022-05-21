const siteMetadata = {
  title: 'ITandLife.today', // Website name optimized for SEO
  author: 'Ilya Khadykin', // Used in RSS, SEO and footer
  headerTitle: 'ITandLife.today', // Short website name, usually used as a header
  description: "Programmer's life and modern tech", // Used in RSS and SEO
  language: 'en-us', // Used in RSS
  theme: 'system', // system, dark or light, used by ThemeProvider
  siteUrl: 'https://itandlife.today', // Used for RSS, SEO
  // TODO(open_source_blog): consider open source the blog
  // siteRepo: 'https://github.com/timlrx/tailwind-nextjs-starter-blog', // Used in PostLayout to display an edit link
  siteLogo: '/static/layout/logo.png', // Used for SEO in structured data
  socialBanner: '/static/images/twitter-card.png', // Used for SEO
  // TODO(delete_unused): 'image' does not seem to be used anywhere
  image: '/static/images/avatar.png', // Does not seem to be used
  email: 'mageofit@gmail.com', // Used in RSS and in footer
  github: 'https://github.com/ikhadykin', // Used in footer and on Authors pages
  // TODO(social_media): add links to social media if needed
  //twitter: 'https://twitter.com/Twitter',
  //facebook: 'https://facebook.com',
  //youtube: 'https://youtube.com',
  linkedin: 'https://www.linkedin.com/in/ilya-khadykin/', // Used in footer and on Authors pages
  locale: 'en-US', // Used to format dates as param to toLocaleDateString
  // Used in analytics components `/components/analytics/*`
  // If any of the below values are set, the script will be included to all pages
  // considers process.env.NODE_ENV variable is set to 'production'
  // TODO(add_ga): add Google Analytics to the website
  analytics: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // supports plausible, simpleAnalytics, umami or googleAnalytics
    plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    umamiWebsiteId: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    googleAnalyticsId: '', // e.g. UA-000000-2 or G-XXXXXXX
  },
  // Used in '/components/NewsletterForm.tsx'
  // TODO(add_newsletter): add newsletter to the website
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo, revue
    // Please add your .env file and modify it according to your selection
    provider: 'buttondown',
  },
  // Used in '/components/comments/*'
  // TODO(add_comments): add comments to the website (maybe Github issues comments?)
  comment: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // Select a provider and use the environment variables associated to it
    // https://vercel.com/docs/environment-variables
    provider: 'giscus', // supported providers: giscus, utterances, disqus
    giscusConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://giscus.app/
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      // theme when dark mode
      darkTheme: 'transparent_dark',
      // If the theme option above is set to 'custom`
      // please provide a link below to your custom theme css file.
      // example: https://giscus.app/themes/custom_example.css
      themeURL: '',
    },
    utterancesConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://utteranc.es/
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO,
      issueTerm: '', // supported options: pathname, url, title
      label: '', // label (optional): Comment 💬
      // theme example: github-light, github-dark, preferred-color-scheme
      // github-dark-orange, icy-dark, dark-blue, photon-dark, boxy-light
      theme: '',
      // theme when dark mode
      darkTheme: '',
    },
    disqusConfig: {
      // https://help.disqus.com/en/articles/1717111-what-s-a-shortname
      shortname: process.env.NEXT_PUBLIC_DISQUS_SHORTNAME,
    },
  },
}

module.exports = siteMetadata
