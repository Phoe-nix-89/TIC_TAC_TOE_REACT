import Icon from '../Icons/Icon.jsx';
function Card(props) {
    if(props.player == 'X'){
        return <Icon icon="cross" i={props.i} clicked={props.clicked} />;
    }
    else if(props.player == 'O'){
        return <Icon icon="circle" i={props.i} clicked={props.clicked} />;
    }
    else{
        return <Icon i={props.i} idx={props.idx} check={props.check} clicked={props.clicked} value={props.value} />
    }
}

export default Card;