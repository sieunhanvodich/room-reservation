import Autosuggest from 'react-autosuggest';
import React from 'react';
import './AutoComplete.css';

const people = [
  // {
  //   first: 'Charlie',
  //   last: 'Brown',
  //   twitter: 'dancounsell'
  // },
  // {
  //   first: 'Charlotte',
  //   last: 'White',
  //   twitter: 'mtnmissy'
  // },
  // {
  //   first: 'Chloe',
  //   last: 'Jones',
  //   twitter: 'ladylexy'
  // },
  // {
  //   first: 'Cooper',
  //   last: 'King',
  //   twitter: 'steveodom'
  // }
  {
    first: 'Bùi Quang',
    last: 'Linh',
    email: 'linh.buiquang@vti.com.vn',
    id: 'image1'
  },
  {
    first: 'Nhữ Văn',
    last: 'Duy',
    email: 'duy.nhuvan@vti.com.vn',
    id: 'image2'
  },
  {
    first: 'Nguyễn Tùng',
    last: 'Dương',
    email: 'duong.nguyentung@vti.com.vn',
    id: 'image3'
  },
  {
    first: 'Lê Thanh',
    last: 'Đạt',
    email: 'dat.lethanh@vti.com.vn',
    id: 'image4'
  }
];

const escapeRegexCharacters = (str) => {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

const getSuggestions = (value) => {
  const escapedValue = escapeRegexCharacters(value.trim());
  
  if (escapedValue === '') {
    return [];
  }

  const regex = new RegExp('\\b' + escapedValue, 'i');
  
  return people.filter(person => regex.test(getSuggestionValue(person)));
}

const getSuggestionValue=(suggestion)=>{
  // console.log(suggestion)
  return `${suggestion.first} ${suggestion.last}`;
}

const renderSuggestion = (suggestion, { query }) => {
  // console.log('suggestion', suggestion)
  const suggestionText = `${suggestion.first} ${suggestion.last}`;
  var AutosuggestHighlightMatch = require('autosuggest-highlight/match');
  var AutosuggestHighlightParse = require('autosuggest-highlight/parse');
  const matches = AutosuggestHighlightMatch(suggestionText, query);
  const parts = AutosuggestHighlightParse(suggestionText, matches);

  return (
    <span className={'suggestion-content ' + suggestion.id}>
      <span className="name">
        {
          parts.map((part, index) => {
            const className = part.highlight ? 'highlight' : null;

            return (
              <span className={className} key={index}>{part.text}</span>
            );
          })
        }
      </span>
    </span>
  );
}

class AutoComplete extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      suggestions: []
    };    
  }

  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue
    });
  };
  
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Type Name or Email",
      value,
      onChange: this.onChange
    };

    return (
      <Autosuggest 
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps} />
    );
  }
}

export default AutoComplete;
  
// import Autosuggest from 'react-autosuggest';
// import React from 'react';
// import './AutoComplete.css';

// // Imagine you have a list of languages that you'd like to autosuggest.
// const languages = [
//   {
//     name: 'C',
//     year: 1972
//   },
//   {
//     name: 'Elm',
//     year: 2012
//   }
// ];

// // Teach Autosuggest how to calculate suggestions for any given input value.
// const getSuggestions = value => {
//   const inputValue = value.trim().toLowerCase();
//   const inputLength = inputValue.length;

//   return inputLength === 0 ? [] : languages.filter(lang =>
//     lang.name.toLowerCase().slice(0, inputLength) === inputValue
//   );
// };

// // When suggestion is clicked, Autosuggest needs to populate the input
// // based on the clicked suggestion. Teach Autosuggest how to calculate the
// // input value for every given suggestion.
// const getSuggestionValue = suggestion => suggestion.name;

// // Use your imagination to render suggestions.
// const renderSuggestion = suggestion => (
//   <div>
//     {suggestion.name}
//   </div>
// );

// class AutoComplete extends React.Component {
//   constructor() {
//     super();

//     // Autosuggest is a controlled component.
//     // This means that you need to provide an input value
//     // and an onChange handler that updates this value (see below).
//     // Suggestions also need to be provided to the Autosuggest,
//     // and they are initially empty because the Autosuggest is closed.
//     this.state = {
//       value: '',
//       suggestions: []
//     };
//   }

//   onChange = (event, { newValue }) => {
//     this.setState({
//       value: newValue
//     });
//   };

//   // Autosuggest will call this function every time you need to update suggestions.
//   // You already implemented this logic above, so just use it.
//   onSuggestionsFetchRequested = ({ value }) => {
//     this.setState({
//       suggestions: getSuggestions(value)
//     });
//   };

//   // Autosuggest will call this function every time you need to clear suggestions.
//   onSuggestionsClearRequested = () => {
//     this.setState({
//       suggestions: []
//     });
//   };

//   render() {
//     const { value, suggestions } = this.state;

//     // Autosuggest will pass through all these props to the input.
//     const inputProps = {
//       placeholder: 'Type a programming language',
//       value,
//       onChange: this.onChange
//     };

//     // Finally, render it!
//     return (
//       <Autosuggest
//         suggestions={suggestions}
//         onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
//         onSuggestionsClearRequested={this.onSuggestionsClearRequested}
//         getSuggestionValue={getSuggestionValue}
//         renderSuggestion={renderSuggestion}
//         inputProps={inputProps}
//       />
//     );
//   }
// }

// export default AutoComplete;
