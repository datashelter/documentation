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
            { title: 'delete', path: '/cli/usage/delete' },
            { title: 'agent', path: '/cli/usage/agent' },
            { title: 'update', path: '/cli/usage/update' }
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
        { title: 'Reset server credentials', path: '/tutorials/changer-server-credentials' },
        { title: 'Enable Two-Factor Authentication (2FA)', path: '/tutorials/enable-2fa' },
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
            { title: 'What if my account is compromised?', path: '/faq/general/account-security' },
            { title: 'Where is my config located?', path: '/faq/general/configuration-location' },
            { title: 'Why should I use Datashelter', path: '/faq/general/datashelter-advantages' },
            { title: 'Why are my indexes CSV files?', path: '/faq/general/indexes-format' },
            { title: 'Can I backup my entire system with Datashelter?', path: '/faq/general/full-system-backup' },
            { title: 'Which OS are supported?', path: '/faq/general/supported-os' },
            { title: 'Which database access is needed for autodiscovery?', path: '/faq/general/database-autodiscovery' }
          ]
        },
        {
          title: '🤖 Agent',
          collapsible: true,
          children: [
            { title: 'Can the Snaper agent run arbitrary commands?', path: '/faq/agent/agent-security' },
            { title: 'How to migrate from legacy mode to agent mode?', path: '/faq/agent/migrate-to-agent' },
            { title: 'How does the agent manage my crontabs?', path: '/faq/agent/agent-crontab-management' }
          ]
        },
        {
          title: '💳 Billing',
          collapsible: true,
          children: [
            { title: 'How is my billing calculated?', path: '/faq/billing/billing-calculation' },
            { title: 'How do you calculate storage usage?', path: '/faq/billing/storage-usage-calculation' },
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
          title: '✉️ Email alerting',
          collapsible: true,
          children: [
            { title: 'Which alerts will I receive for my backups?', path: '/faq/email_alerting/email-alerting' }
          ]
        },
        {
          title: '📄 Backup logs',
          collapsible: true,
          children: [
            { title: 'How to access backup logs?', path: '/faq/backup_logs/access-backup-logs' },
            { title: 'How long are my backup logs kept?', path: '/faq/backup_logs/log-retention' }
          ]
        },
        {
          title: '🕒 Backup scheduling',
          collapsible: true,
          children: [
            { title: 'How to migrate from manual crontabs to automatic scheduling?', path: '/faq/backup_scheduling/migrate-to-automatic-scheduling' },
            { title: 'Can I continue using manual scheduling for my backups?', path: '/faq/backup_scheduling/stay-with-manual-scheduling' },
            { title: 'What is manage_crontab parameter?', path: '/faq/backup_scheduling/manage-crontabs-parameter' },
            { title: 'How are my daily backups scheduled?', path: '/faq/backup_scheduling/daily-backup-schedule' }

          ]
        },
        {
          title: '🔄 Retention policies',
          collapsible: true,
          children: [
            { title: 'Which retention policy should I choose?', path: '/faq/retention_policies/choose-retention-policy' },
            { title: 'What are degressive retention policies?', path: '/faq/retention_policies/degressive-retention-policies' }
          ]
        },
                {
          title: '🏗️ Infrastructure',
          collapsible: true,
          children: [
            { title: 'How Datashelter keeps my data secure', path: '/faq/infrastructure/data-security' },
            { title: 'Where are my backups stored?', path: '/faq/infrastructure/hosting-locations' },
            { title: 'Our infrastructure', path: '/faq/infrastructure/infrastructure' },
            { title: 'Why does my server communicate with s3.datashelter.cloud?', path: '/faq/infrastructure/s3-endpoint' }
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
