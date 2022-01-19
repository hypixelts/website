import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import HomePageHeader from '../components/Home/Header/HomePageHeader';
import HomePageAbout from '../components/Home/About/HomePageAbout';
import HomepageFeatures from '../components/Home/Features/HomePageFeatures';

export default function Home(): JSX.Element {
	const { siteConfig } = useDocusaurusContext();

	return (
		<>
			<Layout title="Home" description={siteConfig.tagline}>
				<HomePageHeader />
				<main>
					<HomePageAbout />
					<HomepageFeatures />
				</main>
			</Layout>
		</>
	);
}
