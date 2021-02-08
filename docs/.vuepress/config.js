module.exports = {
    title: 'Codestellar',
    description: 'The website is my public notebook, where I share what I have learnt. I am mostly working on Azure Portal, Azure DevOps, .Net Core, HTML, CSS and JavaScript Technologies.',
    themeConfig: {
        //logo: '/assets/img/logo.png',
        displayAllHeaders: true,
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Azure', link: '/azure/', items: [
              {text: 'DevOps', link: 'some'}
            ] },
            { text: 'DevOps', link: '/devops/' },
            { text: 'php', link: '/php/' },
            { text: 'LinkedIn', link: 'https://www.linkedin.com/in/codestellar/' }
          ],              
          sidebar: [
            {
                title: 'Azure',   // required
                path: '/azure/',      // optional, link of the title, which should be an absolute path and must exist
                collapsable: false, // optional, defaults to true
                sidebarDepth: 1,    // optional, defaults to 1
                children: [
                  '/'
                ]
            },
            {
              title: 'AWS',   // required
              path: '/aws/',      // optional, link of the title, which should be an absolute path and must exist
              collapsable: false, // optional, defaults to true
              sidebarDepth: 1,    // optional, defaults to 1
              children: [
                '/'
              ]
            },
            {
              title: '.Net Core',   // required
              path: '/netcore/',      // optional, link of the title, which should be an absolute path and must exist
              collapsable: false, // optional, defaults to true
              sidebarDepth: 1,    // optional, defaults to 1
              children: [
                '/'
              ]
            }                        
          ]
      },
    // configureWebpack: {
    //   resolve: {
    //     alias: {
    //       '@alias': 'path/to/some/dir'
    //     }
    //   }    
  }