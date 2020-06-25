import React from 'react'
import { Button } from 'semantic-ui-react'
class ProfileHero extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    const { username, bio, image, following } = this.props.profile;
    const { currentUser } = this.props
    return (
      <section className='profile-hero-section'>
        <div className='profile-picture-div'>
          <img src={image} alt=''></img>
        </div>
        <h3>{username}</h3>
        {bio && <h4>{bio}</h4>}
        {currentUser && currentUser.username === username && 
          <div className='profile-settings-btn-div'>
            <Button
              content='Edit Profile Settings'
              icon='setting'
              labelPosition='left'
            />
          </div>
        }
        {currentUser && currentUser.username !== username && following && 
          <div className='profile-settings-btn-div'>
            <Button content='Unfollow' icon='remove' labelPosition='left' />
          </div>
        }
        {currentUser && currentUser.username !== username && !following && 
          <div className='profile-settings-btn-div'>
            <Button content='Follow' icon='add' labelPosition='left' />
          </div>
        }
      </section>
    )
  }
}
export default ProfileHero
