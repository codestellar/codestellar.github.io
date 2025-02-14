module.exports = {
  title: "Codestellar",
  description:
    "The website is my public notebook, where I share what I have learnt. I am mostly working on Azure Portal, Azure DevOps, .Net Core, HTML, CSS and JavaScript Technologies.",
  themeConfig: {
    //logo: '/assets/img/logo.png',
    displayAllHeaders: true,
    nav: [
      { text: "Home", link: "/" },
      { text: "News & Events", link: "/news-and-events/" },
      {
        text: "Blog",
        link: "/blog",
        items: [{ text: "Azure", link: "/azure/" }],
      },
      {
        text: "JavaScript",
        items: [
          { text: "Performance Testing with K6", link: "/javascript/k6.md" },
        ],
      },
      {
        text: "DevOps",
        link: "/devops",
        items: [
          {
            text: "Jenkins: Getting Started",
            link: "/devops/jenkins-getting-started.md",
          },
        ],
      },
      { text: "php", link: "/php/" },
      { text: "more", link: "/more/" },
      { text: "LinkedIn", link: "https://www.linkedin.com/in/codestellar/" },
    ],
    sidebar: [
      {
        title: "Main menu", // required
        path: "/more/", // optional, link of the title, which should be an absolute path and must exist
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1, // optional, defaults to 1
        children: ["/gen-ai/"],
      },
      {
        title: "DevOps", // required
        path: "/devops/", // optional, link of the title, which should be an absolute path and must exist
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1, // optional, defaults to 1
        children: ["/devops/jenkins-getting-started"],
      },
      {
        title: "More", // required
        path: "/more/", // optional, link of the title, which should be an absolute path and must exist
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1, // optional, defaults to 1
        children: ["/gen-ai/"],
      },
    ],
  },
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       '@alias': 'path/to/some/dir'
  //     }
  //   }
};
