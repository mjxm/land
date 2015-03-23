import React from 'react';
import Widgets from 'react-widgets';

const DateTimePicker = Widgets.DateTimePicker;

let JobFormFields = React.createClass({
   render: function(){
      return(
         <div>
            <label>Name<input type='text' /></label>
            <label>Date<DateTimePicker time={false} /></label>
            <label>Price<input type="text" /></label>
         </div>
      )
   }
});

export default JobFormFields;
