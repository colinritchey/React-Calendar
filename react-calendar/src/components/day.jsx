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
      console.log(`yes: ${this.state.dayNum}`);
      this.setState({ isActive: nextProps.isActive });
    }
  }

  // shouldComponentUpdate(nextProps, nextState){
  //   if(nextProps.isActive !== this.state.isActive){
  //     console.log(`yes: ${this.state.dayNum}`);
  //     this.setState({ isActive: nextProps.isActive });
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  render(){
    let classInfo = "day";
    if(this.state.isActive){
      classInfo += " active"
    }

    return(
      <td className={classInfo} onClick={(e) => this.state.handleClick(e)}>
        { this.state.dayNum }
      </td>
    )
  }
}

export default Day;
