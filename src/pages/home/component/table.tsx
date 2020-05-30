import React, { useState, useEffect } from 'react';
import styles from './table.less';

interface IProps {
  column: any;
  dataSource: any;
}
const Table = ({ column, dataSource }: IProps) => {
  const [tableColumn, setTableColumn] = useState([]);
  const [tableDataSource, setTableDataSource] = useState([]);

  useEffect(() => {
    setTableColumn(column);
    setTableDataSource(dataSource);
  }, [dataSource, column]);

  return (
    <div className={styles.tableCompenent}>
      这是一个表格
      <table>
        <thead>
          <tr>
            {tableColumn.map(item => {
              return <th key={item?.key}>{item?.title}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {tableDataSource.map(item => {
            return (
              <tr key={item?.id}>
                {(item?.content || []).map((item, index) => {
                  return (
                    <td key={item.index} title={item?.title}>
                      {item?.title}
                    </td>
                  );
                })}

                {/* <td>{item?.age}</td> 
                  <td>{item?.address}</td>  */}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
