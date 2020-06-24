import React from 'react'
import { Item } from 'semantic-ui-react'
class ArticlePreview extends React.Component {
  render () {
    // const article = this.props.article;
    const {title, tagList, description} = this.props.article;
    const tags = tagList.join(', ');
    return (
        <Item>
        <Item.Content>
          <Item.Header as='a'>{title}</Item.Header>
          <Item.Meta className='block' as='a'>{description}</Item.Meta>
          
          <Item.Extra as='a'>ReadMore</Item.Extra>
          <Item.Extra>{tags}</Item.Extra>
        </Item.Content>
      </Item>
    )
  }
}
export default ArticlePreview;