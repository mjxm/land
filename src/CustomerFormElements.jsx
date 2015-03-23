import React from 'react';
import AddressFormElements from './AddressFormElements';

let CustomerFormElements = React.createClass({
   getInitialState: function(){
      return {newAddresses:0};
   },
   getDefaultProps : function(){
      return {customer:{
         name:"",
         day:"",
         price:"",
         addresses:[{name:"",street:"",city:"",state:"",zip:""}]
      }}
   },
   addAddress : function(){
      this.setState({newAddresses:this.state.newAddresses + 1});
   },
   deleteAddress : function(){
      this.setState({newAddresses:this.state.newAddresses - 1});
   },
   render : function(){
      const {customer} = this.props;

      let addressElements = [];
      customer.addresses.forEach(function(address){
         addressElements.push(<div><AddressFormElements key={address.name} address={address}/></div>);
      });

      console.log(this);
      for(let i = 0; i < this.state.newAddresses; i++){
         addressElements.push(<div>
            <AddressFormElements />
         </div>);
      }

      if(this.state.newAddresses > 0){
         addressElements.push(<input type='button' onClick={this.deleteAddress} value='Delete Address'/>);
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
            <div>
               <input type='button' onClick={this.addAddress} value='Add Address' />
            </div>
            <div>

            </div>
         </div>
      )
   }
});


export default CustomerFormElements;
