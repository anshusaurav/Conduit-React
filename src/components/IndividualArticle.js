import React from 'react';
import { withRouter } from 'react-router-dom';
import { FullPageFormLoader } from './Loader';
import ArticleHero  from './ArticleHero';
import ArticleDetails from './ArticleDetails';
class IndividualArticle extends React.Component {
  constructor (props) {
    super(props)
    this.state = { article: null, comments: null }
  }
  async componentDidMount () {
    // console.log(window.location.href);
    const path = this.props.history.location.pathname
    const { token } = localStorage
    // https://conduit.productionready.io/api/articles/express-6bfonv/comments
    // https://conduit.productionready.io/api/articles/express-6bfonv
    try {
      let response = await fetch(
        `https://conduit.productionready.io/api${path}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${token}`
          }
        }
      )
      let data = await response.json()
      console.log(data)
      if (!data.error) {
        this.setState({ article: data.article })
      }
    } catch (err) {
      console.error('Error:', err)
    }
    try {
        let response = await fetch(
          `https://conduit.productionready.io/api${path}/comments`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Token ${token}`
            }
          }
        )
        let data = await response.json()
        console.log(data)
        if (!data.error) {
          this.setState({ comments: data.comments })
        }
      } catch (err) {
        console.error('Error:', err)
      }
  }
  render () {
    // const {title} = this.props.slug;
    const {article, comments} = this.state;
    return (
        <>
        {
            !article?(
                <>
                <FullPageFormLoader/>
                <FullPageFormLoader/>
                </>
            ):(<div className='profile-div'>
            <ArticleHero article={article} currentUser={this.props.currentUser}/>
            <ArticleDetails article={article}/>
            </div>)
        }
        </>
    )
  }
}
export default withRouter(IndividualArticle);
