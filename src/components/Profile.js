import React from 'react';
import ProfileHero from './ProfileHero'
import ProfileArticles from './ProfileArticles'
class Profile extends React.Component{
    render() {
        return (
            <div className='profile-div'>
            <ProfileHero />
            <ProfileArticles/>
            </div>
        );
    }
}
export default Profile;