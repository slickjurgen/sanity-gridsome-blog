export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60fd9db10caa6705676fe3ea',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-592n9svw',
                  apiId: '07a05549-d175-4c1f-941d-c53fa14d3687'
                },
                {
                  buildHookId: '60fd9db10e1dc1cf0a93c675',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-dzmgjkfw',
                  apiId: '0fb8a2e0-2702-4e5a-8190-03f603475262'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/slickjurgen/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-dzmgjkfw.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
