import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaCheck, FaUser, FaList, FaPagelines} from 'react-icons/fa'

class Tab extends Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    icon: PropTypes.string,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  onClick = () => {
    const { label, onClick, icon } = this.props;
    onClick(label);
  }

  render() {
    const {
      onClick,
      props: {
        activeTab,
        label,
        icon,
      },
    } = this;

    let className = 'tab-list-item';

    if (activeTab === label) {
      className += ' tab-list-active';
    }

    function determineIcon(icon) {
      if (icon === "FaCheck") {
        return <span class="icon is-small"><FaCheck size={"1em"}/></span>
      }
      else if (icon === "FaUser") {
        return <span class="icon is-small"><FaUser size={"1em"}/></span>
      }
      else if (icon === "FaList"){
        return <span class="icon is-small"><FaList size={"1em"}/></span>
      }
      else if (icon === "FaPagelines"){
        return <span class="icon is-small"><FaPagelines size={"1em"}/></span>
      }
      else
      {
        return <span class="icon is-small">BAD ICON</span>
      }
    }

    return (
      <li
        className={className}
        onClick={onClick}
      >
        <a>
        {determineIcon(icon)}
        {label}
        </a>
      </li>
    );
  }
}

export default Tab;
