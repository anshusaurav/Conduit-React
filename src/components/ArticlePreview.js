import React from 'react'
import { Item } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
class ArticlePreview extends React.Component {
  render () {
    // const article = this.props.article;
    const {title, tagList, description, slug} = this.props.article;
    
    const tags = tagList.join(', ');
    return (
        <Item>
        <Link to={`/articles/${slug}`}>
        <Item.Content>
        
          <Item.Header as='a'>{title}</Item.Header>
          <Item.Meta className='block' as='a'>{description}</Item.Meta>
          
          <Item.Extra as='a'>ReadMore</Item.Extra>
          <Item.Extra>{tags}</Item.Extra>
        </Item.Content>
        </Link>
      </Item>
    )
  }
}
export default ArticlePreview;