import React from 'react';
import AsyncTextIconButton from './AsyncTextIconButton';

const AsyncSaveButton = props => (
  <AsyncTextIconButton
    iconClassName="fa fa-floppy-o"
    onClick={props.onSave}
    pending={props.pending}
    pendingText="Se salvează"
  >
    Salvează
  </AsyncTextIconButton>
);

AsyncSaveButton.propTypes = {
  onSave: React.PropTypes.func,
  pending: React.PropTypes.bool,
};

AsyncSaveButton.defaultProps = {
  pending: false,
};

export default AsyncSaveButton;
