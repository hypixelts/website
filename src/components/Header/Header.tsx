import React, { memo } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import clsx from 'clsx';
import styles from './Header.module.css';

function Header() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <>
      <header className={clsx('hero hero--primary', styles.banner)}>
        <div className="container">
          <img
            src="https://raw.githubusercontent.com/hypixelts/assets/main/svg/full-nobg5232x945.svg"
            alt="logo"
            className={styles.logo}
          />
          <h2>{siteConfig.tagline}</h2>
          <div>
            <Link
              className="button button--secondary button--lg"
              to="/docs/getting-started"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

export default memo(Header);
