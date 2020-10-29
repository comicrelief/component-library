import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MarketingPreferencesDS from './MarketingPreferencesDS';

const MarketingPreferencesForm = ({ copyTop, copyBottom }) => {
  const [isSubmitted, setSubmitted] = useState(false);

  // Updates state passed as MarketingPrefs prop flag
  function formSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  function fetchFormData(data) {
    setSubmitted(false);
    console.log('passFieldValues', data);
  }

  return (
    <form onSubmit={e => formSubmit(e)}>
      <MarketingPreferencesDS
        copyTop={copyTop}
        copyBottom={copyBottom}
        submitted={isSubmitted}
        passFormData={fetchFormData}
      />
      <input type="submit" />
    </form>
  );
};

MarketingPreferencesForm.propTypes = {
  copyTop: PropTypes.node,
  copyBottom: PropTypes.node
};

MarketingPreferencesForm.defaultProps = {
  copyTop: null,
  copyBottom: null
};

export default MarketingPreferencesForm;
