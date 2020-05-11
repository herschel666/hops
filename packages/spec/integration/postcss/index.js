import { render } from 'hops';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import styles from './styles.css';
/* eslint-disable import/no-unresolved */
import './global.css?global';
import 'animate.css/animate.min.css?global';
/* eslint-enable import/no-unresolved */

export default render(
  <h1 className={`${styles.headline} fancy-headline animate__animated`}>
    hello
  </h1>
);
