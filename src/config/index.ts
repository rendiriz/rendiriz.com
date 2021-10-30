const siteMetadata = {
  title: `Rendi Riz`,
  description: `Rendi Riz is a frontend developer`,
}

const routePage = [
  {
    path: '/',
    label: 'Home',
  },
  {
    path: '/projects',
    label: 'Projects',
  },
  {
    path: '/blog',
    label: 'Blog',
  },
  {
    path: '/about',
    label: 'About',
  },
  {
    path: '/contact',
    label: 'Contact',
  },
]

const routeSocial = [
  {
    path: 'https://twitter.com/rizkirendi',
    short: 'tw',
    long: 'twitter',
  },
  {
    path: 'https://www.instagram.com/rendi.riz',
    short: 'ig',
    long: 'instagram',
  },
  {
    path: 'https://www.linkedin.com/in/rendiriz',
    short: 'ln',
    long: 'linkedin',
  },
  {
    path: 'https://github.com/rendiriz',
    short: 'gh',
    long: 'github',
  },
]

export { siteMetadata, routePage, routeSocial }
