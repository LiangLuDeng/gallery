/**
 * 首页大屏深圳地图模块的数字滚动组件
 * created by qintengbo on 2019-11-01.
 */
import React, { Component } from 'react';
import styles from './index.less';
// import one from '@/assets/monitorImg/one.png';
// import zero from '@/assets/monitorImg/zero.png';
// import two from '@/assets/monitorImg/two.png';
// import three from '@/assets/monitorImg/three.png';
// import four from '@/assets/monitorImg/four.png';
// import five from '@/assets/monitorImg/five.png';
// import six from '@/assets/monitorImg/six.png';
// import seven from '@/assets/monitorImg/seven.png';
// import eight from '@/assets/monitorImg/eight.png';
// import nine from '@/assets/monitorImg/nine.png';

const MAXLEN = 7; // 大屏数字最大长度
const randomData = () => Math.round(Math.random() * 1000);
// const numImgBox = [zero, one, two, three, four, five, six, seven, eight, nine];
export default class DigitalScrolling extends Component {
  constructor() {
    super();
    this.state = {
      newNum: 0,
      numInitArr: [],
    };
    this.timer = null;
  }

  componentDidMount() {
    this.getBigScreenNumberFetch();
  }

  componentWillUnmount() {
    if (this.timer !== null) {
      window.clearInterval(this.timer);
    }
  }

  // 获取发票扫描数
  getBigScreenNumberFetch = () => {
    // 接口需要改动,查询系统内部的发票扫描数
    // getBigScreenNumber().then(res => {
    //   if (res) {
    //     const list = res.toString().padStart(MAXLEN, '0');
    //     this.setState({
    //       newNum: res,
    //       numInitArr: Array.from(list),
    //     }, () => {
    //       this.increaseNumber();
    //     });
    //   }
    // });
    // mock
    const res = 1225480;
    const list = res.toString().padStart(MAXLEN, '0');
    this.setState(
      {
        newNum: res,
        numInitArr: Array.from(list),
      },
      () => {
        this.increaseNumber();
      },
    );
  };

  // 定时滑动增长数字
  increaseNumber = () => {
    const { newNum } = this.state;
    this.timer = window.setInterval(() => {
      const updateNum = newNum + randomData();
      // 数字补位
      const str = updateNum.toString().padStart(MAXLEN, '0');
      const list = Array.from(str);
      this.setState({
        newNum: updateNum,
        numInitArr: list,
      });
    }, 6000);
  };

  render() {
    const { numInitArr } = this.state;

    const numCard = new Array(MAXLEN).fill('0123456789').map((item, index) => {
      console.log(item);
      let src = '';
      switch (item) {
        case 0:
          src = zero;
          break;
        case 1:
          src = one;
          break;
        case 2:
          src = two;
          break;
        case 3:
          src = three;
          break;
        case 4:
          src = four;
          break;
        case 5:
          src = five;
          break;
        case 6:
          src = six;
          break;
        case 7:
          src = seven;
          break;
        case 8:
          src = eight;
          break;
        case 9:
          src = nine;
          break;
        default:
          break;
      }
      return (
        <div
          className={styles.numCard}
          key={`${index}`}
          style={index === MAXLEN - 1 ? { marginRight: '0' } : {}}
        >
          <span
            style={{
              transform: `translate(-50%, -${numInitArr[index] * 10}%)`,
            }}
          >
            {item}
            {/* <img style={{ width: 50, height: 70 }} src={src} alt="1" /> */}
          </span>
        </div>
      );
    });

    return <div className={styles.numWrap}>{numCard}</div>;
  }
}
