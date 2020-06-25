import React from 'react'
import { Tab} from 'semantic-ui-react'
import ArticleList from './ArticleList'
class ProfileArticle extends React.Component {
    
  /*constructor(props){
        super(props);
        this.state = {
            panes: [
              {
                menuItem: 'My Articles',
                render: () => <Tab.Pane>Tab 1 Content</Tab.Pane>
              },
              {
                menuItem: 'Favorited Articles',
                render: () => <Tab.Pane>Tab 2 Content</Tab.Pane>
              }
              
            ]
          }
    }*/
    constructor(props){
      super(props);
      this.state = {
        activeIndex : 0,
        sArticle :null,
        fArticle: null
      }
    }
    handleTabChange = (e, { activeIndex }) => this.setState({ activeIndex })
    async componentDidMount(){
      try {
        const url = `https://conduit.productionready.io/api/articles?author=Chinnodu`;
        const response = await fetch(
          'https://conduit.productionready.io/api/articles',
          {
            method: 'GET'
          }
        );
        const data = await response.json();
        this.setState({ sArticles: data.articles });
      } catch (err) {
        console.error('Error:', err);
      }
      try {
        const url = `https://conduit.productionready.io/api/articles?favorited=Chinnodu`;
        const response = await fetch(
          'https://conduit.productionready.io/api/articles',
          {
            method: 'GET'
          }
        );
        const data = await response.json();
        this.setState({ fArticles: data.articles });
      } catch (err) {
        console.error('Error:', err);
      }
    }
    render() {
      
      const {activeIndex, sArticles, fArticles} = this.state;
      let panes = [
        {
          menuItem: 'My Articles',
          render: () => (
            <Tab.Pane>
              <ArticleList articles={sArticles} />
            </Tab.Pane>
          )
        },
        {
          menuItem: 'Favorited Articles',
          render: () => (
            <Tab.Pane>
              <ArticleList articles={fArticles} />
            </Tab.Pane>
          )
        }
      ];
        return (
            <div className='profile-articles'>
            <Tab
            className='tabs-menu'
            menu={{ pointing: true }}
            panes={this.state.panes}
          />
          </div>
        );
    }
}
export default ProfileArticle;
