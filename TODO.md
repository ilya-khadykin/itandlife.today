This document is to track things I need to fix/implement on my blog. I need to migrate to GitHub issues at some point.

# Organization
- [ ] move all `TODO`s from this file to GitHub issues

# Bugs
- [ ] there might be a problem with `sortedBlogPost()` or `pagination` in `blog.tsx` when the same articles
  are displayed in different places (discovered it by copying the same post 3 times and one of its copies appears
  at the bottom of all posts instead of being displayed alongside the previous two)
- [ ] pagination does not work correctly, the same posts are shown on two pages

# TODOs and future features
MUST do issues:
- [ ] Add better description for website, its title and author bio in `/about` page

Not prioritized:
- [ ] [Setup budget alerts for GCP project used by Firebase Hosting](https://firebase.google.com/docs/projects/billing/avoid-surprise-bills#set-up-budget-alert-emails)
- [ ] [Connect deployed website to Firebase web app to get analytics data](https://firebase.google.com/docs/web/setup)
- [ ] Add recommendation card and update `/blog/windows/chocolatey-real-time-saver-for-software-management-on-windows`
  post to use it in the end
- [ ] Make images clickable in the post to show them in their full size on click
- [ ] Remove link to tags page from the header and display it only for the blog
- [ ] Add links to RSS for each tag on the respective tag page
- [ ] Add `/projects` page
- [ ] Post tags should be displayed under blog post title
- [ ] Move `footer` for `PostLayout` (set as default) to the right (use `PostSimple` layout as a workaround for now)
- [ ] Remove `Discuss on Twitter` link from `PostLayout`
- [ ] Improve tag page for SEO and
- [ ] support for subscribing to particular tags
- [ ] TOC for blog posts
- [ ] page views count
- [ ] post read time
- [ ] Add a link to About page for the author in `PostLayout` template
- [ ] Add links to other social media sites (`TODO(social_media)`)
- [ ] Consider open source the blog (`TODO(open_source_blog)`)
- [ ] Add Google Analytics to the website (`TODO(add_ga)`)
- [ ] Add subscribe to newsletter form (`TODO(add_newsletter)`)
- [ ] Add comments to blog posts (`TODO(add_comments)`)
- [ ] Update blog list page layout for large screens to include post main image
- [ ] Track usage of `<Head>` tags and include `keys` to avoid duplication of tags