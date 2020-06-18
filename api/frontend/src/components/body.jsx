import React, { Component } from "react";
import ImageUploader from "./imageUploader";
import ImageCard from "./imageCard";

class Body extends Component {
  state = {
    loading: false,
    inputFile: null,
  };
  handleImageUpload = (e) => {
    this.setState({
      inputFile: URL.createObjectURL(e.currentTarget.files[0]),
      loading: true,
    });
    setTimeout(() => {
      this.setState({ loading: false });
    }, 15000);
  };
  render() {
    const { inputFile, loading } = this.state;
    return (
      <div className="container section-main">
        <ImageUploader onImageUpload={this.handleImageUpload} />
        {inputFile && <ImageCard original={inputFile} loading={loading} />}
      </div>
    );
  }
}

export default Body;
