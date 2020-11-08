// @ts-nocheck
import React, { useRef, useState, useEffect } from 'react';
import echarts from 'echarts/lib/echarts';
import 'echarts-gl';
import myMap from '../compontent/utils/mapArea.json';
import mapWithJm from '../compontent/utils/mapWithJm.json';
import shenzhenD from '../compontent/utils/shenzhen.json'
import gzData from '../compontent/utils/3DBar.json';
import jmScData from '../compontent/utils/jmScatters.json';
import { randomTest } from './utils/util';
import { Button } from 'antd'
import styles from './index.less';

const jmScatterD = jmScData.features.map((it: any) => {
  return {
    name: '',
    value: it.geometry.coordinates.concat([0]),
  };
});
const fixedPoint = [
  {
    name: 'A服装公司',
    // flag: true,
    value: [113.544371, 23.32925, 3],
  },
];

//                                   左      右，    下    上
const jmScattorD = randomTest(300, 112.36, 113.1, 21.8, 22.9);
const zqScattorD = randomTest(200, 111.9, 112.9006, 22.993, 23.7);
const zq1ScattorD = randomTest(30, 111.4, 111.9, 23.193, 23.6);
const zq2ScattorD = randomTest(40, 112.0, 112.52, 23.8, 24.2);

const gzScattorD = randomTest(270, 113.1, 114.7006, 22.393, 23.7);
const gz1ScattorD = randomTest(50, 113.2, 113.7006, 23.193, 23.5);

const amScattorD = randomTest(150, 113.196, 113.906, 22.083, 22.7);

const szScattorD = randomTest(130, 113.896, 114.7206, 22.283, 23.3);
const hzScattorD = randomTest(100, 114.496, 115.1, 22.883, 23.24);

