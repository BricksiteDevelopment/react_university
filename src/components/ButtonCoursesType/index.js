import React from 'react';

import './button.scss';
import PropTypes from 'prop-types';
import Button from 'components/Button';

export class ButtonCoursesType extends React.PureComponent {
  static propTypes = {
    clickButton: PropTypes.func, //parameter for the pressed button
  };

  static defaultProps = {
    clickButton: Function.prototype, //parameter for the pressed button
  };

  state = {
    active: 0,
  };

  stateBtn = (event, index) => {
    this.setState({ active: index });
  };

  render() {
    const { clickButton } = this.props;
    const current = this.state.active; //current tab
    const btnTitles = [
      //titles for button in tabs
      'Development',
      'Design',
      'Business',
      'Photography',
    ];
    let getClass = function(name, index) {
      //add class for current tab
      if (index === current) return name;
      return '';
    };

    return (
      <div className="button-container">
        {btnTitles.map((option, index) => (
          <Button
            key={index}
            colorStyle="category"
            modificationClass={getClass('btn_category-toggle_active', index)}
            onClick={(event) => {
              this.stateBtn(option, index);
              clickButton(option);
            }}>
            {option}
          </Button>
        ))}
      </div>
    );
  }
}
