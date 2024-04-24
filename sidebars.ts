import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

export default {
  sidebar: [
    {
      id: 'getting-started',
      type: 'doc',
      label: 'Getting Started',
    },
    {
      type: 'link',
      label: 'Documentation',
      href: '/api'
    }
  ],
} satisfies SidebarsConfig;
