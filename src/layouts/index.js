import styles from './index.less';

function BasicLayout(props) {
  return (
    <div className={styles.normal}>
      <div className={styles.main}>{props.children}</div>
    </div>
  );
}

export default BasicLayout;
