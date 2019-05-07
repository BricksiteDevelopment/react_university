import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';

import injectReducer from '../../utils/injectReducer';
import Section from './Section';
import reducer from './reducer';

const withReducer = injectReducer({ key: 'home', reducer });

@connect(
  mapStateToProps,
  mapDispatchToProps
)
@compose(withReducer)
export class HomePage extends React.PureComponent {
  render() {
    return (
      <article>
        <Helmet>
          <title>Notes</title>
          <meta name="description" content="Notes" />
        </Helmet>
        <div>
          <Section>
            <h1>Home Page</h1>
          </Section>
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  onSubmitForm: PropTypes.func,
};

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}
