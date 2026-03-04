module.exports = {
  siteTitle: 'Datashelter',
  siteUrl: 'https://docs.datashelter.tech',
  srcDir: 'docs',
  outputDir: 'site',
  logo: {
    light: 'assets/img/datashelter-logo.png',
    dark: 'assets/img/datashelter-white-cropped.svg',
    href: '/',
    alt: 'Datashelter Logo'
  },
  favicon: 'assets/img/favicon.ico',
  layout: {
    spa: true,
    header: { enabled: true },
    sidebar: {
      collapsible: true,
      defaultCollapsed: false
    },
    optionsMenu: {
      position: 'header',
      components: {
        search: true,
        themeSwitch: true
      }
    },
    footer: {
      style: 'complete',
      description: 'Automate your backups in minutes.',
      copyright: 'Copyright © 2026 Datashelter - Your Backups Effortlessly Automated',
      columns: [
        {
          title: 'Learn',
          links: [
            { text: 'Quickstart', url: '/quickstart' },
            { text: 'Tutorials', url: '/tutorials/change-server-name' },
            { text: 'FAQ', url: '/faq/general/account-security' },
            { text: 'Troubleshooting', url: '/troubleshooting/database-snapshot-ignored' }
          ]
        },
        {
          title: 'Community',
          links: [
            { text: 'Twitter', url: 'https://twitter.com/datashelter' },
            { text: 'LinkedIn', url: 'https://www.linkedin.com/company/datasheltertech/' },
            { text: 'YouTube', url: 'https://www.youtube.com/@datasheltertech' },
            { text: 'Help', url: '/support' }
          ]
        },
        {
          title: 'Platform',
          links: [
            { text: 'Website', url: 'https://datashelter.tech/' },
            { text: 'Dashboard', url: 'https://app.datashelter.tech/' },
            { text: 'Service status', url: 'https://status.datashelter.tech/' },
            { text: 'About', url: 'https://datashelter.tech/about' }
          ]
        }
      ]
    }
  },
  theme: {
    name: 'default',
    defaultMode: 'dark',
    codeHighlight: true,
    customCss: ['assets/css/custom.css']
  },
  plugins: {
    sitemap: {
      enabled: true
    },
    seo: {
      enabled: true
    }
  },
  customJs: ['assets/js/custom.js'],
  navigation: [
    { title: '🏠 Introduction', path: '/' },
    { title: '🚀 Get started', path: '/quickstart' },
    {
      title: '💻 CLI (snaper)',
      collapsible: true,
      children: [
        {
          title: '🧰 Pre-requisites',
          collapsible: true,
          children: [
            { title: 'Install Snaper', path: '/cli/requisites/install' },
            { title: 'Database client setup', path: '/cli/requisites/database_setup' }
          ]
        },
        {
          title: '⚙️ Usage',
          collapsible: true,
          children: [
            { title: 'init', path: '/cli/usage/init' },
            { title: 'config', path: '/cli/usage/config' },
            { title: 'backup', path: '/cli/usage/backup' },
            { title: 'list', path: '/cli/usage/list' },
            { title: 'restore', path: '/cli/usage/restore' },
            { title: 'delete', path: '/cli/usage/delete' }
          ]
        },
        { title: 'Automatic Configuration via Environment Variables', path: '/cli/autoinit-env' },
        { title: 'Configuration parameters', path: '/cli/configuration' },
        { title: 'Environment variables', path: '/cli/environment-vars' }
      ]
    },
    {
      title: '📘 Tutorials',
      collapsible: true,
      children: [
        { title: 'Change server name or description', path: '/tutorials/change-server-name' },
        { title: 'Reset server credentials', path: '/tutorials/changer-server-credentials' }
      ]
    },
    {
      title: '❓ FAQ',
      collapsible: true,
      children: [
        {
          title: '🧩 General',
          collapsible: true,
          children: [
            { title: 'Delete a misconfigured service from snaper', path: '/faq/general/misconfigured-service-snaper' },
            { title: 'How to access backup logs?', path: '/faq/general/access-backup-logs' },
            { title: 'What if my account is compromised?', path: '/faq/general/account-security' },
            { title: 'How to activate Two-Factor Authentication (2FA)?', path: '/faq/general/activate-2fa' },
            { title: 'Configuration files location', path: '/faq/general/configuration-location' },
            { title: 'Can I manage my backups by myself?', path: '/faq/general/datashelter-advantages' },
            { title: 'Why did you choose CSV as the default format for indexes?', path: '/faq/general/indexes-format' },
            { title: 'What is manage_crontab parameter?', path: '/faq/general/manage-crontabs-parameter' },
            { title: 'Can I backup my entire system with Datashelter?', path: '/faq/general/system-backup' }
          ]
        },
        {
          title: '🗜️ Compression',
          collapsible: true,
          children: [{ title: 'How is compression handled?', path: '/faq/compression/compression-process' }]
        },
        {
          title: '🔐 Encryption',
          collapsible: true,
          children: [{ title: 'How do we encrypt your data?', path: '/faq/encryption/s3-encryption' }]
        },
        {
          title: '🗄️ Storage',
          collapsible: true,
          children: [
            { title: 'Storage usage calculation', path: '/faq/storage/storage-usage-calculation' },
            { title: 'Which paths should I back up?', path: '/faq/storage/backup-paths' },
            { title: 'Can I backup logs with Datashelter?', path: '/faq/storage/configuration-location' },
            { title: 'What are downsampling policies?', path: '/faq/storage/downsampling-policies' },
            { title: 'Are my backups immutable?', path: '/faq/storage/immutable-backups' },
            { title: 'Estimating required storage for your backups', path: '/faq/storage/required-storage' },
            { title: 'Which retention policy should I choose?', path: '/faq/storage/retention-policy' },
            { title: 'Why do I need to enable versioning on my external buckets?', path: '/faq/storage/versionning-on-external-buckets' }
          ]
        },
        {
          title: '💳 Billing',
          collapsible: true,
          children: [{ title: 'What is the process for calculating billing charges?', path: '/faq/billing/billing-calculation' }]
        },
        {
          title: '🏗️ Infrastructure',
          collapsible: true,
          children: [
            { title: 'How Datashelter keeps your data secure', path: '/faq/infrastructure/data-security' },
            { title: 'Where are my backups stored?', path: '/faq/infrastructure/hosting-locations' },
            { title: 'Our infrastructure', path: '/faq/infrastructure/infrastructure' },
            { title: 'Why does my server communicate with s3.datashelter.cloud?', path: '/faq/infrastructure/s3-endpoint' }
          ]
        },
        {
          title: '🕒 Backup scheduling',
          collapsible: true,
          children: [
            { title: 'How to migrate from manual crontabs to automatic scheduling?', path: '/faq/backup_scheduling/migrate-to-automatic-scheduling' },
            { title: 'How does email alerting work? When is it triggered?', path: '/faq/backup_scheduling/email-alerting' },
            { title: 'Can I continue using manual scheduling for my backups?', path: '/faq/backup_scheduling/stay-with-manual-scheduling' }
          ]
        }
      ]
    },
    {
      title: '🛠️ Troubleshooting',
      collapsible: true,
      children: [
        { title: 'My database snapshots are ignored with crontab', path: '/troubleshooting/database-snapshot-ignored' },
        { title: 'Why is my temporary partition full of Snaper files?', path: '/troubleshooting/full-temporary-partition' },
        { title: 'failed to decompress stream: invalid input: magic number mismatch', path: '/troubleshooting/magic-number-error' },
        { title: 'Backup incident troubleshooting guide', path: '/troubleshooting/missing-backup-resolution' },
        { title: 'Common MongoDB Issues', path: '/troubleshooting/mongodb-backup' }
      ]
    },
    { title: '💬 Contact Us', path: '/support' }
  ]
};
