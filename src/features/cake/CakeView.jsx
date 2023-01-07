import React,{useState} from 'react';
import { connect } from 'react-redux';
import { ordered,restocked } from './cakeSlice';


const CakeView = (props) => {
    const { num_of_cakes} = props.cakes
    const [inputVal,setInputVal] = useState(null)

  return (
    <div>
      <h3>Number of cakes : {num_of_cakes}</h3>
      <input 
      type='number' 
      value = {inputVal}
      onChange = {e => setInputVal(e.target.value)}
      />
      <button
      onClick = {() => props.addOneCake() }
      >ordered cake</button>
      <button
      onClick = { () => props.addMoreCakes(Number(inputVal))}
      >restocked cake</button>
    </div>
  );
}

const mapStateToProps = state => { 
    console.log(state);
    return { 
        cakes:state.cake
    }
}

const mapDispatchToProps = dispatch => { 
    return{ 
        addOneCake : () => dispatch(ordered()),
        addMoreCakes : (inputVal) => dispatch(restocked(inputVal))
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (CakeView);
