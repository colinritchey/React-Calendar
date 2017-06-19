import React from 'react';

import Month from './month';

class Year extends React.Component{
  constructor(props){
    super(props);

    this.state = this.props.data;
    this.state.activeDay = 15;

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    // e.preventDefault();
    console.log(e.target.innerHTML);
    this.setState( { activeDay: parseInt(e.target.innerHTML) });
  }

  render(){
    let startDayOfWeek = this.state.months[5].start.dayOfWeek;
    let endDay = this.state.months[5].end.dayNum;

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

      <Month
        data={this.state.months[5]}
        activeDay={this.state.activeDay}
        handleClick={this.handleClick}/>
      // <table>
      //   <tbody>
      //     <tr>
      //       <th>Sun</th>
      //       <th>Mon</th>
      //       <th>Tues</th>
      //       <th>Wed</th>
      //       <th>Thur</th>
      //       <th>Fri</th>
      //       <th>Sat</th>
      //     </tr>
      //     {
      //       [0, 1, 2, 3, 4].map((i) =>{
      //         return(
      //           <tr>
      //             {
      //               Object.keys(daysOfWeek).map((id) =>{
      //
      //                 if(startDayOfWeek === daysOfWeek[id]
      //                   || (dayNumCounter > 0 && dayNumCounter < endDay)){
      //                   dayNumCounter++;
      //
      //                   let activeState = "";
      //                   if(this.state.activeDay === dayNumCounter){
      //                     activeState = "active";
      //                   }
      //
      //                   return(
      //                     <td
      //                       className={activeState}
      //                       onClick={this.handleClick}
      //                       >{dayNumCounter}</td>
      //                   );
      //
      //                 } else {
      //                   return(
      //                     <td></td>
      //                   )
      //                 }
      //
      //
      //               })
      //             }
      //           </tr>
      //         )
      //       })
      //     }
      //
      //   </tbody>
      // </table>
    )
  }
}

export default Year;
