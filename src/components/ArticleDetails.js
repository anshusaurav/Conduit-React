import React from 'react';
class ArticleDetails extends React.Component{
    render(){
        return <p>{this.props.article.body}</p>
    }
}
export default ArticleDetails;