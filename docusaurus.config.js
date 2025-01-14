// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const siteConfig = require("./site-config.json");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: siteConfig.title,
  tagline: siteConfig.description,
  url: siteConfig.url,
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  organizationName: siteConfig.organizationName,
  projectName: siteConfig.repoName,
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: ({ docPath }) =>
            `https://github.com/${siteConfig.organizationName}/${siteConfig.repoName}/tree/main/${docPath}`,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: siteConfig.title,
        logo: {
          alt: "",
          src: "img/52048808.jpeg",
        },
        items: [
          {
            type: "doc",
            docId: "standards/intro",
            position: "left",
            sidebarId: "standards",
            label: "Standards",
          },
          {
            type: "docSidebar",
            position: "left",
            sidebarId: "techniques",
            label: "Techniques",
          },
          {
            type: "docSidebar",
            position: "left",
            sidebarId: "learning",
            label: "Learning",
          },
          {
            href: `https://github.com/${siteConfig.organizationName}/${siteConfig.repoName}`,
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: `https://github.com/${siteConfig.organizationName}/${siteConfig.repoName}`,
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ${
          siteConfig.title
        }. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
