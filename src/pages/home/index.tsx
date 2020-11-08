import React from 'react';
import Partition from '@/components/Partition';
import { useHistory } from 'react-router-dom'
import { allPart } from './partInfo';
import styles from './index.less';
// @ts-ignore
// 拿到所有图标
const modulesFiles = require.context('@/assets/images', false, /.svg$/);
// @ts-ignore
const requireAll = requireContext => requireContext.keys().map(requireContext)
const iconArray = requireAll(modulesFiles);

export default () => {
  const history = useHistory()
  // console.log(allPart, 'allpart');
  const goToPath = (path:string) => {
    history.push(path)
  }
  return (
    // <Partition leftContent={<LeftContent />} rightContent={<RightContent />} />
    <div className={styles.container}>
      <div className={styles.menu}>
        {allPart.map((it, index) => {
          const iconIndex = index < iconArray.length ? index : index % iconArray.length;
          //@ts-ignore
          // const iconIndex = parseInt(Math.random()*(iconArray.length+1),10) - 1;
          return (
            <div className={styles.menu_item} onClick={() => goToPath(it?.path)}>
              <img style={{ width:50, height:50, marginRight:10 }} src={iconArray[iconIndex]} alt="s"/>
              {it?.title}
              <span>
                {it?.desc}
                {it?.desc ? '...' : ''}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
