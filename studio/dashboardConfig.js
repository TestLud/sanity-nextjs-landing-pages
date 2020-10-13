export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5f855a70945897a16ab2dd0b',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-bf5nbrfu',
                  apiId: '6b8ee57c-35ff-4b45-b7cd-02930f82a878'
                },
                {
                  buildHookId: '5f855a70fa94d4c00fe294aa',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-fa95uiy1',
                  apiId: '30e11b05-71f8-4ea5-b73a-70b433679f70'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/TestLud/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-fa95uiy1.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
