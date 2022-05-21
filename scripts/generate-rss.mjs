import { writeFileSync, mkdirSync } from 'fs'
import path from 'path'
import GithubSlugger from 'github-slugger'
import { escape } from './htmlEscaper.mjs'
import siteMetadata from '../data/siteMetadata.js'
import { allBlogs } from '../.contentlayer/generated/index.mjs'

const generateRssItem = (post) => `
  <item>
    <guid>${siteMetadata.siteUrl}/blog/${post.slug}</guid>
    <title>${escape(post.title)}</title>
    <link>${siteMetadata.siteUrl}/blog/${post.slug}</link>
    ${post.summary && `<description>${escape(post.summary)}</description>`}
    <pubDate>${new Date(post.date).toUTCString()}</pubDate>
    <author>${siteMetadata.email} (${siteMetadata.author})</author>
    ${post.tags && post.tags.map((t) => `<category>${t}</category>`).join('')}
  </item>
`

const generateRss = (posts, page = 'generated/rss/feed.xml') => `
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>${escape(siteMetadata.title)}</title>
      <link>${siteMetadata.siteUrl}/blog</link>
      <description>${escape(siteMetadata.description)}</description>
      <language>${siteMetadata.language}</language>
      <managingEditor>${siteMetadata.email} (${siteMetadata.author})</managingEditor>
      <webMaster>${siteMetadata.email} (${siteMetadata.author})</webMaster>
      <lastBuildDate>${new Date(posts[0].date).toUTCString()}</lastBuildDate>
      <atom:link href="${siteMetadata.siteUrl}/${page}" rel="self" type="application/rss+xml"/>
      ${posts.map(generateRssItem).join('')}
    </channel>
  </rss>
`

export function dateSortDesc(a, b) {
  if (a > b) return -1
  if (a < b) return 1
  return 0
}

// TODO: refactor into contentlayer once compute over all docs is enabled
export async function getAllTags() {
  const tagCount = {}
  // Iterate through each post, putting all found tags into `tags`
  allBlogs.filter((post) => !post.draft).forEach((file) => {
    if (file.tags && file.draft !== true) {
      file.tags.forEach((tag) => {
        const formattedTag = GithubSlugger.slug(tag)
        if (formattedTag in tagCount) {
          tagCount[formattedTag] += 1
        } else {
          tagCount[formattedTag] = 1
        }
      })
    }
  })

  return tagCount
}

async function generate() {
  // RSS for all blog posts
  const allNoneDraftPosts = allBlogs.filter((post) => !post.draft);
  if (allNoneDraftPosts.length > 0) {
    const rss = generateRss(allNoneDraftPosts.sort((a, b) => dateSortDesc(a.date, b.date)))
    const rssPath = path.join('public', 'generated', 'rss')
    mkdirSync(rssPath, { recursive: true })
    writeFileSync('./public/generated/rss/feed.xml', rss)
  }

  // RSS for tags
  // TODO: use AllTags from contentlayer when computed docs is ready
  if (allNoneDraftPosts.length > 0) {
    const tags = await getAllTags()
    for (const tag of Object.keys(tags)) {
      const filteredPosts = allNoneDraftPosts.filter(
        (post) => post.tags.map((t) => GithubSlugger.slug(t)).includes(tag)
      )
      const tagRss = generateRss(filteredPosts, `generated/rss/tags/${tag}/feed.xml`)
      const tagRssPath = path.join('public', 'generated', 'rss', 'tags', tag)
      mkdirSync(tagRssPath, { recursive: true })
      writeFileSync(path.join(tagRssPath, 'feed.xml'), tagRss)
    }
  }
}

generate()
