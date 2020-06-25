import React from 'react';
import {Button, Item} from 'semantic-ui-react'
import ArticleAuthor from './ArticleAuthor';
class ArticleHero extends React.Component{
    render() {
        const {title, username} = this.props.article;
        return (
            <section className='article-hero-section'>
                <h3 className='article-title'>{title}</h3>

                <div className='article-header-grid'>
                    <div>
                        <ArticleAuthor article={this.props.article}/>
                    </div>
                    <div className='article-hero-btn-grp'>
                    <Button positive content='Edit Article ' icon='edit' labelPosition='left' />
                
                    <Button negative content='Delete Article' icon='delete' labelPosition='left' />
                    </div>
                </div>
            </section>
        );
    }
}
export default ArticleHero;

{/* <Card.Content>
<Image
  floated='left'
  size='mini'
  src={image||'https://static.productionready.io/images/smiley-cyrus.jpg'}
/>
<Card.Header>{username}</Card.Header>
<Card.Meta>{new Date(updatedAt).toDateString()}</Card.Meta>

</Card.Content>
</Card> */}