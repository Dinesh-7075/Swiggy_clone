import React from "react";

//class based component

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);

        this.state = {
            count:0,
        }
    }

    render() {
      const {location,GitHub,mobileNum} = this.props;
      const {count} = this.state;
        return(
            <div className="userCard">
                <h2>Name: {this.props.name}</h2>
                <h3>Location: {location}</h3>
                <h4>GitHub: <a href={GitHub} target="_blank">{GitHub}</a></h4>
                <h5>Mobile Number: {mobileNum}</h5>
                <span>count: {count} &nbsp;</span>
                <button onClick={()=> {
                   return this.setState({count:this.state.count+1});
                }}>Inc</button>
            </div>
        )
    }
}

export default UserClass;