import React from "react";
import axios from "axios";
import Loader from "./Loader";
import ApiProviders from "./ApiProviders";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      apiProvidersList: null,
      showLoader: false,
      disableButton: false,
      showAPIProvidersList: false,
      drawerOpen: false,
      setDrawerOpen: false,
    };
  }

  handleOpenDrawerButton = (event) => {
    this.setState({ drawerOpen: !this.state.drawerOpen });
  };

  handleBackdropClick = (event) => {
    this.setState({ drawerOpen: false });
  };

  fetchAPIProviders = (event) => {
    if (event) {
      this.setState({ showLoader: true, disableButton: true });
      axios({
        // Endpoint to send files
        url: "https://api.apis.guru/v2/providers.json",
        method: "GET",
      })
        .then((res) => {
          this.setState({ apiProvidersList: res.data.data });
          setTimeout(() => {
            this.setState({ showLoader: false, disableButton: false });
            this.handleOpenDrawerButton(event);
          }, 3000);
        })
        .catch((err) => {
          alert("Failed to fetch Providers List! Please try after some time.");
          this.setState({
            showLoader: false,
            disableButton: false,
            apiProvidersList: null,
          });
          console.log("Error : ", err);
        });
    }
  };
  render() {
    return (
      <React.Fragment>
        <div className="full-screen-div">
          <button
            disabled={this.state.disableButton}
            onClick={this.fetchAPIProviders}
            className="explore-web-api-button"
          >
            Explore Web APIs
          </button>
          {this.state.showLoader && <Loader />}
          {this.state.apiProvidersList && (
            <div>
              <ApiProviders
                show={this.state.drawerOpen}
                apiProvidersList={this.state.apiProvidersList}
                closeList={this.handleBackdropClick}
              />
            </div>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
