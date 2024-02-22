import * as React from 'react'

import * as types from 'notion-types'
import MenuIcon from '@mui/icons-material/Menu'
import { IconButton } from '@mui/joy'
import Dropdown from '@mui/joy/Dropdown'
import Menu from '@mui/joy/Menu'
import MenuButton from '@mui/joy/MenuButton'
import MenuItem from '@mui/joy/MenuItem'
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles'
import { useMediaQuery } from '@mui/material'
import { IoMoonSharp } from '@react-icons/all-files/io5/IoMoonSharp'
import { IoSunnyOutline } from '@react-icons/all-files/io5/IoSunnyOutline'
import cs from 'classnames'
import { Breadcrumbs, Header, useNotionContext } from 'react-notion-x'

import { navigationLinks, navigationStyle } from '@/lib/config'
import { useDarkMode } from '@/lib/use-dark-mode'

import styles from './styles.module.css'

const ToggleThemeButton = () => {
  const [hasMounted, setHasMounted] = React.useState(false)
  const { isDarkMode, toggleDarkMode } = useDarkMode()
  // const { mode, setMode } = useColorScheme()

  React.useEffect(() => {
    setHasMounted(true)
    // setMode(isDarkMode ? 'dark' : 'light')
  }, [])

  // React.useEffect(() => {
  //   setMode(isDarkMode ? 'dark' : 'light')
  // }, [isDarkMode])

  const onToggleTheme = React.useCallback(() => {
    toggleDarkMode()
    // setMode(mode === 'light' ? 'dark' : 'light')
  }, [toggleDarkMode])

  return (
    <div
      className={cs('breadcrumb', 'button', !hasMounted && styles.hidden)}
      onClick={onToggleTheme}
    >
      {hasMounted && isDarkMode ? <IoMoonSharp /> : <IoSunnyOutline />}
    </div>
  )
}

export const NotionPageHeader: React.FC<{
  block: types.CollectionViewPageBlock | types.PageBlock
}> = ({ block }) => {
  const { components, mapPageUrl } = useNotionContext()
  const isWideScreen = useMediaQuery('(min-width: 768px)')

  if (navigationStyle === 'default') {
    return <Header block={block} />
  }

  return (
    <header className='notion-header'>
      <div className='notion-nav-header'>
        <Breadcrumbs block={block} rootOnly={true} />

        <CssVarsProvider>
          <div className='notion-nav-header-rhs breadcrumbs'>
            {isWideScreen ? (
              <>
                {navigationLinks?.map((link, index) => {
                  if (!link.pageId && !link.url) {
                    return null
                  }

                  if (link.pageId) {
                    return (
                      <components.PageLink
                        href={mapPageUrl(link.pageId)}
                        key={index}
                        className={cs(styles.navLink, 'breadcrumb', 'button')}
                      >
                        {link.title}
                      </components.PageLink>
                    )
                  } else {
                    return (
                      <components.Link
                        href={link.url}
                        key={index}
                        className={cs(styles.navLink, 'breadcrumb', 'button')}
                      >
                        {link.title}
                      </components.Link>
                    )
                  }
                })}
              </>
            ) : (
              <>
                <Dropdown>
                  <MenuButton slots={{ root: IconButton }}>
                    <MenuIcon />
                  </MenuButton>
                  <Menu>
                    <>
                      {navigationLinks?.map((link, index) => {
                        if (!link.pageId && !link.url) {
                          return null
                        }

                        if (link.pageId) {
                          return (
                            <MenuItem
                              key={index}
                              component={'a'}
                              href={mapPageUrl(link.pageId)}
                            >
                              {link.title}
                            </MenuItem>
                          )
                        } else {
                          return (
                            <MenuItem
                              key={index}
                              component={'a'}
                              href={link.url}
                            >
                              {link.title}
                            </MenuItem>
                          )
                        }
                      })}
                    </>
                  </Menu>
                </Dropdown>
              </>
            )}
            <ToggleThemeButton />
          </div>
        </CssVarsProvider>
      </div>
    </header>
  )
}
