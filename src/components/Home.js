import React from 'react'
class Home extends React.Component {
  constructor (props) {
    super(props);

    
  }
  componentDidMount(){
      
  }
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
        {

        }
      </div>
    )
  }
}
export default Home
/**
 * setting
 */
