/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Dosen Ngoding",
  tagline: "Seri Belajar Flutter",
  url: "https://siubie.github.io",
  baseUrl: "/flutterindonesia/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "siubie", // Usually your GitHub org/user name.
  projectName: "flutterindonesia", // Usually your repo name.
  themeConfig: {
    googleAnalytics: {
      trackingID: "G-2FWC3FPY25",
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
    },
    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
    },
    navbar: {
      title: "Dosen Ngoding",
      logo: {
        alt: "Dosen Ngoding",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Flutter Tutorial Indonesia",
          position: "left",
        },
        {
          href: "https://github.com/siubie/flutterSeries",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "docs/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/docusaurus",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/facebook/docusaurus",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
