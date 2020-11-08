//@ts-nocheck
import React from 'react';
import Rank from './compontent/rank';
import Map from './compontent/map';
import { Col, Spin, Row } from 'antd';
// import GalleryLayout from '@/layouts/galleryLayout';
import styles from './index.less';

const Model = (props: any) => {
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    // newEvent.on('openSpin', () => {
    //   setLoading(true);
    // });
  });
  return (
      <div className={styles.gallery}>
        <Spin spinning={loading} tip="网页跳转中...">
          <Row style={{ height: '100%' }}>
            <Map />
            {/* <Rank /> */}
          </Row>
        </Spin>
      </div>
  );
};

export default Model;
