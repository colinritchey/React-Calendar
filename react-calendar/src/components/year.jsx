import React from 'react';

import Month from './month';

class Year extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      months: this.props.data.months,
      activeDay: { day: null, month: null, data: { type: "" } }
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(activeDayInfo){
    this.setState( { activeDay: activeDayInfo });
  }

  render(){
    let activeDay = this.state.activeDay;
    let activeDayInfo = activeDay.data ? activeDay.data.type : "";

    if(activeDay.day === null && activeDay.month === null){
      activeDay= { day: "unselected", month: "unselected" };
    }

    return(
      <div className="year-container">

        <div className="months">
          {
            Object.keys(this.state.months).map((id) => {
              return <Month
                key={this.state.months[id].month}
                data={this.state.months[id]}
                activeDay={this.state.activeDay}
                handleClick={this.handleClick}/>
              })
          }

        </div>
        <div className="sidebar">
          <div className="selected-day">
            <p>Day: { activeDay.day }</p>
            <p>Month: { activeDay.month }</p>
            <p>Info: { activeDayInfo }</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Year;
