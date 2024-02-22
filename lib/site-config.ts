import * as types from './types'

export interface SiteConfig {
  rootNotionPageId: string
  rootNotionSpaceId?: string

  name: string
  domain: string
  author: string
  description?: string
  language?: string

  twitter?: string
  github?: string
  linkedin?: string
  newsletter?: string
  youtube?: string
  zhihu?: string
  mastodon?: string
  resume?: string
  google?: string
  email?: string

  defaultPageIcon?: string | null
  defaultPageCover?: string | null
  defaultPageCoverPosition?: number | null

  isPreviewImageSupportEnabled?: boolean
  isTweetEmbedSupportEnabled?: boolean
  isRedisEnabled?: boolean
  isSearchEnabled?: boolean

  includeNotionIdInUrls?: boolean
  pageUrlOverrides?: types.PageUrlOverridesMap
  pageUrlAdditions?: types.PageUrlOverridesMap

  navigationStyle?: types.NavigationStyle
  navigationLinks?: Array<NavigationLink>
}

export interface NavigationLink {
  title: string
  pageId?: string
  url?: string
}

export const siteConfig = (config: {
  resume: string
  github: string
  defaultPageIcon: null
  navigationStyle: string
  author: string
  pageUrlOverrides: {
    '/blog': string
    '/about': string
    '/publications': string
    '/contact': string
  }
  description: string
  google: string
  linkedin: string
  defaultPageCoverPosition: number
  defaultPageCover: null
  isPreviewImageSupportEnabled: boolean
  navigationLinks: (
    | { title: string; pageId: string }
    | { title: string; pageId: string }
    | {
        title: string
        pageId: string
      }
    | { title: string; pageId: string }
  )[]
  rootBlogPageId: string
  isRedisEnabled: boolean
  domain: string
  name: string
  rootNotionSpaceId: null
  email: string
  rootNotionPageId: string
}): SiteConfig => {
  return config
}
