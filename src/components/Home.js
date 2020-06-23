import React from 'react'
import { Tab } from 'semantic-ui-react'
class Home extends React.Component {
  constructor (props) {
    super(props)
    
    if (this.props.isLoggedIn) {
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
            menuItem: 'Global Feed',
            render: () => <Tab.Pane>Tab 2 Content</Tab.Pane>
          }
        ]
      }
    }
  }
  componentDidMount () {}
  render () {
    const { isLoggedIn } = this.props
    return (
      <div>
        {!isLoggedIn && (
          <div className='hero-unsigned'>
            <h2>conduit</h2>
            <h5>A place to share your knowledge</h5>
          </div>
        )}
        <Tab menu={{ pointing: true }} panes={this.state.panes} />
      </div>
    )
  }
}
export default Home
/**
 * setting
 */
