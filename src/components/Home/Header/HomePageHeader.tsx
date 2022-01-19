import React, { FC, memo } from 'react';
import clsx from 'clsx';
import styles from './HomePageHeader.module.css';

const HomePageHeader: FC = () => (
	<>
		<header className={clsx('hero hero--primary', styles.banner)}>
			<div className="container">
				<img src="/img/svg/full-nobg.svg" alt="logo" className={styles.logo} />
				<h2>A simple, easy to use NodeJS module for interacting with the Hypixel API.</h2>
			</div>
		</header>
	</>
);

export default memo(HomePageHeader);
