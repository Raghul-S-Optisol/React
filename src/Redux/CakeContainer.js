import React from 'react'
import { connect } from 'react-redux';
import { buyCake } from './Cakes';


const mapStateToProps = state =>{
    return {
        noOfCakes: state.noOfCakes,
    }   
};

const mapDispatchToProps = dispatch =>{
    return {
        buyCake: ()=> dispatch(buyCake()),
    }   
};


function CakeContainer(props) {
  return (
    <div>
      <h3> Nuber of cakes cakes {props.noOfCakes}</h3>
      <button onClick={props.buyCake}>Buy cakes</button>  
    </div>
  )
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer)
