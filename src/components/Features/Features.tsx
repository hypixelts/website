import React, { memo } from "react";
import clsx from "clsx";
import styles from "./Features.module.css";

const Features: { title: string; description: string }[] = [
  {
    title: "Easy to Use",
    description:
      "hypixel.ts is simple and easy to use with a clean and intuitive implementation of the Hypixel API.",
  },
  {
    title: "TypeScript, ESM, CJS Compatible",
    description:
      "hypixel.ts is written in TypeScript ensuring full type-safety and is also compatible with ESM and CJS.",
  },
  {
    title: "100% API Coverage",
    description:
      "All of the documented Hypixel API endpoints and methods have been implemented.",
  },
];

function Feature({ title, description }) {
  return (
    <div className={clsx("col", "col--4", styles.feature)}>
      <div className="text--left padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

function HomePageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <h1 className={styles.featureHeading}>Features</h1>
        <div className="row" style={{ marginTop: "24px" }}>
          {Features.map((props, index) => (
            <Feature key={index} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(HomePageFeatures);
