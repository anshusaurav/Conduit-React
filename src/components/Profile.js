import React from 'react';
import ProfileHero from './ProfileHero'
import {withRouter} from 'react-router-dom'
import ProfileArticles from './ProfileArticles'
import {FullPageNormalLoader } from './Loader'
class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state = {profile:null};

    }
    async componentDidMount(){
        const path = this.props.history.location.pathname;
        const usedPath = path.substring(1);
        const index = usedPath.indexOf('/');
        const uName = (usedPath.substring(index+1));
        const {token} = localStorage;
        const url = `https://conduit.productionready.io/api/profiles/${uName}`;
        // if(token)   {
        try{
        let response;
        if(token) {
        response= await fetch(
            url,
            {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Token ${token}`
            }
            }
          )
        }
        else
            {
                response= await fetch(
                    url,
                    {
                      method: 'GET',
                      headers: {
                        'Content-Type': 'application/json'
                    }
                    }
                  )
            }
          let data = await response.json()
          console.log(data);
          if (!data.error) {
            this.setState({ profile: data.profile })
          }
        } catch (err) {
          console.error('Error:', err)
        }
        
        
    }
    render() {
        return (
            <div className='profile-div'>
            {this.state.profile?<ProfileHero currentUser={this.props.currentUser} profile={this.state.profile}/>:<FullPageNormalLoader />
            }<ProfileArticles/>
            </div>
        );
    }
}
export default withRouter(Profile);

//https://conduit.productionready.io/api/articles?author=Chinnodu&limit=5&offset=0
//https://conduit.productionready.io/api/articles?favorited=Chinnodu&limit=5&offset=0