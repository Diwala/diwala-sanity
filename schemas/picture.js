export default {
  name: 'picture',
  title: 'Picture',
  type: 'document',
  fields: [
    {
      type: 'image',
      title: 'Image',
      name: 'image',
      options: {
        hotspot: true
      }
    },
    {
      type: 'string',
      title: 'Alternate text',
      name: 'alt',
      description: 'A short text used for screen readers'
    },
    {
      type: 'text',
      title: 'Long description',
      name: 'longdesc',
      description: 'A longer description'
    },
    {
      type: 'image',
      title: 'Copyright image',
      name: 'copyrightImage'
    }
  ],
  preview: {
    select: {
      media: 'image'
    }
  }
}