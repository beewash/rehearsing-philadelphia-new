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
                  buildHookId: '61003e55a835de570e60b939',
                  title: 'Sanity Studio',
                  name: 'rehearsing-philadelphia-new-studio',
                  apiId: '15928a4e-1997-43d6-94cc-e11545fa220b'
                },
                {
                  buildHookId: '61003e55994643546df605cc',
                  title: 'Landing pages Website',
                  name: 'rehearsing-philadelphia-new',
                  apiId: 'e6eaf5dd-b1c7-4048-96ac-f604d2223c9a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/beewash/rehearsing-philadelphia-new',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://rehearsing-philadelphia-new.netlify.app', category: 'apps'}
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
