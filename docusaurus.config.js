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
  // Github pages deploy
  organizationName: siteConfig.organizationName,
  projectName: siteConfig.projectName,
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
          editUrl: `https://github.com/${siteConfig.organizationName}/${siteConfig.projectName}/tree/main/docs/`,
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
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Standards",
          },
          {
            href: `https://github.com/${siteConfig.organizationName}/${siteConfig.projectName}`,
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
                href: `https://github.com/${siteConfig.organizationName}/${siteConfig.projectName}`,
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ${
          siteConfig.title
        }, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
