import React from 'react';
import {Button} from 'semantic-ui-react'
class ProfileHero extends React.Component{
    render() {
        return (
            <section className='profile-hero-section'>
                <div className='profile-picture-div'>
                <img src='https://avatars1.githubusercontent.com/u/11404667?s=460&u=869c309379e8be4b2ce089693e5bcdaa37f602cf&v=4' alt=''></img>
                </div>
                <div className='profile-settings-btn-div'>
                    <Button content='Edit Profile Settings' icon='setting' labelPosition='left' />
                </div>
            </section>
        );
    }
}
export default ProfileHero;