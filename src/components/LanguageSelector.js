import React from 'react';
import LanguageContext from '../context/LanguageContext';

class LanguageSelector extends React.Component {
  static contextType = LanguageContext;

  render() {
    return (
      <div>
        Select language:
        <i className="flag us" onClick={() => this.context.onLanguageChange('english')}/>
        <i className="flag pl" onClick={() => this.context.onLanguageChange('polish')}/>
      </div>
    );
  }
}

export default LanguageSelector;
