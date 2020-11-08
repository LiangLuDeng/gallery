import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './index.less';

function GalleryLayout({ children }: any) {
  const history = useHistory();
  console.log(history, 'history');
  const cPath = history?.location?.pathname;
  const [activePath, setActivePath] = useState(cPath);
  const menu = [
    {
      name: '风险疑点库',
      path: '/1',
    },
    {
      name: '风险指标库',
      path: '/2',
    },
    {
      name: '风险态势展示',
      path: '/riskMonitor',
    },
    {
      name: '风险趋势展示',
      path: '/riskDisplay',
    },
  ];

  const changePath = (path: string) => {
    setActivePath(path);
    if (path !== '/') {
      history.push(path);
    }
  };

  // console.log(currentComponent, 224)
  return (
    <div className={styles.galleryLayout}>
      <div className={styles.pageheader}>
        <div className={styles.logo}></div>
        <div className={styles.nav}>
          {menu.map((it: any, index: number) => (
            <div
              onClick={() => {
                changePath(it?.path);
              }}
              className={
                it.path === activePath ? styles.activeNavTab : styles.navTab
              }
            >
              {it?.name}
            </div>
          ))}
        </div>
      </div>
      {children}
      {/* <div className={styles.footer}>V 1.0.2&nbsp;&nbsp;&nbsp;Released on 2020-04-26</div> */}
    </div>
  );
}

export default GalleryLayout;
