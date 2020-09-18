import React, { Component } from "react";
import { connect, useSelector } from "react-redux";
import RegisterWG1 from "./RegisterWG1";
import TasksManager from "./TasksManager";
import Modal from "../layout/Modal";
import { setModal } from "./../../actions/modalActions";
import RegisterUser from "./RegisterUser";
import RegisterUserPassword from "./RegisterUserPassword";
import axios from "axios";

class RegisterWG extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
    };
  }

  nextPage = () => {
    this.setState({ page: this.state.page + 1 });
  };

  previousPage = () => {
    this.setState({ page: this.state.page - 1 });
  };

  openModal = (action, displayText) => {
    let modalConfig = { show: true, displayText, id: null, action };
    this.props.setModal(modalConfig);
  };

  // onSubmit = (e) => {
  //   console.log('values for backend: ', this.props.data)
  //   //values for backend are here PLAMEN
  // }

  finalSubmit = async () => {
    // where data gets connected to the backend
    console.log("final form data", this.props.data);
    console.log("finale state", this.props.state);
    const wgData = this.props.state.form.createWG.values;
    console.log(wgData);
    const response = await axios.post("http://localhost:5000/api/flats/registerwg", {
      flat: { name: wgData.houseName, email: wgData.email },
      admin: {
        userName: wgData.name,
        userEmail: wgData.email,
        userPassword: wgData.passwordOne,
        avatar: this.props.state.avatarReducer.saved,
        species: wgData.gender,
      },
      users: [
        { name: "plamen", userEmail: "pmitev89@gmail.com" },
        { name: "plamen2", userEmail: "o0mr.mitev@gmail.com" },
      ],
    });
    console.log('label backend response', response.data);
  };

  render() {
  
    const { page } = this.state;

    return (
      <div>
        {this.props.modalData.show && (
          <Modal yesButton={"YES"} noButton={"NO"} />
        )}
        {page === 1 && (
          <RegisterWG1
            onSubmit={() =>
              this.openModal(
                this.nextPage,
                `You want to keep the ID: "${this.props.data.values.houseName}" and the email address: ${this.props.data.values.email}?`
              )
            }
          />
        )}
        {page === 2 && (
          <TasksManager
            nameData={this.props.data}
            previousPage={this.previousPage}
            onSubmit={() =>
              this.openModal(
                this.nextPage,
                "You want to keep the selected tasks?"
              )
            }
          />
        )}
        {page === 3 && <RegisterUser onSubmit={() => this.nextPage()} />}
        {page === 4 && (
          <RegisterUserPassword
            onSubmit={() =>
              this.openModal(
                this.finalSubmit,
                `You want to keep ${this.props.data.values.name}?`
              )
            }
          />
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { data: state.form.createWG, modalData: state.modalReducer, state };
}

export default connect(mapStateToProps, { setModal })(RegisterWG);
