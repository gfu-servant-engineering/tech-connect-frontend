import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Tab from './Tab';

class Tabs extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.children[0].props.label,
    };
  }

  onClickTabItem = (tab) => {
    this.setState({ activeTab: tab });
  }

  render() {
    const {
      onClickTabItem,
      props: {
        children,
      },
      state: {
        activeTab,
      }
    } = this;

    return (
      <div className="columns is-centered is-multiline">
        <div className="column is-10 is-centered">
      <div className="tabs is-centered is-medium is-boxed">
        <ul>
          {children.map((child) => {
            const { label, icon } = child.props;

            return (
              <Tab
                activeTab={activeTab}
                key={label}
                label={label}
                onClick={onClickTabItem}
                icon={icon}
              />
            );
          })}
        </ul>
        </div>
        </div>

        <div className="column is-8 is-centered">
        <div className="tab-content">
          {children.map((child) => {
            if (child.props.label !== activeTab) return undefined;
            return child.props.children;
          })}
        </div>
        </div>
        </div>
    );
  }
}

export default Tabs;
