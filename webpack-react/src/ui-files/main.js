
import data from '../dualicons.json';
import Icon from './Icon';

const {items} = data;


function View(){

    const renderedList = items.map((item, index)=>{
        return <Icon key={index} item={item}></Icon>
    })
    return (<div>
        {renderedList}
    </div>);
    
}

export default View;

