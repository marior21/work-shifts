import { Pressable, Text, styles } from '@mirai/ui';
import PropTypes from 'prop-types';
import React from 'react';

import * as style from './Action.module.css';

export const Action = ({ button, children, onPress, ...others }) => (
  <Pressable
    data-testid={others['data-testid']}
    type="button"
    onPress={onPress}
    className={styles(button && style.button, others.className)}
  >
    <Text {...others} data-testid="">
      {children}
    </Text>
  </Pressable>
);

Action.propTypes = {
  button: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onPress: PropTypes.func,
};
