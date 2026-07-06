import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Product',
      links: [
        { text: 'Features', href: getPermalink('/#features') },
        { text: 'AI Agents', href: getPermalink('/services') },
        { text: 'Pricing', href: getPermalink('/pricing') },
        { text: 'Enterprise', href: getPermalink('/pricing') },
      ],
    },
    {
      text: 'Resources',
      links: [
        { text: 'Monster Blog', href: getBlogPermalink() },
        { text: 'Docs (Permanent Memory)', href: '#' },
        { text: 'Success Stories', href: '#' },
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
  actions: [{ text: 'Free Trial', href: 'https://app.copymonster.me/', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'DNA Engine', href: getPermalink('/#features') },
        { text: 'Services & Agents', href: getPermalink('/services') },
        { text: 'Pricing Plans', href: getPermalink('/pricing') },
        { text: 'Enterprise Solution', href: getPermalink('/pricing') },
      ],
    },
    {
      title: 'Alternative Homes',
      links: [
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
        { text: 'Strategy Documentation', href: '#' },
        { text: 'Market Radar', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About CopyMonster', href: getPermalink('/about') },
        { text: 'Contact Us', href: getPermalink('/contact') },
        { text: 'Privacy Policy', href: getPermalink('/privacy') },
        { text: 'Terms of Service', href: getPermalink('/terms') },
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
