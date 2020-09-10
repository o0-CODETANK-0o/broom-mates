import React, { Component } from 'react';
import { connect } from 'react-redux';
import RegisterWG1 from './RegisterWG1';
import TasksManager from './TasksManager';
import Modal from '../layout/Modal';
import { setModal } from './../../actions/modalActions';

class RegisterWG extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 1
    }
  }

  nextPage = () => {
    this.setState({ page: this.state.page + 1 })
  }

  previousPage = () => {
    this.setState({ page: this.state.page - 1 })
  }

  openModal = (action, displayText) => {
      let modalConfig = {show : true, displayText, id: null, action};
      this.props.setModal(modalConfig);
  }

  onSubmit = (e) => {
    console.log('values for backend: ', this.props.data)
    //values for backend are here PLAMEN
  }

  render() {
    
    const { page } = this.state;

    return (
      <div>
        {this.props.modalData.show && <Modal header={"lala"} yesButton={'YES'} noButton={'NO'} />}
        {page === 1 && <RegisterWG1 onSubmit={() => this.openModal(this.nextPage, 'You want to keep this ID?')}/>}
        {page === 2 && <TasksManager previousPage={this.previousPage} onSubmit={() => this.openModal(this.onSubmit, 'You want to keep the selected tasks?') }/>}
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {data: state.form.createWG, modalData: state.modalReducer}
};

export default connect(mapStateToProps, { setModal })(RegisterWG);