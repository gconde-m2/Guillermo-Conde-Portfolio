
import React from 'react';
import ReactVivus from 'react-vivus';

import animatedFootprint from './code_animated.svg'


const coding = () => (
  <ReactVivus
    id="foo"
    option={{
      file: animatedFootprint,
      type: 'delayed',
      animTimingFunction: 'EASE',
      duration: 160,
    }}
    style={{ height: '300px', width: '70%' }}
    callback={console.log}
  />
);
export default coding;