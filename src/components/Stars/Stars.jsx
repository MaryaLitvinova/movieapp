import React, { Component } from "react";
import { Rate } from "antd";
import "./Stars.css";

import postRequest from "../../service/postRequest";

export default class Stars extends Component {
  state = {
    starValue: null,
  };

  componentDidMount() {
    const { id, rating } = this.props;

    if (rating) {
      this.setState({
        starValue: rating,
      });
    } else {
      this.setState({
        starValue: Number(localStorage.getItem(`${id}`)),
      });
    }
  }

  componentDidUpdate() {
    const { id } = this.props;
    console.log(this.props);
    const { starValue } = this.state;
    if (id && starValue) {
      postRequest(id, starValue);
    }
  }

  onStarsChange = (event) => {
    this.setState({
      starValue: event,
    });
  };
  render() {
    const { starValue } = this.state;
    return (
      <Rate
        allowHalf
        count={10}
        onChange={this.onStarsChange}
        value={starValue}
      />
    );
  }
}
