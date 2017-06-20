import React from 'react';

import Day from './day';

class Month extends React.Component{
  constructor(props){
    super(props);

    this.state = this.props.data;
    this.state.activeDay = this.props.activeDay;

  }

  componentWillReceiveProps(nextProps){
    if(nextProps.activeDay !== this.state.activeDay ){
      this.setState({ activeDay: nextProps.activeDay });
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
                  <tr>
                    {
                      Object.keys(daysOfWeek).map((id) =>{

                        if(startDayOfWeek === daysOfWeek[id]
                          || (dayNumCounter > 0 && dayNumCounter < endDay)){
                          dayNumCounter++;

                          let isActive = false;
                          if(this.state.activeDay.day === dayNumCounter
                            && this.state.activeDay.month === this.state.month){
                            isActive = true;
                          }

                          return(
                            <Day
                              data={dayNumCounter}
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
