import React from 'react';
import chroma from 'chroma-js';
import Select from 'react-select';
import { Image } from 'react-bootstrap';
import './AutoComplete';

// firstName: 'Nguyễn Tùng', lastName: 'Dương', value: 'duong', 
// firstName: 'Nhữ Văn', lastName: 'Duy', value: 'duy',
// firstName: 'Lê Thanh Đạt', lastName: 'Đạt',  value: 'dat',
// firstName: 'Bùi Quang', lastName: 'Linh', value: 'linh',
const peopleOption = [
  { value: 'duong', label: 'duong.nguyentung@vti.com.vn', color: '#0C7EAF', avatar:'https://s3.amazonaws.com/uifaces/faces/twitter/mtnmissy/48.jpg' },
  { value: 'duy', label: 'duy.nhuvan@vti.com.vn', color: '#0C7EAF', avatar:'https://s3.amazonaws.com/uifaces/faces/twitter/steveodom/48.jpg' },
  { value: 'dat', label: 'dat.lethanh@vti.com.vn', color: '#0C7EAF', avatar:'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/48.jpg' },
  { value: 'linh', label: 'linh.buiquang@vti.com.vn', color: '#0C7EAF', avatar:'https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/48.jpg' },
];

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

const CustomOption = (params) => {
  console.log(params)
  if (!params.isDisabled) {return (
    <div {...params.innerProps} className="d-flex align-items-center">
      <div className="float-left ml-2">
        <Image
          width={45}
          height={45}
          // src={}
          alt="Generic placeholder"
          roundedCircle
        />
      </div>
      <div className="float-left ml-4">
        <span>{params.data.label}</span>
      </div>
      <div className="clearfix"></div>
    </div>
  )
}else {
  return null
  }
}


// const CustomOption = (params) =>
//   !params.isDisabled ? (
//     <div {...params.innerProps} className=" d-flex align-items-center">
//         <div className="float-left ml-2">
//           <Image
//             width={45}
//             height={45}
//             src={logo}
//             alt="Generic placeholder" 
//             roundedCircle 
//           />
//         </div>
//         <div className="float-left ml-4">
//           <span>{params.data.label}</span>
//         </div>
//         <div className="clearfix"></div>
//     </div>
//   ) : null;

class AutoComplete extends React.Component {
  render() {
    return (
      <Select
        components={{ Option: CustomOption }}
        closeMenuOnSelect={false}
        // defaultValue={[peopleOption[0], peopleOption[1]]}
        isMulti
        options={peopleOption}
        styles={peopleStyles}
      />
    )
  }
}
export default AutoComplete;


// import Autosuggest from 'react-autosuggest';
// import React from 'react';
// import './AutoComplete.css';

// const people = [
//   {
//     first: 'Bùi Quang',
//     last: 'Linh',
//     email: 'linh.buiquang@vti.com.vn',
//     id: 'image1'
//   },
//   {
//     first: 'Nhữ Văn',
//     last: 'Duy',
//     email: 'duy.nhuvan@vti.com.vn',
//     id: 'image2'
//   },
//   {
//     first: 'Nguyễn Tùng',
//     last: 'Dương',
//     email: 'duong.nguyentung@vti.com.vn',
//     id: 'image3'
//   },
//   {
//     first: 'Lê Thanh',
//     last: 'Đạt',
//     email: 'dat.lethanh@vti.com.vn',
//     id: 'image4'
//   }
// ];

// const escapeRegexCharacters = (str) => {
//   return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
// }

// const getSuggestions = (value) => {
//   const escapedValue = escapeRegexCharacters(value.trim());

//   if (escapedValue === '') {
//     return [];
//   }

//   const regex = new RegExp('\\b' + escapedValue, 'i');

//   return people.filter(person => regex.test(getSuggestionValue(person)));
// }

// const getSuggestionValue=(suggestion)=>{
//   // console.log(suggestion)
//   // return `${suggestion.first} ${suggestion.last}`;
//   return `${suggestion.email}`;
// }

// const renderSuggestion = (suggestion, { query }) => {
//   // console.log('suggestion', suggestion)
//   const suggestionText = `${suggestion.first} ${suggestion.last}`;
//   var AutosuggestHighlightMatch = require('autosuggest-highlight/match');
//   var AutosuggestHighlightParse = require('autosuggest-highlight/parse');
//   const matches = AutosuggestHighlightMatch(suggestionText, query);
//   const parts = AutosuggestHighlightParse(suggestionText, matches);

//   return (
//     <span className={'suggestion-content ' + suggestion.id}>
//       <span className="name">
//         {
//           parts.map((part, index) => {
//             const className = part.highlight ? 'highlight' : null;

//             return (
//               <span className={className} key={index}>{part.text}</span>
//             );
//           })
//         }
//       </span>
//     </span>
//   );
// }

// class AutoComplete extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       value: '',
//       suggestions: []
//     };    
//   }

//   onChange = (event, { newValue, method }) => {
//     this.setState({
//       value: newValue
//     });
//   };

//   onSuggestionsFetchRequested = ({ value }) => {
//     this.setState({
//       suggestions: getSuggestions(value)
//     });
//   };

//   onSuggestionsClearRequested = () => {
//     this.setState({
//       suggestions: []
//     });
//   };

//   render() {
//     const { value, suggestions } = this.state;
//     const inputProps = {
//       placeholder: "Type Name or Email",
//       value,
//       onChange: this.onChange
//     };

//     return (
//       <Autosuggest 
//         suggestions={suggestions}
//         onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
//         onSuggestionsClearRequested={this.onSuggestionsClearRequested}
//         getSuggestionValue={getSuggestionValue}
//         renderSuggestion={renderSuggestion}
//         inputProps={inputProps} />
//     );
//   }
// }

// export default AutoComplete;



