import { useStore } from '@mirai/data-sources';
import { LocaleProvider } from '@mirai/locale';
import React, { useLayoutEffect } from 'react';
import { Route, Switch, useLocation } from 'wouter';

import { Container, Calendar, Login } from '@views';

const App = () => {
  const [location, setLocation] = useLocation();
  const {
    value: { session, locale = 'es' },
  } = useStore();

  useLayoutEffect(() => {
    setLocation("/calendar")
    //if (!session && location !== '/') setLocation('/');
    //else if (session && location === '/') setLocation('/dashboard');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <LocaleProvider locale={locale}>
      <Container>
        <Switch>
          <Route path="/calendar" component={Calendar} />
          <Route path="/users/:name">{(params) => <div>Hello, {params.name}!</div>}</Route>
          <Route path="/reports">reports</Route>
          <Route path="/profile">profile</Route>
          <Route path="/:rest*">{(params) => `404, Sorry the page ${params.rest} does not exist!`}</Route>
        </Switch>
      </Container>
    </LocaleProvider>
  );
};

export { App };
