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

  markdown: {
    hooks: {
        onBrokenMarkdownLinks: 'warn',
    },
  },

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
            to: '/quickstart',
            position: 'left',
            label: 'Get started',
          },
          {
            to: '/category/cli-snaper',
            position: 'left',
            label: 'Install/Configure',
          },
          {
            to: '/category/tutorials',
            position: 'left',
            label: 'Tutorials',
          },
          {
            to: '/category/faq',
            position: 'left',
            label: 'FAQ',
          },
          {
            to: '/category/troubleshooting',
            position: 'left',
            label: 'Troubleshooting',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            label: 'Manage my backups',
            position: 'right',
            href: 'https://app.datashelter.tech',
          },
          {
            type: 'search',
            position: 'right',
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
        logo: {
          alt: 'Datashelter Logo',
          src: 'img/datashelter-white-cropped.svg',
          href: 'https://datashelter.tech/',
          width: 250,
          height: 60,
        },
        links: [
          {
            title: 'Learn',
            items: [
              {
                label: 'Quickstart',
                to: '/quickstart',
              },
              {
                label: 'Tutorials',
                to: '/category/tutorials',
              },
              {
                label: 'FAQ',
                to: 'https://docs.datashelter.tech/category/faq',
              },
              {
                label: 'Troubleshooting',
                to: '/category/troubleshooting',
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
                label: 'YouTube',
                href: 'https://www.youtube.com/@datasheltertech',
              },
              {
                label: 'Help',
                to: '/support',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Discover Datashelter',
                href: 'https://datashelter.tech/',
              },
              {
                label: 'Manage my backups',
                href: 'https://app.datashelter.tech/',
              },
              {
                label: 'Datashelter status',
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

        indexName: 'docs.datashelter.tech',

        contextualSearch: true,

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
