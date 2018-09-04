export default {
  name: 'blog-list',
  title: 'Blog',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent'
    },
  ],
}
