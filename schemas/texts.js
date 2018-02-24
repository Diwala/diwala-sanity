export default {
  name: 'texts',
  title: 'Text',
  type: 'document',
  fields: [
    {
      name: 'id',
      title: 'id',
      type: 'string'
    },
    {
      name: 'value',
      title: 'value',
      type: 'array',
      of: [
        {
          title: 'content',
          type: 'text-object'
        }
      ]
    }
  ],
}
