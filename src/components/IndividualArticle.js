import React from 'react';
import {withRouter} from 'react-router-dom';
class IndividualArticle extends React.Component{
    constructor(props){
        super(props);
        this.state={article: null, comments: null}
        
    }
    async componentDidMount(){
        // console.log(window.location.href);
        const path= this.props.history.location.pathname;

        // https://conduit.productionready.io/api/articles/express-6bfonv/comments
        // https://conduit.productionready.io/api/articles/express-6bfonv
        try {
        let response = await fetch(
          `https://conduit.productionready.io/api${path}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            }
          }
        )
        let data = await response.json();
        console.log(data);
        if (!data.error) {
          
        }
      } catch (err) {
        console.error('Error:', err)
      }

    }
    render() {
        // const {title} = this.props.slug;
        return (
            <h2>Article Title</h2>
        )
    }
}
export default withRouter(IndividualArticle);