import { useEffect } from 'react';

import 'zarm/dist/zarm.min.css';
import styles from './index.less';

function BasicLayout(props) {
  useEffect(() => {
    window.addEventListener('sw.updated', () => {
      window.location.reload();
    });
    // return () => window.removeEventListener('sw.updated');
  }, []);
  return (
    <div className={styles.normal}>
      <div className={styles.main}>{props.children}</div>
    </div>
  );
}

export default BasicLayout;
