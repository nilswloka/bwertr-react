import React from 'react';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
const Bwertr = require('../Bwertr.jsx');

describe('Bwertr', () => {
  it('displays greeting', () => {
    let bwertr = TestUtils.renderIntoDocument(<Bwertr />);
    let actualText = ReactDOM.findDOMNode(bwertr).textContent;
    expect(actualText).toBe('Welcome to bwertr-ng in ES6');
  });
});
