import React, { FC, memo } from 'react';
import Link from '@docusaurus/Link';
import styles from './HomePageAbout.module.css';

const HomePageAbout: FC = () => (
	<section className={styles.about}>
		<h1 className={styles.aboutHeading}>About</h1>
		<div className="text--left padding-horiz--xl">
			Hypixel.TS is a <Link to="https://nodejs.org/">Node.JS</Link> module which allows you to interact with the{' '}
			<Link to="https://api.hypixel.net/">Hypixel API</Link> easily. It is designed with first class TypeScript support in mind, also supporting
			ESM and CommonJS.
		</div>
	</section>
);

export default memo(HomePageAbout);
