import React from 'react';
import {Button} from 'semantic-ui-react';
class TagsAside extends React.Component{
    static get COLORLIST() {
        return ['red', 'orange', 'yellow', 'green', 'teal', 'blue','violet', 'purple', 'pink','brown'];
      }
    render(){
        return (
            <aside className='tags-section'>
            <div className='tags-inner-div'>
            {
              TagsAside.COLORLIST.map((elem,index) =>{
                return <Button basic content={elem.toUpperCase()} key={index}/>
              })
            }
              {/* <Button content='Standard' basic />
              <Button basic color='red' content='Red' />
              <Button basic color='orange' content='Orange' />
              <Button basic color='yellow' content='Yellow' />
              <Button basic color='olive' content='Olive' />
              <Button basic color='green' content='Green' />
              <Button basic color='teal' content='Teal' />
              <Button basic color='blue' content='Blue' />
              <Button basic color='violet' content='Violet' />
              <Button basic color='purple' content='Purple' />
              <Button basic color='pink' content='Pink' />
              <Button basic color='brown' content='Brown' />
              <Button basic color='grey' content='Grey' />
              <Button basic color='black' content='Black' /> */}
            </div>
          </aside>
        );
    }
}
export default TagsAside;