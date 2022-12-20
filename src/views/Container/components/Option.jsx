import { Icon, Pressable, Text, Tooltip, styles } from '@mirai/ui';
import PropTypes from 'prop-types';
import React from 'react';

import * as style from '../Container.module.css';

const Option = ({ active = false, children, compact, icon, text = '', onPress }) => (
  <Pressable className={styles(style.link, active && style.active)} onPress={onPress}>
    {compact ? (
      <Tooltip text={text}>
        <Icon value={icon} className={[style.icon, style.text]} />
      </Tooltip>
    ) : (
      <Icon value={icon} className={[style.icon, style.text]} />
    )}
    <Text bold className={style.text}>
      {text}
    </Text>
    {children}
  </Pressable>
);

Option.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  compact: PropTypes.bool,
  icon: PropTypes.string,
  text: PropTypes.string,
  onPress: PropTypes.func,
};

export { Option };
