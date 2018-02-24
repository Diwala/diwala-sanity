import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import blockContent from './blockContent'
import category from './category'
import partners from './partners'
import post from './post'
import author from './author'
import texts from './texts'
import textObject from './text-object'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([blockContent, post, author, category, partners, texts, textObject])
})
