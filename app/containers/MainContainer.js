import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Main from '../components/Main.js';
import * as infoActions from '../actions/infoActions';
import * as uiActions from '../actions/uiActions';

function mapStateToProps (state) {
  return {
    mainInfoState: state.mainInfoState,
    uiState: state.uiState
  }
}

function mapDispatchToProps (dispatch) {
  return {
    infoActions: bindActionCreators(infoActions, dispatch),
    uiActions: bindActionCreators(uiActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
