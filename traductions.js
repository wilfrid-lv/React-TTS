import React from 'react';
import { FormattedMessage } from 'react-intl';

function Title() {
    return (
      <p>
        <FormattedMessage id="title" defaultMessage="Text-to-Speech in React Native" />
      </p>
    );
  }
  
  export default Title;