module.exports = {
    title: 'Codestellar',
    description: 'The website is my public notebook, where I share what I have learnt. I am mostly working on Azure Portal, Azure DevOps, .Net Core, HTML, CSS and JavaScript Technologies.',
    themeConfig: {
        //logo: '/assets/img/logo.png',
        displayAllHeaders: true,
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Azure', link: '/azure/' },
            { text: 'DevOps', link: '/devops/' },
            { text: 'LinkedIn', link: 'https://www.linkedin.com/in/codestellar/' }
          ],        
        sidebar: 'auto' 
    },
    // configureWebpack: {
    //   resolve: {
    //     alias: {
    //       '@alias': 'path/to/some/dir'
    //     }
    //   }    
  }