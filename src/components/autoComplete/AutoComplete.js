
import Autosuggest from 'react-autosuggest';
import React from 'react';
import './AutoComplete.css';

const people = [
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
  return `${suggestion.email}`;
}

const renderSuggestion = (suggestion, { query }) => {
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
  constructor(props) {
    super(props);

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
      placeholder: this.props.placeholder,
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


