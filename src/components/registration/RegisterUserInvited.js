import React, { Component } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';

import Modal from '../layout/Modal';
import { setModal } from './../../actions/modalActions';
import RegisterUser from './RegisterUser';
import RegisterUserPassword from './RegisterUserPassword';
import registerUserAction from '../../actions/registerUserAction';

class RegisterUserInvited extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
    };
  }

  nextPage = () => {
    this.setState({ page: this.state.page + 1 });
    // console.log('values for backend: ', this.props.data)
  };

  previousPage = () => {
    this.setState({ page: this.state.page - 1 });
  };

  openModal = (action, displayText) => {
    let modalConfig = { show: true, displayText, id: null, action };
    this.props.setModal(modalConfig);
  };

  onSubmit = (e) => {
    console.log('values for backend: ', this.props.data);

    //values for backend are here PLAMEN
  };

  finalPage = () => {
    console.log('final form data', this.props.data);
    console.log('finale state', this.props.state);
  };

  render() {
    const { page } = this.state;

    return (
      <div>
        {this.props.modalData.show && (
          <Modal yesButton={'YES'} noButton={'NO'} />
        )}

        {page === 1 && <RegisterUser onSubmit={() => this.nextPage()} />}
        {page === 2 && (
          <RegisterUserPassword
            onSubmit={() => {
              this.openModal(
                this.finalPage,
                `You want to keep ${this.props.data.values.name}?`
              );
            }}
          />
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { data: state.form.createWG, modalData: state.modalReducer, state };
}

export default connect(mapStateToProps, { setModal })(RegisterUserInvited);
