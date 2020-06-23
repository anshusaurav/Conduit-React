import React from 'react'
import { Tab, Button } from 'semantic-ui-react'
class ProfileArticle extends React.Component {
    constructor(props){
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
    }
    render() {
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
