import React, { Component } from "react";

class RecordItem extends Component {
  state = {
    confidencelevel: 0,
    imageUrl:
      "https://s29843.pcdn.co/blog/wp-content/uploads/sites/2/2019/06/YouTube-Thumbnail-Sizes.png",
    transactionId: "xxxxxxxxxxxxx",
    amount: 1000.0,
    userVerified: false,
    description: "",
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container .bg-light">
        <div className="row mt-1 p-1">
          <div className="col-3">
            <img
              src={this.state.imageUrl}
              alt="record thumbnail"
              className="img-thumbnail w-100 h-100"
            />
          </div>
          <div className="col">
            <p className="text-sm-left">
              Transaction Id - {this.state.transactionId} Amount -{" "}
              {this.state.amount}
            </p>
          </div>
          <div className="col">
            <button type="button" className="btn btn-success btn-block">
              Accept
            </button>
            <button type="button" className="btn btn-danger btn-block">
              Deny
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default RecordItem;
