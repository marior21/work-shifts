import { Text, View, styles } from '@mirai/ui';
import PropTypes from 'prop-types';
import React from 'react';

import * as style from './Logo.module.css';

export const Logo = ({ highlight, ...others }) => (
  <View row {...others}>
    <Text bold headline level={highlight ? 3 : 2} className={style.mirai}>
      mro
    </Text>
    <Text headline level={highlight ? 3 : 2} className={styles(style.metasearch, highlight && style.highlight)}>
      workshifts
    </Text>
  </View>
);

Logo.propTypes = {
  highlight: PropTypes.bool,
};
