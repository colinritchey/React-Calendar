import React from 'react';

class Day extends React.Component{
  constructor(props){
    super(props);
      this.state = {
        isActive: this.props.isActive,
        handleClick: this.props.handleClick
      };
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.isActive !== this.state.isActive){
      this.setState({ isActive: nextProps.isActive });
    }
  }

  render(){
    let classInfo = "day";
    
    if(this.state.isActive){
      classInfo += " active"
    }

    if(this.props.data !== undefined){
      classInfo += " day-info"
    }

    let dateInfo = {
      day: this.props.dayNumber,
      data: this.props.data,
      month: this.props.month,
      isActive: this.props.isActive,
      handleClick: this.props.handleClick
    };

    let activeDayInfo= {
      day: dateInfo.day,
      month: dateInfo.month,
      data: dateInfo.data
    };

    return(
      <td
        key={`${dateInfo.day}-${dateInfo.month}`}
        className={ classInfo }
        onClick={ () => this.props.handleClick(activeDayInfo) }>
        { dateInfo.day }
      </td>
    )
  }
}

export default Day;
