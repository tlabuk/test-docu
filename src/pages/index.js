import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.scss';
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

function HomepageHeader() {
  const homePageContent = [{
    title: "Discourse rules all.",
    lead: "A word, <i>logos</i>, is the cornerstone of our reality. We write with words, we speak with them, and we create perceptions with them. Words can change reality in its every aspect known to us. Do you want to embrace their strength?"
  }]

  return (
    <header>
      <div className={styles.row__hero}>
        <div className={styles.column__hero}>
          <div
            className={`${styles.hero__title} ${styles.typewriter}`}
            dangerouslySetInnerHTML={{ __html: `${homePageContent[0].title}&nbsp;` }}
          ></div>
          <div className={styles.hero__subtitle}
            dangerouslySetInnerHTML={{ __html: `${homePageContent[0].lead}` }}>
          </div>
        </div>
        <div className={styles.column__hero}>
          <ThemedImage
            alt="Docusaurus themed image"
            sources={{
              light: useBaseUrl('/img/hero/logo-big-horizontal.svg'),
              dark: useBaseUrl('/img/hero/logo-big-horizontal-dark.svg'),
            }}
          />
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title=''
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
