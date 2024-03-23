import React from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';

import ToastShelf from '../ToastShelf/ToastShelf';

import { ToastContext } from '../ToastProvider/ToastProvider';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const { createToast } = React.useContext(ToastContext);
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
  const [message, setMessage] = React.useState('');


function handleSubmit(e) {
    e.preventDefault();
   createToast(message, variant);
    setMessage('');
    setVariant(VARIANT_OPTIONS[0]);
  }


  return (
    <><div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
        <ToastShelf />
      <form onSubmit={handleSubmit} className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea id="message" required={true} onChange={(e) => setMessage(e.target.value)} value={message} className={styles.messageInput} />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            {VARIANT_OPTIONS.map((option) => {
              const id = `variant-${option}`;
              return (
                <label htmlFor={option} key={id}>
                  <input key={id} id={option} type='radio' checked={option === variant} onChange={event => { setVariant(event.target.value); } } value={option} />
                  {option}
                </label>
              );
            })}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
    </>
  );
}

export default ToastPlayground;
