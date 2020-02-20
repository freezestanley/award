import React, { useEffect, useState, forwardRef, useImperativeHandle } from 'react';
import { Modal } from 'zarm';
import styles from './index.less';

export default forwardRef(({ visible, url }, ref) => {
  const [isVisible, setVisible] = useState(visible);
  useEffect(() => {
    setVisible(visible);
  }, [visible]);

  const hide = () => {
    setVisible(false);
  };
  const show = () => {
    setVisible(true);
  };

  useImperativeHandle(ref, () => ({ show, hide }));

  return (
    <Modal className={styles.find_id} visible={isVisible} maskClosable closable onCancel={hide}>
      <img src={url} alt="Find ID" />
    </Modal>
  );
});
