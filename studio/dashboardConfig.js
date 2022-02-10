export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '620524d1d9b707108340d03f',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-48u177fg',
                  apiId: '339019fc-dade-43af-aef2-ab9b80136f2f'
                },
                {
                  buildHookId: '620524d102ae4c008095aa40',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-nideyy4q',
                  apiId: '3d3c626d-eda8-41c5-83cf-234893ffbbaa'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/aaronsts/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-nideyy4q.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
