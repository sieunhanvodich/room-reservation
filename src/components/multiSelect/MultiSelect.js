import React from 'react';
import chroma from 'chroma-js';
import Select from 'react-select';
import { Image } from 'react-bootstrap';
import './MultiSelect';
import UserService from '../../services/UserService';

// Style option multiselect 
const peopleStyles = {
  control: styles => ({ ...styles, backgroundColor: 'white' }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: isDisabled
        ? null
        : isSelected
          ? data.color
          : isFocused
            ? color.alpha(0.1).css()
            : null,
      color: isDisabled
        ? '#ccc'
        : isSelected
          ? chroma.contrast(color, 'white') > 2
            ? 'white'
            : 'black'
          : '#212529',
      cursor: isDisabled ? 'not-allowed' : 'default',

      ':active': {
        ...styles[':active'],
        backgroundColor: !isDisabled && (isSelected ? data.color : color.alpha(0.3).css()),
      },
    };
  },
  multiValue: (styles, { data }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: color.alpha(0.1).css(),
    };
  },
  multiValueEmail: (styles, { data }) => ({
    ...styles,
    color: data.color,
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: data.color,
    ':hover': {
      backgroundColor: '#0C7EAF',
      color: 'white',
    },
  }),
};

const CustomOption = (params) => {
  // console.log(params)
  if (!params.isDisabled) {
    return (
      <div {...params.innerProps} className="d-flex align-items-center">
        <div className="float-left ml-2">
          <Image
            width={45}
            height={45}
            src={"https://i.pinimg.com/564x/" + params.data.avatarUrl}
            alt="Generic placeholder"
            roundedCircle
          />
        </div>
        <div className="float-left ml-4">
          <span className="">{params.data.email}</span>
        </div>
        <div className="clearfix"></div>
      </div>
    )
  } else {
    return null
  }
}

class MultiSelect extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      value: []
    }

    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    UserService.users().then(users => {
      users.map(user => {
        user.label = user.email
        user.value = user.name
        user.color = '#0C7EAF'
      })

      this.setState({
        users: users
      })
    })
  }

  async handleChange(e) {
    await this.setState({
      value: (e!=null) ? e : []
    })
    // if(e!=null) await this.setState({
    //   value: e
    // })
    // else await this.setState({
    //   value: []
    // })
    this.props.changeStatus(this.state.value.length)
  }

  render() {
    return (
      <Select
        components={{ Option: CustomOption }}
        closeMenuOnSelect={false}
        isMulti
        onChange={this.handleChange}
        options={this.state.users}
        styles={peopleStyles}
      />
    )
  }
}
export default MultiSelect;


