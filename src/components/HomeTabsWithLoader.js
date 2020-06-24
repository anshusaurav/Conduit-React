import React from 'react'
import { Tab } from 'semantic-ui-react'
import ArticleList from './ArticleList'
class HomeTabsWithLoader extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isLoading: false,
      activeIndex: 1,
      globalArticles: null,
      feedArticles: null,
      tagArticles: null
    }
  }
  handleTabChange = (e, { activeIndex }) => this.state({ activeIndex })

  async componentDidMount () {
    this.setState({ isLoading: true })
    const { isLoggedIn, isTagClicked } = this.props
    try {
      const response = await fetch(
        'https://conduit.productionready.io/api/articles',
        {
          method: 'GET'
        }
      )
      const data = await response.json()
      this.setState({ globalArticles: data.articles })
      console.log(this.state.globalArticles)
    } catch (err) {
      console.error('Error:', err)
    }
    if (isLoggedIn) {
      try {
        console.log(localStorage.token)
        const response = await fetch(
          'https://conduit.productionready.io/api/articles/feed',
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Token ${localStorage.token}`
            }
          }
        )
        const data = await response.json()
        this.setState({ feedArticles: data.articles })
      } catch (err) {
        console.error('Error:', err)
      }
    }
    if (isTagClicked) {
      try {
        console.log(localStorage.token)
        const response = await fetch(
          'https://conduit.productionready.io/api/articles?tag=javascript',
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          }
        )
        const data = await response.json()
        this.setState({ tagArticles: data.articles })
      } catch (err) {
        console.error('Error:', err)
      }
    }
    this.setState({ isLoading: false })
    //https://conduit.productionready.io/api/articles?tag=animation
  }
  render () {
    let panes
    const {
      activeIndex,
      isLoading,
      feedArticles,
      globalArticles,
      tagArticles
    } = this.state
    if (this.props.isLoggedIn) {
      if (this.props.isTagClicked) {
        panes = [
          {
            menuItem: 'Your Feed',
            render: () => (
              <Tab.Pane>
                <ArticleList articles={feedArticles} />
              </Tab.Pane>
            )
          },
          {
            menuItem: 'Global Feed',
            render: () => (
              <Tab.Pane>
                <ArticleList articles={globalArticles} />
              </Tab.Pane>
            )
          },
          {
            menuItem: '#Tag',
            render: () => (
              <Tab.Pane>
                <ArticleList articles={tagArticles} />
              </Tab.Pane>
            )
          }
        ]
      } else {
        panes = [
          {
            menuItem: 'Your Feed',
            render: () => (
              <Tab.Pane>
                <ArticleList articles={feedArticles} />
              </Tab.Pane>
            )
          },
          {
            menuItem: 'Global Feed',
            render: () => (
              <Tab.Pane>
                <ArticleList articles={globalArticles} />
              </Tab.Pane>
            )
          }
        ]
      }
    } else {
      panes = [
        {
          menuItem: 'Global Feed',
          render: () => (
            <Tab.Pane>
              <ArticleList articles={globalArticles} isLoading={isLoading} />
            </Tab.Pane>
          )
        }
      ]
    }
    return (
      
      <Tab
        className='tabs-menu'
        activeIndex={activeIndex}
        onTabChange={this.handleTabChange}
        menu={{ pointing: true }}
        panes={panes}
      />
    )
  }
}
export default HomeTabsWithLoader
