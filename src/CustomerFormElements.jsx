import React from 'react';
import AddressFormElements from './AddressFormElements';

class CustomerFormElements extends React.Component{
  constructor(props){
    super(props);
    this.state = {numberOfAddresses:this.props.customer.addresses.length};
  }

  addAddress(that){
    console.log(this);
    this.setState({numberOfAddresses:this.state.numberOfAddresses + 1});
  }

  deleteAddress(){
    this.setState({numberOfAddresses:this.state.numberOfAddresses - 1});
  }

  render(){
    var {customer} = this.props;

    var addressElements = [];
    customer.addresses.forEach(function(address){
      addressElements.push(<div><AddressFormElements address={address}/></div>);
    });

    for(let i = customer.addresses.length; i < this.state.numberOfAddresses; i++){
      addressElements.push(<div><AddressFormElements /> <div onClick={this.deleteAddress.bind(this)}>Delete Address</div></div>);
    }
    return (
      <div>
        <div>
          <label for="name">Name</label>
          <input
            type="text"
            name="name"
            defaultvalue="{customer.name}/" />
        </div>
        <div>
          <label for="day">Day</label>
          <input
            type="text"
            name="day"
            defaultvalue="{customer.day}/" />
        </div>
        <div>
          <label for="price">Price</label>
          <input
            type="text"
            name="price"
            defaultvalue="{customer.price}/" />
        </div>
        {addressElements}
        <div onClick={this.addAddress.bind(this)}>
          Add Address
        </div>
      </div>
      )
    }
}

CustomerFormElements.defaultProps = {customer:{
  name:"",
  day:"",
  price:"",
  addresses:[{name:"",street:"",city:"",state:"",zip:""}]
}};

export default CustomerFormElements;
