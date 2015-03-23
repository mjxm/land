import React from 'react';

let AddressFormElements = React.createClass({
  getDefaultProps: function(){
     return {address:{name:"",street:"",city:"",state:"",zip:""}};
 },
  render: function(){
    return (
      <div style={{clear:"both"}}>
        <div>
          <label for="name">Name</label>
          <input
            type="text"
            name="name"
            defaultValue={this.props.address.name}/>
        </div>
        <div>
          <label for="street">Street</label>
          <input
            type="text"
            name="street"
            defaultValue={this.props.address.street}/>
        </div>
        <div>
          <label for="city">City</label>
          <input
            type="text"
            name="city"
            defaultValue={this.props.address.city} />
        </div>
        <div>
          <label for="state">State</label>
          <input
            type="text"
            name="state"
            defaultValue={this.props.address.state}/>
        </div>
        <div>
          <label for="zip">Zip</label>
          <input
            type="text"
            name="zip"
            defaultValue={this.props.address.zip}/>
        </div>
      </div>
    )
  }
});
export default AddressFormElements;
