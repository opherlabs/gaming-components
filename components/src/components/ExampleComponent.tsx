import * as pkg from '../../package.json';
import React from 'react';

export const ExampleComponent = () => {
  return (
    <div>
      Example Component   for testing only 
      package.json version : {pkg.version}
    </div>
  )
}
