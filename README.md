This is a source code for [ITandLife.today](https://itandlife.today/) - blog about programming and modern tech.

# Technologies
- [NEXT.js](https://nextjs.org/) - The React Framework for Production
- [Tailwind CSS](https://tailwindcss.com/) - a utility-first CSS framework
- [Firebase](https://firebase.google.com/) - deployment platform

# Development

First, run the development server:

```bash
npm start
```

or

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

# Deployment
The website is basically a set of static files and these files are the only thing that should be deployed.

Firebase provides website hosting and steps below assume this choice.

`itandlife-today-website` GCP project is configured to be used by Firebase during deployment.
<br>`out` directory should contain the files to deploy 

More details about Firebase hosting - https://firebase.google.com/docs/hosting

## Steps to deploy
1. Generate static website: `npm run export`
2. Preview the website before deployment: `firebase emulators:start`
3. Deploy to Firebase: `firebase deploy --only hosting`

# Post

## Frontmatter

Frontmatter follows [Hugo's standards](https://gohugo.io/content-management/front-matter/).

Currently 10 fields are supported.

```
title (required)
date (required)
tags (required, can be empty array)
lastmod (optional)
draft (optional)
summary (optional)
images (optional, if none provided defaults to socialBanner in siteMetadata config)
authors (optional list which should correspond to the file names in `data/authors`. Uses `default` if none is specified)
layout (optional list which should correspond to the file names in `data/layouts`)
canonicalUrl (optional, canonical url for the post for SEO)
```

Here's an example of a post's frontmatter:

```
---
title: 'Introducing Tailwind Nexjs Starter Blog'
date: '2021-01-12'
lastmod: '2021-01-18'
tags: ['next-js', 'tailwind', 'guide']
draft: false
summary: 'Looking for a performant, out of the box template, with all the best in web technology to support your blogging needs? Checkout the Tailwind Nextjs Starter Blog template.'
images: ['/static/images/canada/mountains.jpg', '/static/images/canada/toronto.jpg']
authors: ['default', 'sparrowhawk']
layout: PostLayout
canonicalUrl: https://tailwind-nextjs-starter-blog.vercel.app/blog/introducing-tailwind-nextjs-starter-blog
---
```

## Compose

Run `node ./scripts/compose.js` to bootstrap a new post.

Follow the interactive prompt to generate a post with pre-filled front matter.

## Licence

The source code in this repo is a fork from 
[Tailwind Nextjs Starter Blog](https://github.com/timlrx/tailwind-nextjs-starter-blog) developed by 
[Timothy Lin](https://www.timrlx.com) and licenced under 
[MIT](https://github.com/timlrx/tailwind-nextjs-starter-blog/blob/master/LICENSE). 

MIT license terms apply to all of my changes to the original source code.
