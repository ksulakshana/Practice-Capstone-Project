import React from 'react';
import styles from './NotFoundPage.module.css';

function NotFoundPage() {
  return (
    <div className={styles.container}>
      <h1>404 Not Found</h1>
      <p>Sorry, The Page you are looking does not exist!!</p>
    </div>
  )
}

export default NotFoundPage
