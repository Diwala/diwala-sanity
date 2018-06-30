export default {
  name: 'news-list',
  title: 'News',
  type: 'document',
  fields: [
    {
      name: 'source',
      title: 'Source',
      type: 'string'
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image'
    },
    {
      name: 'url',
      title: 'Url',
      type: 'string'
    },
    {
      name: 'quote',
      title: 'Quote',
      type: 'string'
    },
  ],
}
