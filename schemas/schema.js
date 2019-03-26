import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import blockContent from './blockContent'
import partners from './partners'
import texts from './texts'
import news from './news-list'
import blog from './blog-list'
import textObject from './text-object'
import team from './team'
import picture from './picture';
import privacyPolicy from './privacy-policy';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    blockContent,
    partners,
    picture,
    team,
    texts,
    textObject,
    news,
    blog,
    privacyPolicy
  ])
})
