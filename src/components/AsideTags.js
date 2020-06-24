import React from 'react';
import {Button} from 'semantic-ui-react';
import {TagsLoader} from './Loader';
class TagsAside extends React.Component{
    constructor(props){
      super(props);
      this.onClickTag = this.onClickTag.bind(this);
    }
    static get COLORLIST() {
        return ['red', 'orange', 'yellow', 'green', 'teal', 'blue','violet', 'purple', 'pink','brown'];
      }
    onClickTag(event){
      this.props.changeTag(event.target.textContent);
      // console.log(event.target.textContent);
    }
    render(){
        const {tags} = this.props;
        return (
            <aside className='tags-section'>
            <div className='tags-inner-div'>
            {
              !tags?<TagsLoader/>:
              tags.map((elem, index) =>{
                return <Button basic color={TagsAside.COLORLIST[(index%TagsAside.COLORLIST.length)]} content={elem} key={index} onClick={this.onClickTag}/>
              })
            }
              
            </div>
          </aside>
        );
    }
}
export default TagsAside;