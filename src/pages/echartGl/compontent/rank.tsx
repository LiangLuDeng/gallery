// @ts-nocheck
import React, { useRef, useState, useEffect } from 'react';
import styles from './index.less';
import { Progress } from 'antd';
import Title from './headerTitle';
import DigitalScrolling from '../compontent/DigitalScrolling';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { fxtsPm } from './utils/mockData';

const Model = (props: any) => {
  const getNum = (strN: number[]) => {
    return (
      <div className={styles.numBlock}>
        {strN.map((it) => (
          <div className={styles.num}>{it}</div>
        ))}
      </div>
    );
  };

  const getLiArea = (item: any, index: number) => {
    return (
      <div className={styles.listOl}>
        <div className={styles.listTitle}>
          <div>
            <span
              style={{
                fontWeight: index <= 2 ? 700 : 600,
                color: index <= 2 ? 'orange' : '#ffffff',
                fontStyle: index <= 2 ? 'italic' : 'normal',
              }}
            >
              {index}
            </span>
            &nbsp;{item.name}
          </div>
          <div className={styles.numAndIcon}>
            {item.value}&nbsp;
            {item.status ? (
              <ArrowUpOutlined style={{ color: 'orange' }} />
            ) : (
              <ArrowDownOutlined style={{ color: '#1890ff' }} />
            )}
          </div>
        </div>
        <div className={styles.progress}>
          <Progress
            trailColor="#0B1C2E"
            percent={item.value / 500}
            showInfo={false}
          />
        </div>
      </div>
    );
  };

  return (
    <div className={styles.rank}>
      <div className={styles.total}>
        <Title title="风险态势实时排名" />
        <div className={styles.title}>
          风险疑点总户数
          <span>单位：户</span>
        </div>
        {/* {getNum([6, 7, 2, 5, 4, 8, 0])} */}
        <div style={{ position: 'relative', width: '100%', height: 52 }}>
          <DigitalScrolling />
        </div>
      </div>
      <div className={styles.listGroup}>
        {fxtsPm.map((it: any, index: number) => {
          return getLiArea(it, index);
        })}
      </div>
    </div>
  );
};

export default Model;
