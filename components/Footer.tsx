import * as React from 'react'

import { FaEnvelopeOpenText } from '@react-icons/all-files/fa/FaEnvelopeOpenText'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { FaMastodon } from '@react-icons/all-files/fa/FaMastodon'
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter'
import { FaYoutube } from '@react-icons/all-files/fa/FaYoutube'
import { FaZhihu } from '@react-icons/all-files/fa/FaZhihu'
import SchoolIcon from '@mui/icons-material/School';
import EmailIcon from '@mui/icons-material/Email';

import * as config from '@/lib/config'

import styles from './styles.module.css'

// TODO: merge the data and icons from PageSocial with the social links in Footer

export function FooterImpl() {
  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>Copyright {new Date().getFullYear()} {config.author}</div>
      <div className={styles.social}>
        {config.twitter && (
          <a
            className={styles.twitter}
            href={`https://twitter.com/${config.twitter}`}
            title={`Twitter @${config.twitter}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaTwitter />
          </a>
        )}

        {config.mastodon && (
          <a
            className={styles.mastodon}
            href={config.mastodon}
            title={`Mastodon ${config.getMastodonHandle()}`}
            rel='me'
          >
            <FaMastodon />
          </a>
        )}

        {config.zhihu && (
          <a
            className={styles.zhihu}
            href={`https://zhihu.com/people/${config.zhihu}`}
            title={`Zhihu @${config.zhihu}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaZhihu />
          </a>
        )}

        {config.github && (
          <a
            className={styles.github}
            href={`https://github.com/${config.github}`}
            title={`GitHub @${config.github}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <GitHubIcon />
          </a>
        )}

        {config.linkedin && (
          <a
            className={styles.linkedin}
            href={`https://www.linkedin.com/in/${config.linkedin}`}
            title={`LinkedIn ${config.author}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <LinkedInIcon />
          </a>
        )}

        {config.newsletter && (
          <a
            className={styles.newsletter}
            href={`${config.newsletter}`}
            title={`Newsletter ${config.author}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaEnvelopeOpenText />
          </a>
        )}

        {config.youtube && (
          <a
            className={styles.youtube}
            href={`https://www.youtube.com/${config.youtube}`}
            title={`YouTube ${config.author}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaYoutube />
          </a>
        )}

        {/* {config.resume && (
          <a
            className={styles.resume}
            href={config.resume}
            title={'My CV'}
            target='_blank'
            rel='noopener noreferrer'
          >
            <svg width="24px" height="24px" viewBox="0 -2 32 24" xmlns="http://www.w3.org/2000/svg"><g id="fontsvg1701379833028" strokeLinecap="round" fillRule="evenodd" ><path d="M 11.25 20.25 L 2.25 20.25 L 2.25 18 L 0 18 L 0 2.25 L 2.25 2.25 L 2.25 0 L 11.25 0 L 11.25 2.25 L 13.5 2.25 L 13.5 6.75 L 9 6.75 L 9 2.25 L 4.5 2.25 L 4.5 18 L 9 18 L 9 13.5 L 13.5 13.5 L 13.5 18 L 11.25 18 L 11.25 20.25 Z M 27 20.25 L 22.5 20.25 L 22.5 18 L 20.25 18 L 20.25 15.75 L 18 15.75 L 18 0 L 22.5 0 L 22.5 15.75 L 27 15.75 L 27 0 L 31.5 0 L 31.5 15.75 L 29.25 15.75 L 29.25 18 L 27 18 L 27 20.25 Z" vectorEffect="non-scaling-stroke" /></g></svg>
          </a>
        )} */}

        {config.google && (
          <a
            className={styles.google}
            href={`https://scholar.google.com/citations?user=${config.google}&hl=en`}
            title={'Google Scholar'}
            target='_blank'
            rel='noopener noreferrer'
          >
            <SchoolIcon />
          </a>
        )}

        {config.email && (
          <a
            className={styles.email}
            href={`mailto:${config.email}`}
            title={'Email me'}
            target='_blank'
            rel='noopener noreferrer'
          >
            <EmailIcon />
          </a>
        )}
      </div>
    </footer>
  )
}

export const Footer = React.memo(FooterImpl)
