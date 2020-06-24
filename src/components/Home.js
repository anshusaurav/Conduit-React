import React from 'react'

import HeroSection from './HeroSection'
import AsideTags from './AsideTags'

import HomeTabsWithLoader from './HomeTabsWithLoader'
class Home extends React.Component {
  constructor (props) {
    super(props)

    this.state = { activeIndex: 0 }
  }
  
  render () {
    const { isLoggedIn } = this.props
    return (
      <div>
        {!isLoggedIn && <HeroSection />}
        <section className='main-section'>
          <HomeTabsWithLoader
            isLoggedIn={this.props.isLoggedIn}
            isTagClicked={this.props.isTagClicked}
          />
          <AsideTags />
        </section>
      </div>
    )
  }
}
export default Home
/**
 * setting
 */
