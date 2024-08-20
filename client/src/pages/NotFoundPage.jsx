import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.css';

function NotFoundPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>404 Not Found</h1>
      <p className={styles.text}>Oops ! Page Not Found.</p>
      <p className={styles.subText}>
        The page you are looking for might have been removed, had its namechanged, or is temporarily unavailable.
      </p>
      <Link to='/' className={styles.link}>Go to HomePage</Link>
    </div>
  )
}

export default NotFoundPage
