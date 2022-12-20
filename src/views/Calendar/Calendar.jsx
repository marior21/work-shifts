import { useMetrics, useStore } from '@mirai/data-sources';
import React, { useEffect } from 'react';

export const Dashboard = () => {
  const { trackRender } = useMetrics();
  const {
    value: { locale },
  } = useStore();

  useEffect(() => {
    trackRender('RENDER:CALENDAR', { locale });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <h1>/calendar</h1>;
};
