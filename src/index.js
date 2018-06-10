import React from 'react';
import dva from 'dva';
import createLoading from 'dva-loading';

import moduleCount from './moduels/count';
import Count from './components/Count';

const app = dva();

app.use(createLoading());

app.model(moduleCount);

app.router(() => <Count/>);


app.start('#count');

app._store
