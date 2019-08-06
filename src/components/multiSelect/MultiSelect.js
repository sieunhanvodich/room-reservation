import React from 'react';
import chroma from 'chroma-js';
import Select from 'react-select';
import { Image} from 'react-bootstrap';
import './MultiSelect';

const peopleOption = [
  { firstName: 'Nguyễn Tùng', lastName: 'Dương', value: 'duong', label: 'duong.nguyentung@vti.com', color: '#0C7EAF', avatarURL: 'https://s3.amazonaws.com/uifaces/faces/twitter/mtnmissy/48.jpg' },
  { firstName: 'Nhữ Văn', lastName: 'Duy', value: 'duy', label: 'duy.nhuvan@vti.com.vn', color: '#0C7EAF', avatarURL: 'https://s3.amazonaws.com/uifaces/faces/twitter/steveodom/48.jpg' },
  { firstName: 'Lê Thành', lastName: 'Đạt', value: 'dat', label: 'dat.lethanh@vti.com.vn', color: '#0C7EAF', avatarURL: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/48.jpg' },
  { firstName: 'Bùi Quang', lastName: 'Linh', value: 'linh', label: 'linh.buiquang@vti.com.vn', color: '#0C7EAF', avatarURL: 'https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/48.jpg' },
];

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
  multiValueLabel: (styles, { data }) => ({
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

// Get url image from data
const getURL = (value) => {
  for (let i = 0; i < peopleOption.length; i++) {
    if (peopleOption[i].value === value)
      return peopleOption[i].avatarURL;
  }
}

const CustomOption = (params) => {
  if (!params.isDisabled) {
    return (
      <div {...params.innerProps} className="d-flex align-items-center">
        <div className="float-left ml-2">
          <Image
            width={45}
            height={45}
            src={getURL(params.data.value)}
            alt="Generic placeholder"
            roundedCircle
          />
        </div>
        <div className="float-left ml-4">
          <span className="">{params.data.label}</span>
        </div>
        <div className="clearfix"></div>
      </div>
    )
  } else {
    return null
  }
}

class MultiSelect extends React.Component {
  render() {
    return (
      <Select
        components={{ Option: CustomOption }}
        closeMenuOnSelect={false}
        isMulti
        options={peopleOption}
        styles={peopleStyles}
      />
    )
  }
}
export default MultiSelect;


