import React from 'react'
import { Placeholder } from 'semantic-ui-react'
export function SmallArticleLoader () {
  return (
    <Placeholder>
      <Placeholder.Header image>
        <Placeholder.Line length='medium' />
        <Placeholder.Line length='full' />
      </Placeholder.Header>
      <Placeholder.Paragraph>
        <Placeholder.Line length='full' />
        <Placeholder.Line length='medium' />
      </Placeholder.Paragraph>
    </Placeholder>
  )
}
export function TagsLoader () {
  return (
    <Placeholder>
      <Placeholder.Header>
        <Placeholder.Line />
        <Placeholder.Line />
      </Placeholder.Header>
    </Placeholder>
  )
}
