import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Homes',
      links: [
        {
          text: 'SaaS',
          href: getPermalink('/homes/saas'),
        },
        {
          text: 'Startup',
          href: getPermalink('/homes/startup'),
        },
        {
          text: 'Mobile App',
          href: getPermalink('/homes/mobile-app'),
        },
        {
          text: 'Personal',
          href: getPermalink('/homes/personal'),
        },
      ],
    },
    {
      text: 'Pages',
      links: [
        {
          text: 'Features (Anchor Link)',
          href: getPermalink('/#features'),
        },
        {
          text: 'Services',
          href: getPermalink('/services'),
        },
        {
          text: 'Pricing',
          href: getPermalink('/pricing'),
        },
        {
          text: 'About us',
          href: getPermalink('/about'),
        },
        {
          text: 'Contact',
          href: getPermalink('/contact'),
        },
        {
          text: 'Terms',
          href: getPermalink('/terms'),
        },
        {
          text: 'Privacy policy',
          href: getPermalink('/privacy'),
        },
      ],
    },
    {
      text: 'Landing',
      links: [
        {
          text: 'Lead Generation',
          href: getPermalink('/landing/lead-generation'),
        },
        {
          text: 'Long-form Sales',
          href: getPermalink('/landing/sales'),
        },
        {
          text: 'Click-Through',
          href: getPermalink('/landing/click-through'),
        },
        {
          text: 'Product Details (or Services)',
          href: getPermalink('/landing/product'),
        },
        {
          text: 'Coming Soon or Pre-Launch',
          href: getPermalink('/landing/pre-launch'),
        },
        {
          text: 'Subscription',
          href: getPermalink('/landing/subscription'),
        },
      ],
    },
    {
      text: 'Blog',
      links: [
        {
          text: 'Blog List',
          href: getBlogPermalink(),
        },
        {
          text: 'Article',
          href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        },
        {
          text: 'Article (with MDX)',
          href: getPermalink('markdown-elements-demo-post', 'post'),
        },
        {
          text: 'Category Page',
          href: getPermalink('tutorials', 'category'),
        },
        {
          text: 'Tag Page',
          href: getPermalink('astro', 'tag'),
        },
      ],
    },
  ],
  actions: [{ text: 'Free Trial', href: 'https://app.copymonster.me/', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'DNA Features', href: getPermalink('/#features') },
        { text: 'Strategy Security', href: getPermalink('/privacy') },
        { text: 'Monster Team', href: getPermalink('/about') },
        { text: 'Enterprise DNA', href: getPermalink('/pricing') },
        { text: 'Success Stories', href: '#' },
        { text: 'Monster Pricing', href: getPermalink('/pricing') },
        { text: 'Resources', href: getBlogPermalink() },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Developer API', href: '#' },
        { text: 'Agency Partners', href: getPermalink('/contact') },
        { text: 'MIT Open Core', href: 'https://github.com/Adriano-Digital2024/CopyMonster' },
        { text: 'Desktop App', href: '#' },
        { text: 'Multi-Agent Hub', href: getPermalink('/services') },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'DNA Docs', href: '#' },
        { text: 'Monster Forum', href: '#' },
        { text: 'Strategic Services', href: getPermalink('/services') },
        { text: 'Agent Skills', href: getPermalink('/services') },
        { text: 'System Status', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'Our Mission', href: getPermalink('/about') },
        { text: 'Monster Blog', href: getBlogPermalink() },
        { text: 'Careers', href: '#' },
        { text: 'Press Kit', href: '#' },
        { text: 'DNA Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/eusouadrianovieira' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/Adriano-Digital2024/CopyMonster' },
  ],
  footNote: `
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://integridadedigital.com.br/"> Integridade Digital</a> · All rights reserved.
  `,
};
