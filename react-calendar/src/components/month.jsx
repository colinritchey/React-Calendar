import React from 'react';

import Day from './day';

class Month extends React.Component{
  constructor(props){
    super(props);

    this.state = this.props.data;
    this.state.activeDay = this.props.activeDay;

    this.populateCell = this.populateCell.bind(this);

  }

  componentWillReceiveProps(nextProps){
    if(nextProps.activeDay !== this.state.activeDay ){
      this.setState({ activeDay: nextProps.activeDay });
    }
  }

  populateCell(dayNumCounter, dayOfWeek){
    let startDayOfWeek = this.state.start.dayOfWeek;
    let endDay = this.state.end.dayNum;
    let dayInfo = "";

    if(startDayOfWeek === dayOfWeek
      || (dayNumCounter > 0 && dayNumCounter < endDay)){

      let dayInfo = "" || this.state.info[dayNumCounter];
      let isActive = false;

      if(this.state.activeDay.day === dayNumCounter
        && this.state.activeDay.month === this.state.month){
        isActive = true;
      }

      return(
        <Day
          key={`${this.state.month}-${dayNumCounter}`}
          dayNumber={dayNumCounter}
          data={dayInfo}
          month={this.state.month}
          isActive={isActive}
          handleClick={this.props.handleClick}
        />
      );

    } else {
      return(
        <td></td>
      )
    }
  }

  render(){
    let startDayOfWeek = this.state.start.dayOfWeek;
    let endDay = this.state.end.dayNum;
    let dayNumCounter = 0;

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
      <div>
        <h2>{this.state.month}</h2>

        <table>
          <tbody>
            <tr>
              <th>Sun</th>
              <th>Mon</th>
              <th>Tues</th>
              <th>Wed</th>
              <th>Thur</th>
              <th>Fri</th>
              <th>Sat</th>
            </tr>
            {
              [...Array(this.state.numberOfWeeks).keys()].map((i) =>{
                return(
                  <tr key={`${this.state.month}-week-${i}`}>
                    {
                      Object.keys(daysOfWeek).map((id) => {
                        
                        if(startDayOfWeek === daysOfWeek[id]
                          || (dayNumCounter > 0 && dayNumCounter < endDay)){
                            dayNumCounter++;
                        }
                        return this.populateCell(dayNumCounter, daysOfWeek[id]);
                      })
                    }
                  </tr>
                )
              })
            }

          </tbody>
        </table>
      </div>
    )
  }
}

export default Month;
