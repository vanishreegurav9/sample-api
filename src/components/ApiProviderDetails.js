import React from "react";
import axios from "axios";
import Loader from "./Loader";
import withRouter from "../withRouter";
import Provider from "./Provider";

class ApiProviderDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLoader: true,
      apiProviderDetails: null,
    };
  }

  componentDidMount = () => {
    const providerName = this.props.params.providerName;
    console.log("Provider Name ", providerName);
    this.getProviderDetail(providerName);
    
  }

  getProviderDetail = (providerName) =>{
    console.log('Response Provider Details ', providerName);
    axios({
      // Endpoint to send files
      url: "https://api.apis.guru/v2/" + providerName + ".json",
      method: "GET",
    }).then((res) => {
        const key = this.getProviderDetailsObject(res.data.apis);
        // res.data.apis[this.getProviderDetailsObject(res.data.apis)];
        this.setState({ apiProviderDetails: res.data.apis[this.getProviderDetailsObject(res.data.apis)]});
        console.log("Provider Details :> ", key , this.state.apiProviderDetails);
        setTimeout(() => {
          this.setState({ showLoader: false });
        }, 3000);
      })
      .catch((err) => {
        alert("Failed to fetch Providers List! Please try after some time.");
        this.setState({
          showLoader: false,
        });
        console.log("Error : ", err);
      });
  }

  getProviderDetailsObject = (rawData) => {
    //   let user ={
    //     name : "Balaji",
    //     age : 23,
    // };
    // let entries = Object.entries(rawData);
    // let data = entries.map((key) => {
    //   return key;
    // });
    let allKeys = Object.keys(rawData);
    return allKeys[0];
  };

  render() {
    console.log("Provider Details -:- ", this.state.apiProviderDetails);
    return (
      <React.Fragment>
        <div className="full-screen-div">
          {this.state.showLoader && <Loader />}
          {!this.state.showLoader && (
            <Provider apiProvider={this.state.apiProviderDetails} />
          )}
        </div>
      </React.Fragment>
    );
  }
}
export default withRouter(ApiProviderDetails);
