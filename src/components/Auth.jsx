import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { Button, Modal, ControlLabel, FormGroup } from 'react-bootstrap';

import { triggerRegistration, triggerLogin } from '../sagas/auth';

const FormWrapper = ({ login, register }) => {
  const Form = ({ handleSubmit }) => (
    <form>
      <Modal.Body>
        <FormGroup>
          <ControlLabel htmlFor="email">Email</ControlLabel>
          <Field name="username" component="input" type="email" className="form-control" placeholder="Email" />
        </FormGroup>
        <FormGroup>
          <ControlLabel htmlFor="password">Password</ControlLabel>
          <Field name="password" component="input" type="password" className="form-control" placeholder="Password" />
        </FormGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleSubmit(register)}>Register</Button>
        <Button bsStyle="primary" onClick={handleSubmit(login)}>Log In</Button>
      </Modal.Footer>
    </form>
  );
  const ConnectedForm = reduxForm({
    form: 'register-or-login',
  })(Form);
  return (
    <Modal show>
      <Modal.Header>
        Register or Log In
      </Modal.Header>
      <ConnectedForm />
    </Modal>
  );
};

export default connect(null, {
  login: triggerLogin,
  register: triggerRegistration,
})(FormWrapper);
