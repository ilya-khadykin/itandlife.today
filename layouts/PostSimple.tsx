import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import { BlogSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import formatDate from '@/lib/utils/formatDate'
//import Comments from '@/components/comments'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import { CoreContent } from '@/lib/utils/contentlayer'
import { ReactNode } from 'react'
import type { Blog } from 'contentlayer/generated'
import Tag from '@/components/Tag'

interface Props {
  content: CoreContent<Blog>
  children: ReactNode
  next?: { slug: string; title: string }
  prev?: { slug: string; title: string }
}

export default function PostLayout({ content, next, prev, children }: Props) {
  const { slug, date, title, tags } = content

  return (
    <SectionContainer>
      <BlogSEO url={`${siteMetadata.siteUrl}/blog/${slug}`} {...content} />
      <ScrollTopAndComment />
      <article>
        <div>
          <header>
            <div className="space-y-1 border-b border-gray-200 pb-5 text-center dark:border-gray-700">
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
              <dl>
                <div>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                    <time dateTime={date}>{formatDate(date)}</time>
                  </dd>
                </div>
              </dl>
            </div>
          </header>
          <div className="flex flex-wrap border-b border-gray-200 py-2.5 dark:border-gray-700">
            <span className="mr-1.5 text-sm font-medium">Tags:</span>
            {tags.map((tag) => (
              <Tag key={tag} text={tag} />
            ))}
          </div>
          <div
            className="divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:divide-y-0 "
            style={{ gridTemplateRows: 'auto 1fr' }}
          >
            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
              <div className="prose max-w-none pt-2.5 pb-8 dark:prose-dark">{children}</div>
            </div>
            {/*
            // TODO(add_comments): add comments to the website (maybe Github issues comments?)
            <Comments frontMatter={content} />
            */}
            <footer>
              <div className="flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base">
                {prev && (
                  <div className="pt-4 xl:pt-8">
                    <Link
                      href={`/blog/${prev.slug}`}
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    >
                      &larr; {prev.title}
                    </Link>
                  </div>
                )}
                {next && (
                  <div className="pt-4 xl:pt-8">
                    <Link
                      href={`/blog/${next.slug}`}
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    >
                      {next.title} &rarr;
                    </Link>
                  </div>
                )}
              </div>
            </footer>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
