import React from 'react';

import Month from './month';

class Year extends React.Component{
  constructor(props){
    super(props);

    this.state = this.props.data;
    this.state.activeDay = { day: null, month: null };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(dateInfo){
    this.setState( { activeDay: dateInfo });
  }

  render(){
    let activeDay = this.state.activeDay;

    if(activeDay.day === null && activeDay.month === null){
      activeDay= { day: "unselected", month: "unselected" };
    }

    let daysOfWeek = {
      0: "Sunday",
      1: "Monday",
      2: "Tuesday",
      3: "Wednesday",
      4: "Thursday",
      5: "Friday",
      6: "Saturday"
    }

    return(
      <div className="year-container">

        <div className="months">
          <Month
            data={this.state.months[5]}
            activeDay={this.state.activeDay}
            handleClick={this.handleClick}/>

          <Month
            data={this.state.months[6]}
            activeDay={this.state.activeDay}
            handleClick={this.handleClick}/>
        </div>
        <div className="sidebar">
          <div className="selected-day">
            <p>Selected Day: {activeDay.day}</p>
            <p>Selected Month: {activeDay.month}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Year;
