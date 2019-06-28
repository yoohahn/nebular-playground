import ReactDOM from 'react-dom';
import React from 'react';

import { Provider } from './Provider';
import Table from './Table';

export function render(element, { layout, context }) {
  ReactDOM.render(
    <Provider layout={layout} context={context}>
      <Table />
    </Provider>,
    element,
  );
}

export function teardown(element) {
  ReactDOM.unmountComponentAtNode(element);
}
