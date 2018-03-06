export default {
  name: 'teamMember',
  title: 'Team',
  type: 'document',
  fieldsets: [
    {name: 'social', title: 'Social profile'}
  ],
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          {title: 'Core', value: 'core'},
          {title: 'Mentor', value: 'mentor'}
        ],
      }
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'linkedin',
      title: 'Linkedin',
      type: 'string',
      fieldset: 'social'
    },
    {
      name: 'twitter',
      title: 'Twiiter',
      type: 'string',
      fieldset: 'social'
    }
  ],
  preview: {
    select: {
      title: 'name',
      title: 'title',
      media: 'image'
    }
  }
}
