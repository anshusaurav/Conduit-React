import React from 'react'
import { Tab, Button } from 'semantic-ui-react'
import HeroSection from './HeroSection'
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
  static get COLORLIST() {
    return ['re d', 'orange', 'yellow', 'green', 'teal', 'blue','violet', 'purple', 'pink','brown'];
  }
  componentDidMount () {}
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
          <aside className='tags-section'>
            <div className='tags-inner-div'>
            {
              Home.COLORLIST.map((elem,index) =>{
                return <Button basic content={elem.toUpperCase()} key={index}/>
              })
            }
              {/* <Button content='Standard' basic />
              <Button basic color='red' content='Red' />
              <Button basic color='orange' content='Orange' />
              <Button basic color='yellow' content='Yellow' />
              <Button basic color='olive' content='Olive' />
              <Button basic color='green' content='Green' />
              <Button basic color='teal' content='Teal' />
              <Button basic color='blue' content='Blue' />
              <Button basic color='violet' content='Violet' />
              <Button basic color='purple' content='Purple' />
              <Button basic color='pink' content='Pink' />
              <Button basic color='brown' content='Brown' />
              <Button basic color='grey' content='Grey' />
              <Button basic color='black' content='Black' /> */}
            </div>
          </aside>
        </section>
      </div>
    )
  }
}
export default Home
/**
 * setting
 */
