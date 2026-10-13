import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Product',
      links: [
        { text: 'Brand DNA Engine', href: getPermalink('/dna') },
        { text: 'AI Agents', href: getPermalink('/agents') },
        { text: 'Use Cases', href: getPermalink('/use-cases') },
        { text: 'Launch', href: getPermalink('/launch') },
        { text: 'Marketing Automation', href: getPermalink('/automation') },
        { text: 'Integrations', href: getPermalink('/integrations') },
        { text: 'Platform Features', href: getPermalink('/#features') },
        { text: 'Pricing', href: getPermalink('/pricing') },
      ],
    },
    {
      text: 'Resources',
      links: [
        { text: 'Monster Blog', href: getBlogPermalink() },
        { text: 'Docs (Permanent Memory)', href: getPermalink('/about') },
        { text: 'Success Stories', href: getPermalink('/services') },
      ],
    },
    {
      text: 'Company',
      links: [
        { text: 'About us', href: getPermalink('/about') },
        { text: 'Contact', href: getPermalink('/contact') },
      ],
    },
  ],
  actions: [{ text: 'Start 7-Day Free Trial', href: 'https://app.copymonster.co/', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Brand DNA Engine', href: getPermalink('/dna') },
        { text: 'AI Agents', href: getPermalink('/agents') },
        { text: 'Integrations', href: getPermalink('/integrations') },
        { text: 'Pricing Plans', href: getPermalink('/pricing') },
      ],
    },
    {
      title: 'Use Cases',
      links: [
        { text: 'Use Cases', href: getPermalink('/use-cases') },
        { text: 'Infoproduct Launch', href: getPermalink('/launch') },
        { text: 'Marketing Automation', href: getPermalink('/automation') },
        { text: 'For SaaS', href: getPermalink('/homes/saas') },
        { text: 'For Startups', href: getPermalink('/homes/startup') },
        { text: 'Mobile Experience', href: getPermalink('/homes/mobile-app') },
        { text: 'Founder Profile', href: getPermalink('/homes/personal') },
      ],
    },
    {
      title: 'Resources',
      links: [
        { text: 'Monster Blog', href: getBlogPermalink() },
        { text: 'MIT Open Core', href: 'https://github.com/Adriano-Digital2024/CopyMonster' },
        { text: 'Affiliate Program', href: getPermalink('/affiliate') },
        { text: 'Market Radar', href: getPermalink('/pricing') },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About CopyMonster', href: getPermalink('/about') },
        { text: 'Contact Us', href: getPermalink('/contact') },
        { text: 'Security', href: getPermalink('/security') },
        { text: 'AI Policy', href: getPermalink('/ai-policy') },
        { text: 'Privacy Policy', href: getPermalink('/privacy') },
        { text: 'Terms of Service', href: getPermalink('/terms') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy', href: getPermalink('/privacy') },
    { text: 'AI Policy', href: getPermalink('/ai-policy') },
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
