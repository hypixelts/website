import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Header from '../components/Header/Header';
import HomepageFeatures from '../components/Features/Features';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title="Home" description={siteConfig.tagline}>
      <main>
        <Header />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
