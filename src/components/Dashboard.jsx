import React, { Component } from "react";
import NavBar from "../components/NavBar";
import RecordItem from "../components/RecordItem";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = { idToken: "" };
  }

  async updateIdToken() {
    const token = await this.props.currentUser.user.getIdToken();
    this.setState({ idToken: token });
    console.log(token);
    // console.log('currentUser - ', this.props.currentUser)
  }

  componentDidMount() {
    this.updateIdToken();
    // this.setState({idToken: 'test'})
  }

  render() {
    return (
      <div className="container">
        <NavBar userName={this.props.currentUser.user.email} />
        {/* <div>User Logged In - {this.state.idToken}</div> */}
        <div className="row">
          <div className="col-2"></div>
          <div className="col-8">
            <ul className="list-group">
              <li className="list-group-item">
                <RecordItem />
              </li>
              <li className="list-group-item">
                <RecordItem />
              </li>
              <li className="list-group-item">
                <RecordItem />
              </li>
              <li className="list-group-item">
                <RecordItem />
              </li>
              <li className="list-group-item">
                <RecordItem />
              </li>
            </ul>
          </div>
          <div className="col"></div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
