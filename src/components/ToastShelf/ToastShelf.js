import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

import { ToastContext } from '../ToastProvider/ToastProvider';

function ToastShelf() {
const { toastContent } = React.useContext(ToastContext);
  return (
    <ol className={styles.wrapper}>
      {toastContent.map((toastContent) => (
      <li key={toastContent.id} className={styles.toastWrapper}>
        <Toast id={toastContent.id} variant={toastContent.variant}>{toastContent.message}</Toast>
      </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
