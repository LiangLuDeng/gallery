import React from 'react';
import Table from './component/table';
import KaiPiaoChart from './charts/kaipiao';
import styles from './rightContent.less';

const RightContent: React.FC = () => {
  /*const column = [
    {
      title: '排名',
      dataIndex: 'pm',
      key: 'pm',
    },
    {
      title: '纳税人姓名',
      dataIndex: 'nsrxm',
      key: 'nsrxm',
    },
    {
      title: '开票额',
      dataIndex: 'kpe',
      key: 'kpe',
    },
  ];
  const dataSource = [
    {
      id: 1,
      pm: '1',
      nsrxm: '华云中盛华云中盛华云中盛',
      kpe: '开票额343万',
    },
    {
      id: 2,
      pm: '2',
      nsrxm: '华云中盛',
      kpe: '开票额343万',
    },
    {
      id: 3,
      pm: '2',
      nsrxm: '华云中盛',
      kpe: '开票额343万',
    },
    {
      id: 4,
      pm: '2',
      nsrxm: '华云中盛',
      kpe: '开票额343万',
    },
    {
      id: 5,
      pm: '2',
      nsrxm: '华云中盛',
      kpe: '开票额343万',
    },
  ];

  const dealData: any = [];
  dataSource.map(item => {
    dealData.push({
      id: item.id,
      content: [
        {
          title: item.pm,
        },
        {
          title: item.nsrxm,
        },
        {
          title: item.kpe,
        },
      ],
    });
  });*/

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <KaiPiaoChart />
      </div>

      <div className={styles.bottom}>
        <KaiPiaoChart />
      </div>

      {/*<Table dataSource={dealData} column={column} />*/}
    </div>
  );
};

export default RightContent;
