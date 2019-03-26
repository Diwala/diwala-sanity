export default {
  name: 'privacy-policy',
  title: 'Privacy policy',
  type: 'document',
  fields: [
    {
      name: 'version',
      title: 'Version',
      type: 'string'
    },
    {
      name: 'updated',
      title: 'Update date',
      type: 'date'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent'
    },
  ],
}
