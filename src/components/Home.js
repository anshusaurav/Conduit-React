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
    console.log('PROSP HOME ', this.props)
    const { isLoggedIn, tags, isTagClicked, changeTag, selectedTag } = this.props;
    return (
      <div>
        {!isLoggedIn && <HeroSection />}
        <section className='main-section'>
          <HomeTabsWithLoader
            isLoggedIn={isLoggedIn}
            isTagClicked={isTagClicked}
            selectedTag = {selectedTag}
          />
          <AsideTags tags={tags} changeTag={changeTag} />
        </section>
      </div>
    )
  }
}
export default Home
/**
 * setting
 */
