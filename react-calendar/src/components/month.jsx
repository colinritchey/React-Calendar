import React from 'react';

import Day from './day';

class Month extends React.Component{
  constructor(props){
    super(props);

    this.state = this.props.data;
    this.state.activeDay = this.props.activeDay;

    // this.handleClick = this.handleClick.bind(this);
  }

  // handleClick(e){
  //   // e.preventDefault();
  //   console.log(e.target.innerHTML);
  //   this.setState( { activeDay: parseInt(e.target.innerHTML) });
  // }

  componentWillReceiveProps(nextProps){
    if(nextProps.activeDay !== this.state.activeDay){
      this.setState({ activeDay: nextProps.activeDay });
    }
  }

  render(){
    let startDayOfWeek = this.state.start.dayOfWeek;
    let endDay = this.state.end.dayNum;

    let dayNumCounter = 0;
    let dayOfWeekCounter = 0;

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
            [0, 1, 2, 3, 4].map((i) =>{
              return(
                <tr>
                  {
                    Object.keys(daysOfWeek).map((id) =>{

                      if(startDayOfWeek === daysOfWeek[id]
                        || (dayNumCounter > 0 && dayNumCounter < endDay)){
                        dayNumCounter++;

                        let isActive = false;
                        if(this.state.activeDay === dayNumCounter){
                          isActive = true;
                        }

                        return(
                          <Day
                            data={dayNumCounter}
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
    )
  }
}

export default Month;
