import React from 'react';
import { reduxForm, propTypes, Field } from 'redux-form';
import { TextField } from 'components';
import { Icon, Button, Form } from 'antd';
import { validateInput, validationTypes } from 'lib/validation';
//

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Fill in all required fields';
  } else {
    if (!validateInput(validationTypes.EMAIL, values.email)) {
      errors.email = 'Invalid email format';
    }
  }

  if (!values.password) {
    errors.password = 'Fill in all required fields';
  }

  return errors;
};

@reduxForm({
  form: 'login',
  validate,
})
export class LoginForm extends React.PureComponent {
  static propTypes = {
    ...propTypes,
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit} className="login-form">

        <Field
          name="email"
          type="email"
          placeholder="Email"
          error="aaa"
          component={TextField}
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
        />

        <Field
          name="password"
          type="password"
          placeholder="Password"
          component={TextField}
          prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
        />

        <Form.Item style={{ margin: '20px 0 0' }}>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            style={{ width: '100%' }}
          >
            Log in
          </Button>
        </Form.Item>

      </form>
    );
  }
}
