import React from 'react';
import { message } from 'antd';
import { EditProfileForm } from './form';

export class EditProfile extends React.PureComponent {
  onSubmit = (values) => {
    // eslint-disable-next-line
    console.log(values);
    window.scrollTo(0, 0);
    message.success('Profile edited!');
  };

  render() {
    return <EditProfileForm onSubmit={this.onSubmit} />;
  }
}
