import { useMetrics, useStore } from '@mirai/data-sources';
import { Button, Icon, Menu, Pressable, Text, View, styles } from '@mirai/ui';
import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import { useLocation } from 'wouter';

import { Logo } from '@components';
import { ICON } from '@modules';

import { Option } from './components/Option';
import * as style from './Container.module.css';
import { ROUTES } from './Container.routes';

export const Container = ({ children }) => {
  const [location, setLocation] = useLocation();
  const { track } = useMetrics();
  // const {
  //   set,
  //   value: {
  //     session: { email, role = 'Unknown role' },
  //   },
  // } = useStore();
  const ref = useRef(null);

  const [compact, setCompact] = useState(false);
  const [menu, setMenu] = useState(false);

  const handleOption = (url) => {
    setLocation(url);
  };

  // const handleSessionMenu = (option) => {
  //   if (option === 'logout') {
  //     set({ session: undefined });
  //     track('SESSION:LOGOUT');
  //   }
  // };

  const handleCompact = () => {
    const next = !compact;
    setCompact(next);
    track('EVENT:COMPACT', { active: next });
  };

  return (
    <View row className={style.container}>
      <View tag="aside" className={styles(style.menu, compact && style.compact)}>
        <View tag="header" row className={style.header}>
          {!compact && <Logo highlight />}

          <Button rounded small squared className={style.button} onPress={handleCompact}>
            <Icon value={compact ? ICON.RIGHT : ICON.LEFT} />
          </Button>
        </View>

        <View tag="nav" className={style.navigation}>
          {ROUTES.map(({ url, ...route }) => (
            <Option
              {...{ ...route, compact }}
              active={url.includes(location)}
              key={url}
              onPress={() => handleOption(url)}
            />
          ))}
        </View>

        <Menu
          options={[
            { icon: ICON.ACCOUNT, label: 'My Profile', divider: true, value: 'profile' },
            { icon: ICON.LOGOUT, label: 'Logout', value: 'logout' },
          ]}
          visible={menu}
        >
          <Pressable
            ref={ref}
            className={[style.link, style.session]}
            onPress={() => setMenu(!menu)}
            data-testid="menu-profile"
          >
            {compact ? (
              <Icon name="Account" className={[style.icon, style.text]} />
            ) : (
              <View className={style.avatar} style={{}} />
            )}

            <View>
              <Text className={style.text}>{'email'}</Text>
              <Text small className={style.text}>
                {'role'}
              </Text>
            </View>
          </Pressable>
        </Menu>
      </View>

      <View tag="article" className={style.article}>
        <View row tag="header" className={style.header}>
          <Text bold headline>
            {location}
          </Text>
        </View>
        <View className={style.content}>{children}</View>
      </View>
    </View>
  );
};

Container.propTypes = {
  children: PropTypes.node,
};
