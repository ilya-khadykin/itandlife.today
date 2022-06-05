import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import { ReactNode } from 'react'
import ExportedImage from 'next-image-export-optimizer'

interface Props {
  children: ReactNode
}

const LayoutWrapper = ({ children }: Props) => {
  return (
    <SectionContainer>
      <div className="flex h-screen flex-col justify-between">
        <header className="flex items-center justify-between py-10">
          <div>
            <Link href="/" aria-label={siteMetadata.headerTitle} title="Go to Home page">
              <div className="flex items-center justify-between">
                <div className="mr-3 text-5xl">💻</div>
                <div className="flex-col">
                  <div className="hidden h-6 text-3xl font-bold sm:block">
                    {siteMetadata.headerTitle}
                  </div>
                  <div className="hidden pt-2 sm:block">Programmer's life and modern tech</div>
                </div>
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <a href="/generated/rss/feed.xml" title="Subscribe to RSS feed">
              <ExportedImage
                src="/static/layout/icons/rss-feed-icon.svg"
                width="32px"
                height="32px"
                alt="RSS icon"
              />
            </a>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
