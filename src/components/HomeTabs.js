import React from 'react'
import { Tab } from 'semantic-ui-react'
import ArticleList from './ArticleList'
class HomeTabs extends React.Component {
  constructor (props) {
    super(props)
    this.state= {isLoading: false};
    if (this.props.isLoggedIn) {
      if (this.props.isTagClicked) {
        this.state = {
          panes: [
            {
              menuItem: 'Your Feed',
              render: () => <Tab.Pane>Tab 1 Content</Tab.Pane>
            },
            {
              menuItem: 'Global Feed',
              render: () => <Tab.Pane>Tab 2 Content</Tab.Pane>
            },
            {
              menuItem: '#Tag',
              render: () => <Tab.Pane>Tab 3 Content</Tab.Pane>
            }
          ]
        }
      } else {
        this.state = {
          panes: [
            {
              menuItem: 'Your Feed',
              render: () => <Tab.Pane>Tab 1 Content</Tab.Pane>
            },
            {
              menuItem: 'Global Feed',
              render: () => <Tab.Pane>Tab 2 Content</Tab.Pane>
            }
          ]
        }
      }
    } else {
      this.state = {
        panes: [
          {
            menuItem: 'Global Feed',
            render: () => <Tab.Pane>Tab 2 Content</Tab.Pane>
          }
        ]
      }
    }
  }
  async componentDidMount () {
    this.setState({isLoading: true});
    if (this.props.isLoggedIn) {
      if (this.props.isTagClicked) {
        this.setState({
          panes: [
            {
              menuItem: 'Your Feed',
              render: () => <Tab.Pane>Tab 1 Content</Tab.Pane>
            },
            {
              menuItem: 'Global Feed',
              render: () => <Tab.Pane>Tab 2 Content</Tab.Pane>
            },
            {
              menuItem: '#Tag',
              render: () => <Tab.Pane>Tab 3 Content</Tab.Pane>
            }
          ]
        })
      } else {
        let globalArticles = null
        let feedArticles = null
        //   let authorizationToken = `token {{${localStorage.getItem('token')}}}`;
        //   console.log(authorizationToken);

        try {
          let response = await fetch(
            'https://conduit.productionready.io/api/articles',
            {
              method: 'GET'
            }
          )
          let data = await response.json();
          globalArticles = data.articles;
          console.log(globalArticles)
          console.log(localStorage.token);
            response = await fetch(
              'https://conduit.productionready.io/api/articles/feed',{
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Token ${localStorage.token}`
              }
          }
            );
            data = await response.json();
            feedArticles = data.articles;
            this.setState({isLoading: false});
            console.log(feedArticles);
          this.setState({
            panes: [
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
          })
        } catch (err) {
          console.error('Error:', err)
        }
      }
    } else {
      // https://conduit.productionready.io/api/articles
      let globalArticles = null
      // let authorizationToken = `token {{${localStorage.getItem('token')}}}`;
      // console.log(authorizationToken);
      try {
        let response = await fetch(
          'https://conduit.productionready.io/api/articles',
          {
            method: 'GET'
          }
        )
        let data = await response.json()
        globalArticles = data.articles
        this.setState({
          panes: [
            {
              menuItem: 'Global Feed',
              render: () => (
                <Tab.Pane>
                  <ArticleList articles={globalArticles} />
                </Tab.Pane>
              )
            }
          ]
        })
      } catch (err) {
        console.error('Error:', err)
      }
    }
  }
  render () {
    return (
      <Tab
        className='tabs-menu'
        menu={{ pointing: true }}
        panes={this.state.panes}
      />
    )
  }
}
export default HomeTabs
