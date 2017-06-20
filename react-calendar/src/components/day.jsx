import React from 'react';

class Day extends React.Component{
  constructor(props){
    super(props);

      this.state = {
        dayNum: this.props.data,
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

    let dateInfo = { day: this.state.dayNum, month: this.props.month };

    return(
      <td
        value={dateInfo}
        className={classInfo}
        onClick={() => this.state.handleClick(dateInfo)}>
        { this.state.dayNum }
      </td>
    )
  }
}

export default Day;
