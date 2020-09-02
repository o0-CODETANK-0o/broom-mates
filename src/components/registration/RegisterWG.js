import React, { Component, PropTypes } from 'react';
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

  render() {
    const { onSubmit } = this.props
    const { page } = this.state
    return (<div>
        {page === 1 && <RegisterWG1 onSubmit={this.nextPage}/>}
        {page === 2 && <TasksManager previousPage={this.previousPage} onSubmit={onSubmit}/>}
      </div>
    )
  }
}

// RegisterWG.propTypes = {
//   onSubmit: PropTypes.func.isRequired
// }

export default RegisterWG