import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import blockContent from './blockContent'
import category from './category'
import partners from './partners'
import post from './post'
import author from './author'
import texts from './texts'
import textObject from './text-object'
import team from './team'
import picture from './picture';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    author,
    blockContent,
    category,
    partners,
    picture,
    post,
    team,
    texts,
    textObject
  ])
})
