import React, { Component } from 'react';
import { connect } from 'react-redux';
import RegisterWG1 from './RegisterWG1';
import TasksManager from './TasksManager';

class RegisterWG extends Component {
  constructor(props) {
    super(props)
    this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this)
    this.state = {
      page: 1
    }
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 })
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 })
  }

  onSubmit = (e) => {
    console.log('values for backend: ', this.props.data)
    //values for backend are here PLAMEN
  }

  render() {
    
    const { page } = this.state
    return (<div>
        {page === 1 && <RegisterWG1 onSubmit={this.nextPage}/>}
        {page === 2 && <TasksManager previousPage={this.previousPage} onSubmit={this.onSubmit}/>}
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {data: state.form.createWG}
}

export default connect(mapStateToProps)(RegisterWG)