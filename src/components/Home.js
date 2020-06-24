import React from 'react'
import { Tab} from 'semantic-ui-react'
import HeroSection from './HeroSection'
import TagsAside from './TagsAside'
import ArticleList from './ArticleList'
class Home extends React.Component {
  constructor (props) {
    super(props)

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
    this.state.activeIndex = 0
  }
  
  async componentDidMount () {
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
        });
        
      } else {
        this.setState({
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
        });
        
      }
    } else {
      // https://conduit.productionready.io/api/articles
      let globalArticles = null;
      // let authorizationToken = `token {{${localStorage.getItem('token')}}}`;
      // console.log(authorizationToken);
      fetch ('https://conduit.productionready.io/api/articles',{
      method: 'GET',
    })
    .then(response => response.json())
    .then(data => {
      globalArticles = data.articles;
      this.setState({
        panes: [
          {
            menuItem: 'Global Feed',
            render: () => <Tab.Pane><ArticleList articles={globalArticles}/></Tab.Pane>
          }
        ]
      });
      console.log(data);
      // if(!data.error) {
      //   console.log(data);
      //   this.props.onLogin();
      //   localStorage.setItem('token', data.token);
      //   this.props.history.push('/');
      // }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
      
    }
  }
  render () {
    const { isLoggedIn } = this.props
    return (
      <div>
        {!isLoggedIn && <HeroSection />}
        <section className='main-section'>
          <Tab
            className='tabs-menu'
            menu={{ pointing: true }}
            panes={this.state.panes}
          />
          <TagsAside/>
        </section>
      </div>
    )
  }
}
export default Home
/**
 * setting
 */
