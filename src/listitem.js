import React from 'react';
import './listitem.css';
import  {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FlipMove from 'react-flip-move';

function Listitem(props){
    
        const items=props.items;
    console.log('Error Log', { items: items });
        const listitems=items.map(item =>
                  {
                      return <div className="list" key={item.key}>
                                <p><input type="text"
                                id={item.key}
                                value={item.text}
                                onChange={
                                    (e) =>{
                                        props.setUpdate(e.target.value, item.key)
                                    }
                                }/>
                              <span>
                                  <FontAwesomeIcon className="faicons" 
                                  icon='trash'
                                  onClick={() =>props.deleteitem(item.key)
                                  } />
                              </span>
                                </p>
                                
                            </div>
                   })
        
        return(
            <div>
            <FlipMove duration={300} easing="ease-in-out">
            {listitems}
            </FlipMove>
            </div>
        )
    
        
}
export default Listitem;