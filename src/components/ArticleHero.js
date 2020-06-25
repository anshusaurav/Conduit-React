import React from 'react'
import { Button} from 'semantic-ui-react'
import ArticleAuthor from './ArticleAuthor'
class ArticleHero extends React.Component {
  render () {
    const { title} = this.props.article;
    const { currentUser, article } = this.props
    return (
      <section className='article-hero-section'>
        <h3 className='article-title'>{title}</h3>

        <div className='article-header-grid'>
          <div>
            <ArticleAuthor article={this.props.article} />
          </div>
          {currentUser.username === article.author.username && (
            <div className='article-hero-btn-grp'>
              <div>
                <Button
                  content='Edit Article '
                  icon='edit'
                  labelPosition='left'
                />
              </div>
              <div>
                <Button
                  negative
                  content='Delete Article'
                  icon='delete'
                  labelPosition='left'
                />
              </div>
            </div>
          )}
        </div>
      </section>
    )
  }
}
export default ArticleHero

