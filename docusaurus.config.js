const OrgName = '4lch4'
const ProjectName = 'Knowledge-Base'

module.exports = {
  title: `${OrgName}/${ProjectName}`,
  tagline:
    "My public Knowledge Base containing various things I've deemed worth learning or knowing at some point.",
  url: 'https://kba.4lch4.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: OrgName, // Usually your GitHub org/user name.
  projectName: ProjectName, // Usually your repo name.
  themeConfig: {
    navbar: {
      title: `@4lch4/knowledge-base`,
      logo: {
        alt: "4lch4's Knowledge Base Logo",
        src: 'img/prime-logo.svg'
      },
      items: [
        // Left Side
        {
          to: '/tils/index',
          label: 'TILs',
          position: 'left'
        },
        {
          to: '/cheatsheets/index',
          label: 'Cheatsheets',
          position: 'left'
        },
        {
          to: '/finds/index',
          label: 'Finds',
          position: 'left'
        },
        {
          label: 'About',
          to: '/about',
          position: 'left'
        },
        // Right Side
        {
          href: 'https://github.com/4lch4/TILs',
          label: 'GitHub',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Information',
          items: [
            {
              label: 'TILs',
              to: 'tils/index'
            },
            {
              label: 'Cheatsheets',
              to: 'cheatsheets/index'
            },
            {
              to: '/finds/index',
              label: 'Finds',
              position: 'left'
            }
          ]
        },
        {
          title: 'More',
          items: [
            {
              label: 'About',
              to: '/about'
            },
            {
              label: 'GitHub',
              href: 'https://github.com/4lch4/knowledge-base'
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 4lch4 Industries, LLC. Built with Docusaurus.`
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // Please change this to your repo.
          editUrl:
            'https://github.com/4lch4/knowledge-base/edit/master/website/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ]
}
