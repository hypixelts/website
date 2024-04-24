import { themes } from "prism-react-renderer";
import { resolve } from "node:path";
import { EnumChangefreq } from "sitemap";
import { convertNpmToPackageManagers } from "@sapphire/docusaurus-plugin-npm2yarn2pnpm";
import { ts2esm2cjs } from "@sapphire/docusaurus-plugin-ts2esm2cjs";
import type { Config } from "@docusaurus/types";
import * as Preset from "@docusaurus/preset-classic";

const SORT_ORDER = {
  Managers: 0,
  Classes: 1,
  Rest: 2,
  Interfaces: 3,
  Enumerations: 4,
};

const config: Config = {
  title: "hypixel.ts",
  tagline:
    "hypixel.ts is a simple, easy to use NodeJS wrapper for interacting with the Hypixel API.",
  url: "https://hypixel.js.org",
  baseUrl: "/",
  favicon: "/favicon.ico",
  staticDirectories: ["public"],

  onBrokenMarkdownLinks: "throw",
  onDuplicateRoutes: "throw",

  organizationName: "hypixelts",
  projectName: "hypixel.ts",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        blog: false,
        docs: {
          editUrl: "https://github.com/hypixelts/website/edit/main/",
          breadcrumbs: true,
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          includeCurrentVersion: true,
          sidebarPath: "./sidebars.ts",
          remarkPlugins: [convertNpmToPackageManagers, ts2esm2cjs],
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
        sitemap: {
          changefreq: EnumChangefreq.MONTHLY,
          priority: 1,
          filename: "sitemap.xml",
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      "docusaurus-plugin-typedoc-api",
      {
        projectRoot: resolve("./hypixel.ts/src"),
        tsconfigName: "../tsconfig.json",
        sortSidebar: (a: string, d: string) => {
          const orderA = SORT_ORDER[a];
          const orderD = SORT_ORDER[d];

          if (orderA < orderD) {
            return -1;
          } else if (orderA > orderD) {
            return 1;
          } else {
            return a.localeCompare(d);
          }
        },
        packages: [
          {
            path: ".",
            entry: "index.ts",
          },
        ],
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "hypixel.ts",
      logo: {
        alt: "logo",
        src: "https://raw.githubusercontent.com/hypixelts/assets/main/svg/short-nobg.svg",
      },
      items: [
        {
          to: "/",
          label: "Home",
          position: "left",
        },
        {
          to: "docs/getting-started",
          position: "left",
          label: "Getting Started",
        },
        {
          to: "api",
          label: "Documentation",
          psotion: "left",
        },
        {
          href: "https://discord.gg/DDTmaeYUMF",
          label: "Discord",
          position: "right",
        },
        {
          href: "https://github.com/hypixelts",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Socials",
          items: [
            {
              label: "Discord Server",
              href: "https://hypixel.js.org/discord",
            },
            {
              label: "GitHub Organization",
              href: "https://github.com/hypixelts",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} hypixel.ts`,
    },
    prism: {
      defaultLanguage: "javascript",
      theme: themes.github,
      darkTheme: themes.vsDark,
      additionalLanguages: ["javascript", "typescript", "bash"],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
