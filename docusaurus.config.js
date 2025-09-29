// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Datashelter',
  tagline: 'Automate your backups in 5 minutes',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.datashelter.tech',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  trailingSlash: true,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'datashelter', // Usually your GitHub org/user name.
  projectName: 'documentation', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/datashelter/documentation/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/blog/tags/**'],
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/datashelter-social-card.png',
      navbar: {
        title: 'Datashelter',
        logo: {
          alt: 'Datashelter Logo',
          src: 'img/datashelter-logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            type: 'search',
            position: 'left',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            label: 'Open dashboard',
            position: 'right',
            href: 'https://app.datashelter.tech',
          },
        ],
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Quickstart',
                to: '/quickstart',
              },
              {
                label: 'FAQ',
                to: 'https://docs.datashelter.tech/category/faq',
              },
              {
                label: 'Troubleshooting',
                to: '/category/troubleshooting',
              },
              {
                label: 'Contact us',
                to: '/support',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/datashelter',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/datasheltertech/',
              },
              {
                label: 'Github',
                href: 'https://github.com/datashelter',
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/@datasheltertech',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: 'https://datashelter.tech/blog/',
              },
              {
                label: 'Client area',
                href: 'https://app.datashelter.tech/',
              },
              {
                label: 'Service status',
                href: 'https://status.datashelter.tech/',
              },
              {
                label: 'Legal notice',
                href: 'https://pineapple-bit-b3b.notion.site/Legal-mentions-8c75662443194bdb9ecddf739c7485bc',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Datashelter - Your Backups Effortlessly Automated`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      algolia: {
      appId: 'VAMH1T9TIM',
      apiKey: '473258af86411b1604b4bfb511c066ce',

      indexName: 'datashelter-docs',

      contextualSearch: true,

      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      // externalUrlRegex: 'docs\\.datashelter\\.tech',

      // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
      replaceSearchResultPathname: {
        from: '/docs/', // or as RegExp: /\/docs\//
        to: '/',
      },

      searchParameters: {},
      searchPagePath: 'search',

      // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
      insights: true,
    },
    }),
};

export default config;
