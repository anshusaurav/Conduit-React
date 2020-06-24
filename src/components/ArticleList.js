import React from 'react';
import SmallArticle from './SmallArticle';
import {Item} from 'semantic-ui-react'
class ArticleList extends React.Component{
    
    render(){
        const {articles} = this.props;
        return(
        <>
        <Item.Group>
        {
            articles.map(article =>{
                return <SmallArticle article={article}/>
            })
        }
       
        </Item.Group>
        </>
        );
    }
}
export default ArticleList;