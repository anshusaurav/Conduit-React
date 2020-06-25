import React from 'react'
import { Tab} from 'semantic-ui-react'
import ArticleList from './ArticleList'
class ProfileArticle extends React.Component {
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
      // console.log
      const {username} = this.props.profile;
      try {
        const url = `https://conduit.productionready.io/api/articles?author=${username}`;
        const response = await fetch(
          url,
          {
            method: 'GET'
          }
        );
        const data = await response.json();
        console.log('sarticles: ',data)
        this.setState({ sArticles: data.articles });
      } catch (err) {
        console.error('Error:', err);
      }
      try {
        const url = `https://conduit.productionready.io/api/articles?favorited=${username}`;
        const response = await fetch(
          url,
          {
            method: 'GET'
          }
        );
        const data = await response.json();
        console.log('farticles: ',data);
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
            activeIndex={activeIndex}
        onTabChange={this.handleTabChange}
        menu={{ pointing: true }}
        panes={panes}
          />
          </div>
        );
    }
}
export default ProfileArticle;
