import React from 'react';
import { browserHistory } from 'react-router';
import TextIconButton from './TextIconButton';

const BackButton = () => {
  const goBack = () => {
    browserHistory.goBack();
  };

  return (
    <TextIconButton
      iconClassName="fa fa-angle-left"
      onClick={goBack}
    >
      Back
    </TextIconButton>
  );
};

export default BackButton;
