import { useState } from 'react';
import { FaCircle, FaPen, FaTimes } from 'react-icons/fa';
import './Icon.css';
function Icon(props) {
    const [one,setOne] = useState(<FaCircle />)
    const [two,setTwo] = useState(<FaPen />)
    const [three,setThree] = useState(<FaTimes />)

    // const [i,setI] = useState(0);
    if(props.icon == 'circle'){
        return <div className='circle'><FaCircle /></div>
    }
    else if(props.icon == 'cross'){
        return <div className='cross'><FaTimes /></div>
    }
    else{
        return <div className='pen' onClick={() => {
            if((props.i)%2 == 0){
                if(props.check[props.idx] == 0){
                    setTwo(<FaCircle />);
                    props.value(props.i+1);
                    props.check[props.idx] = 2;
                    // props.clicked = true;
                }
            }
            else{
                if(props.check[props.idx] == 0){
                    setTwo(<FaTimes />);
                    props.value(props.i+1);
                    props.check[props.idx] = 1;
                    // props.clicked = true;
                }
            }
            // console.log(props.check);

            setTimeout(() => {
                let arr = props.check;
                if((arr[0] == 2 && arr[1] == 2 && arr[2] == 2) || (arr[3] == 2 && arr[4] == 2 && arr[5] == 2) || (arr[6] == 2 && arr[7] == 2 && arr[8] == 2) || (arr[0] == 2 && arr[3] == 2 && arr[6] == 2) || (arr[4] == 2 && arr[1] == 2 && arr[7] == 2) || (arr[8] == 2 && arr[5] == 2 && arr[2] == 2) || (arr[0] == 2 && arr[4] == 2 && arr[8] == 2) || (arr[4] == 2 && arr[6] == 2 && arr[2] == 2)){
                    alert(`Player using O has won the match`);
                    window.location.reload();
                }
                else if((arr[0] == 1 && arr[1] == 1 && arr[2] == 1) || (arr[3] == 1 && arr[4] == 1 && arr[5] == 1) || (arr[6] == 1 && arr[7] == 1 && arr[8] == 1) || (arr[0] == 1 && arr[3] == 1 && arr[6] == 1) || (arr[4] == 1 && arr[1] == 1 && arr[7] == 1) || (arr[8] == 1 && arr[5] == 1 && arr[2] == 1) || (arr[0] == 1 && arr[4] == 1 && arr[8] == 1) || (arr[4] == 1 && arr[6] == 1 && arr[2] == 1)){
                    alert(`Player using X has won the match`)
                    window.location.reload();
                }
            },1000)
        }}>{two}</div>
    }
}

export default Icon;