import React from 'react'
import { Item, Icon, Button } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
class ArticlePreview extends React.Component {
  render () {
    // const article = this.props.article;
    const {title, tagList, description, slug} = this.props.article;
    
    // const tags = tagList.join(' ');
    return (
        <Item>
        <Link className='links-react' to={`/articles/${slug}`}>
        <Item.Content>
        <Item.Header as='a'>{title}</Item.Header>
        <Item.Description>{description}</Item.Description>
        <Item.Extra>ReadMore</Item.Extra>
        {   tagList.map(elem =>{
                return <Button color='instagram' size='mini'>{elem}</Button>
                })
            }
        {/* <Item.Extra className='tags'>{tags}</Item.Extra> */}
        
        </Item.Content>
        </Link>
      </Item>
    )
  }
}
export default ArticlePreview;