import React, { FC, memo } from 'react';
import Feature from './Feature';
import styles from './HomePageFeatures.module.css';
import { FeatureItem } from '@site/src/types';

const Features: FeatureItem[] = [
	{
		title: 'Easy to Use',
		description: <>hypixel.ts is a simple API wrapper, designed to be easily installed and used.</>
	},
	{
		title: 'TypeScript, ESM, CommonJS Support',
		description: <>hypixel.ts is written in TypeScript, and is compatible with ESM and CommonJS.</>
	},
	{
		title: '100% API Coverage',
		description: <>hypixel.ts provides 100% API coverage, and will be updated as changes have been made to the API.</>
	}
];

const HomePageFeatures: FC = () => (
	<section className={styles.features}>
		<div className="container">
			<h1 className={styles.featureHeading}>Features</h1>
			<div className="row" style={{ marginTop: '24px' }}>
				{Features.map((props, index) => (
					<Feature key={index} {...props} />
				))}
			</div>
		</div>
	</section>
);

export default memo(HomePageFeatures);