const thearea = ['肇庆市', '佛山市', '惠州市', '珠海市'];
echarts.registerMap('myMap', myMap);
echarts.registerMap('myMapWithDetail', mapWithJm);
echarts.registerMap('shenzhen', shenzhenD);
const Model = (props: any) => {
  const [toolboxStyle, setToolBoxStyle] = useState('tooltipBoxNone');
  const mapRef = useRef<any>();
  // 深圳地图配置
  const getOption = (params) => {
    const isCheckMode = params.mapName === 'myMapWithDetail';
    const regionsData = shenzhenD;
    const regions = regionsData.features.map(function (feature, index) {
      const isDistrict = feature.properties.level === 'district';
      return {
        name: feature.properties.name,
        value: Math.random(),
        itemStyle: {
          opacity: 0.5,
          color: '#185A97',
          borderColor: 'rgba(51,247,255, .9)',
          borderWidth: 2,
          shadowBlur: 5,
          shadowColor: 'rgba(255, 255, 255, 0.4)',
        },
        label: {
          // show: feature.properties.level === 'district' ? false : true,
          show: false,
          backgroundColor: 'rgba(255,255,255,0)',
          textStyle: {
            color: '#fff',
            fontSize: isDistrict ? 14 : 18,
            fontFamily: 'Microsoft YaHei',
            fontWeight: isDistrict ? '500' : '600',
            opacity: 1,
            backgroundColor: 'rgba(255,255,255,0)',
          },
        },
      };
    });

    const normalS = [
      {
        name: 'scatter',
        type: 'scatter3D',
        coordinateSystem: 'geo3D',
        opacity: 0.4,
        silent: false, //图形是否不响应和触发鼠标事件
        // shading: 'realistic', //着色效果
        // animationDurationUpdate: 6000,
        symbolSize: () => Math.floor(Math.random() * 4 + 1),
        label: {
          show: false,
          formatter: '{b}',
        },
        itemStyle: {
          color: 'yellow',
          opacity: 1,
        },
        data: jmScattorD.concat(
          zqScattorD,
          gzScattorD,
          amScattorD,
          szScattorD,
          hzScattorD,
          gz1ScattorD,
          zq1ScattorD,
          zq2ScattorD,
        ),
      },
    ];
    const theFixedPoint = {
      name: 'scatter1',
      type: 'scatter3D',
      coordinateSystem: 'geo3D',
      opacity: 1,
      silent: false, //图形是否不响应和触发鼠标事件
      // shading: 'realistic', //着色效果
      // animationDurationUpdate: 6000,
      symbol:
        'path://M512 93.672727c192.791273 0 349.090909 157.742545 349.090909 352.302546 0 126.650182-110.941091 298.728727-332.8 516.189091a23.272727 23.272727 0 0 1-32.581818 0l-10.472727-10.309819C270.359273 739.258182 162.909091 570.647273 162.909091 445.975273c0-194.56 156.299636-352.302545 349.090909-352.302546zM512 302.545455a116.363636 116.363636 0 1 0 0 232.727272 116.363636 116.363636 0 0 0 0-232.727272z',
      // symbol: 'path://M874.666667 469.333333c17.28 42.666667 42.666667 85.333333 42.666666 128v213.333334c0 27.946667-23.893333 42.666667-64 42.666666s-64-17.28-64-42.666666v-42.666667H234.666667v42.666667c0 25.386667-23.893333 42.666667-64 42.666666s-64-14.72-64-42.666666V597.333333c0-42.666667 25.386667-85.333333 42.666666-128s-64-37.333333-64-64 5.333333-42.666667 42.666667-42.666666h64s30.293333-87.04 42.666667-128 64-64 106.666666-64h341.333334c42.666667 0 94.293333 23.04 106.666666 64s42.666667 128 42.666667 128h64c37.333333 0 42.666667 16 42.666667 42.666666s-81.28 21.333333-64 64z m-469.333334 149.333334a21.333333 21.333333 0 0 0 21.333334 21.333333h170.666666a21.333333 21.333333 0 0 0 21.333334-21.333333v-21.333334a21.333333 21.333333 0 0 0-21.333334-21.333333h-170.666666a21.333333 21.333333 0 0 0-21.333334 21.333333v21.333334zM192 618.666667a64 64 0 1 0 64-64 64 64 0 0 0-64 64z m597.333333-256c0-21.333333-42.666667-106.666667-42.666666-106.666667H277.333333s-42.666667 85.333333-42.666666 106.666667v21.333333a42.666667 42.666667 0 0 0 42.666666 42.666667h469.333334a42.666667 42.666667 0 0 0 42.666666-42.666667v-21.333333z m-21.333333 192a64 64 0 1 0 64 64 64 64 0 0 0-64-64z',
      symbolSize: 30,
      label: {
        show: false,
        formatter: '\n\t{b}\n',
        textStyle: {
          color: '#fff',
          fontSize: 14,
          fontWeight: '500',
          opacity: 1,
          borderWidth: 1,
          borderColor: 'rgba(80, 210, 233, 0.7)',
          backgroundColor: 'rgba(0, 0, 0, 0)',
        },
      },
      itemStyle: {
        color: 'yellow',
        opacity: 1,
      },
      data: fixedPoint,
    };

    const series = isCheckMode ? normalS.concat(theFixedPoint) : normalS;
    return {
      animation: true,
      backgroundColor: '#141d26',
      geo3D: [
        {
          show: true,
          map: params.mapName,
          regionHeight: 2,
          boxHeight: 15,
          aspectScale: 1.1, // 地图长宽比
          zlevel: 1,
          regions,
          viewControl: {
            projection: 'perspective',
            center: params.center,
            distance: params.distance,
            alpha: params.alpha,
            animationDurationUpdate: 1500,
          },
        },
      ],
      series,
    };
  };

  useEffect(() => {
    const canvas = document.getElementById('map');
    mapRef.current = echarts.init(canvas);
    const params = {
      zoom: 1,
      center: [0, 1, 1],
      distance: 60,
      alpha: 90,
      mapName: 'shenzhen',
    };
    const options = getOption(params);
    console.log(options);
    mapRef.current.setOption(options, true);
  }, []);

  const changeOption = (flag: number) => {
    // console.log('ddddddddd, fla', flag);
    let params = {
      zoom: 1,
      center: [1, 1, 1],
      distance: 70,
      alpha: 90,
      mapName: 'shenzhen',
    };
    if (flag === 1) {
      params = {
        zoom: 0.5,
        // center: [-10, -10, 1],
        // center: [-15, -5, -10]
        //第一个参数：增大，视角沿x轴正方向水平右移动（-图向左）；
        //第二个参数：增大，视角沿y轴正方向垂直向上移动（-图向下）；
        // 第三个参数：增大，视角向z轴正方向移动（-图变小）

        center: [8, -10, -14],
        distance: 28,
        alpha: 90,
        mapName: 'myMapWithDetail',
      };
    }
    const options = getOption(params);
    mapRef.current.setOption(options, true);
  };

  const gotoThePoint = (p: number) => {
    if (p === 1) {
      changeOption(1);
      setToolBoxStyle('tooltipBox');
    } else {
      changeOption(0);
      setToolBoxStyle('tooltipBoxNone');
    }
  };

  return (
    <>
      <div className={styles.header}>
        <div>
          <Button
            size="large"
            onClick={() => gotoThePoint(1)}
            // icon={<SearchOutlined />}
          />
        </div>
      </div>
      <div style={{ width: 1900, height: 800 }} id="map" />
    </>
  );
};

export default Model;
