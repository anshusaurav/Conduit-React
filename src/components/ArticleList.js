import React from 'react';
import SmallArticle from './SmallArticle';
import {Item} from 'semantic-ui-react'
import {SmallArticleLoader} from './Loader'
class ArticleList extends React.Component{
    Loaders = ()=>{
        let arr = new Array(10).fill(1);
        return arr.map(elem =><SmallArticleLoader/>)
    };
    render(){
        // this.Loaders();
        const {articles , isLoading} = this.props;
        return(
        <>
        <Item.Group>
        {
           !articles ? this.Loaders() :articles.map(article =>{
                return <SmallArticle article={article}/>
            })
        }
       
        </Item.Group>
        </>
        );
    }
}
export default ArticleList;