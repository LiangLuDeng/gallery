// top10货物
import React, { Component } from 'react';
import { svgData } from './utils/mockData';
import styles from '../index.less';

class Top10Svg extends Component {
  state = {};

  getCurrentData = (sort) => {
    const { data = svgData } = this.props;
    const cData = svgData.filter((item, index) => index + 1 === sort)[0] || '';
    return cData;
  };

  render() {
    const { height, data = svgData, width } = this.props;
    return (
      <div className={styles.Top10Svg}>
        {data && data.length > 0 ? (
          <svg
            version="1.1"
            width={width}
            height={height - 22}
            viewBox="0 0 549 437"
            transform="scale(0.85)"
          >
            <g
              id="Welcome"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g id="pc-copy" transform="translate(-1091.000000, -296.000000)">
                <g id="分组-5" transform="translate(1090.000000, 292.000000)">
                  <g id="分组-2" transform="translate(80.000000, 30.000000)">
                    <g id="分组-4" transform="translate(50.000000, 110.000000)">
                      <g id="分组" transform="translate(43.000000, 0.000000)">
                        {/* <!-- NO3 --> */}
                        <polygon
                          id="路径-3"
                          fill="#006EB3"
                          points="53 22 53 79 92 67 93 10"
                        ></polygon>
                        <polygon
                          id="路径-4"
                          fill="#00578D"
                          points="0 12 39 0 93 10 53 22"
                        ></polygon>
                        <polygon
                          id="路径-5"
                          fill="#005285"
                          points="-3.63816269e-12 12 53 21.2169119 53 129.280257 2.38742359e-12 119.64684"
                        ></polygon>
                      </g>
                      <g id="分组" transform="translate(0.000000, 51.000000)">
                        {/* <!-- NO4 --> */}
                        <polygon
                          id="路径-3"
                          fill="#01A8DF"
                          points="56 23 56 121 95 109 96 11"
                        ></polygon>
                        <polygon
                          id="路径-4"
                          fill="#0198C7"
                          points="0 12 39 0 96 11 56 23"
                        ></polygon>
                        <polygon
                          id="路径-5"
                          fill="#007EB7"
                          points="-1.8189894e-11 12 56 21.9496436 56 169.280257 -5.45696821e-12 157.971375"
                        ></polygon>
                      </g>
                      <g id="分组" transform="translate(95.000000, 67.000000)">
                        {/* <!-- NO5 --> */}
                        <polygon
                          id="路径-3"
                          fill="#00D0A8"
                          points="53 22 53 129 92 117 93 10"
                        ></polygon>
                        <polygon
                          id="路径-4"
                          fill="#00B892"
                          points="0 12 39 0 93 10 53 22"
                        ></polygon>
                        <polygon
                          id="路径-5"
                          fill="#019F81"
                          points="-3.63816269e-12 12 53 21.2169119 53 129.280257 2.38742359e-12 119.64684"
                        ></polygon>
                      </g>
                      <g id="分组" transform="translate(55.000000, 109.000000)">
                        {/* <!-- NO6 --> */}
                        <polygon
                          id="路径-3"
                          fill="#006EB3"
                          points="53 22 53 119 93 107 93 10"
                        ></polygon>
                        <polygon
                          id="路径-4"
                          fill="#00578D"
                          points="0 12 39 0 93 10 53 22"
                        ></polygon>
                        <polygon
                          id="路径-5"
                          fill="#005285"
                          points="1 12 53 21.2169119 53 121.280257 1 110.64684"
                        ></polygon>
                      </g>
                    </g>
                    {/* <!-- dddddd --> */}
                    <g id="分组" transform="translate(40.000000, 0.000000)">
                      {/* <!-- NO1 --> */}
                      <polygon
                        id="路径-3"
                        fill="#00D5DF"
                        points="53 22 53 122 92 110 93 10"
                      ></polygon>
                      <polygon
                        id="路径-4"
                        fill="#00BCBD"
                        points="0 12 39 0 93 10 53 22"
                      ></polygon>
                      <polygon
                        id="路径-5"
                        fill="#0199A3"
                        points="-3.63797881e-12 12 53 21.2169119 53 162.280257 5.40012479e-12 152.64684"
                      ></polygon>
                    </g>
                    <g id="分组" transform="translate(0.000000, 100.000000)">
                      {/* <!-- NO2 --> */}
                      <polygon
                        id="路径-3"
                        fill="#006EB3"
                        points="56 23 56 74 96 62 96 11"
                      ></polygon>
                      <polygon
                        id="路径-4"
                        fill="#00578D"
                        points="0 12 39 0 96 11 56 23"
                      ></polygon>
                      <polygon
                        id="路径-5"
                        fill="#01456F"
                        points="-1.8189894e-11 12 56 21.9496436 56 220.280257 -2.27373675e-12 209.971375"
                      ></polygon>
                    </g>
                    <g id="分组" transform="translate(198.000000, 227.000000)">
                      {/* <!-- NO7 --> */}
                      <polygon
                        id="路径-3"
                        fill="#01A8DF"
                        points="53 22 53 111 92 99 93 10"
                      ></polygon>
                      <polygon
                        id="路径-4"
                        fill="#0198C7"
                        points="0 12 39 0 93 10 53 22"
                      ></polygon>
                      <polygon
                        id="路径-5"
                        fill="#007EB7"
                        points="-3.63816269e-12 12 53 21.2169119 53 111.280257 5.40012479e-12 101.64684"
                      ></polygon>
                    </g>
                    <g id="分组" transform="translate(157.000000, 269.000000)">
                      {/* <!-- NO8 --> */}
                      <polygon
                        id="路径-3"
                        fill="#00D0A8"
                        points="54 21 54 80 94 68 94 9"
                      ></polygon>
                      <polygon
                        id="路径-4"
                        fill="#00B892"
                        points="0 12 39 0 93 10 53 22"
                      ></polygon>
                      <polygon
                        id="路径-5"
                        fill="#019F81"
                        points="1 12 54 21.2169119 54 81.2802565 1 71.6468403"
                      ></polygon>
                    </g>
                    <g id="分组" transform="translate(251.000000, 268.000000)">
                      {/* <!-- NO9 --> */}
                      <polygon
                        id="路径-3"
                        fill="#00D0A8"
                        points="53 22 53 80 92 68 93 10"
                      ></polygon>
                      <polygon
                        id="路径-4"
                        fill="#00B892"
                        points="0 12 39 0 93 10 53 22"
                      ></polygon>
                      <polygon
                        id="路径-5"
                        fill="#019F81"
                        points="-3.63797881e-12 12 53 21.2169119 53 80.2802565 5.40012479e-12 69.6468403"
                      ></polygon>
                    </g>
                    <g id="分组" transform="translate(211.000000, 296.000000)">
                      {/* <!-- NO10 --> */}
                      <polygon
                        id="路径-3"
                        fill="#006EB3"
                        points="53 22 53 65 93 53 93 10"
                      ></polygon>
                      <polygon
                        id="路径-4"
                        fill="#00578D"
                        points="0 12 39 0 93 10 53 22"
                      ></polygon>
                      <polygon
                        id="路径-5"
                        fill="#005285"
                        points="-3.63797881e-12 12 53 21.2169119 53 65.2802565 2.38742359e-12 54.6468403"
                      ></polygon>
                    </g>

                    {/* <!-- 柱状图内部百分比标签 --> */}
                    {/* <!-- NO1 --> */}
                    <text
                      id="37.52%"
                      transform="translate(67.940293, 56.492172) rotate(-353.000000) translate(-67.940293, -56.492172) "
                      fontFamily="Arvo-Bold, Arvo"
                      fontSize="20"
                      fontWeight="bold"
                      fill="#FFFFFF"
                    >
                      <tspan x="46.9402933" y="62.4921716">
                        {data && this.getCurrentData(1).ratio}
                      </tspan>
                    </text>
                    {/* <!-- NO2 --> */}
                    <text
                      id="13.37%"
                      transform="translate(27.451474, 222.309368) rotate(-353.000000) translate(-27.451474, -222.309368) "
                      fontFamily="Arvo-Bold, Arvo"
                      fontSize="20"
                      fontWeight="bold"
                      fill="#FFFFFF"
                    >
                      <tspan x="7.95147405" y="228.309368">
                        {data && this.getCurrentData(2).ratio}
                      </tspan>
                    </text>
                    {/* <!-- NO3 --> */}
                    <text
                      id="11.38%"
                      transform="translate(120.555980, 148.187498) rotate(-353.000000) translate(-120.555980, -148.187498) "
                      fontFamily="Arvo-Bold, Arvo"
                      fontSize="20"
                      fontWeight="bold"
                      fill="#FFFFFF"
                    >
                      <tspan x="102.05598" y="154.187498">
                        {data && this.getCurrentData(3).ratio}
                      </tspan>
                    </text>
                    {/* <!-- NO4 --> */}
                    <text
                      id="10.78%"
                      transform="translate(82.444020, 252.431237) rotate(-353.000000) translate(-82.444020, -252.431237) "
                      fontFamily="Arvo-Bold, Arvo"
                      fontSize="20"
                      fontWeight="bold"
                      fill="#FFFFFF"
                    >
                      <tspan x="61.9440202" y="258.431237">
                        {data && this.getCurrentData(4).ratio}
                      </tspan>
                    </text>
                    {/* <!-- NO5 --> */}
                    <text
                      id="7.58%"
                      transform="translate(171.466382, 209.065629) rotate(-353.000000) translate(-171.466382, -209.065629) "
                      fontFamily="Arvo-Bold, Arvo"
                      fontSize="20"
                      fontWeight="bold"
                      fill="#FFFFFF"
                    >
                      <tspan x="153.966382" y="215.065629">
                        {data && this.getCurrentData(5).ratio}
                      </tspan>
                    </text>
                    {/* <!-- NO6 --> */}
                    <text
                      id="6.99%"
                      transform="translate(131.466382, 282.065629) rotate(-353.000000) translate(-131.466382, -282.065629) "
                      fontFamily="Arvo-Bold, Arvo"
                      fontSize="20"
                      fontWeight="bold"
                      fill="#FFFFFF"
                    >
                      <tspan x="113.966382" y="288.065629">
                        {data && this.getCurrentData(6).ratio}
                      </tspan>
                    </text>
                    {/* <!-- NO7 --> */}
                    <text
                      id="4.99%"
                      transform="translate(224.466382, 259.065629) rotate(-353.000000) translate(-224.466382, -259.065629) "
                      fontFamily="Arvo-Bold, Arvo"
                      fontSize="20"
                      fontWeight="bold"
                      fill="#FFFFFF"
                    >
                      <tspan x="206.966382" y="265.065629">
                        {data && this.getCurrentData(7).ratio}
                      </tspan>
                    </text>
                    {/* <!-- NO8 --> */}
                    <text
                      id="2.59%"
                      transform="translate(185.466382, 313.065629) rotate(-351.000000) translate(-185.466382, -313.065629) "
                      fontFamily="Arvo-Bold, Arvo"
                      fontSize="20"
                      fontWeight="bold"
                      fill="#FFFFFF"
                    >
                      <tspan x="167.966382" y="319.065629">
                        {data && this.getCurrentData(8).ratio}
                      </tspan>
                    </text>
                    {/* <!-- NO9 --> */}
                    <text
                      id="2.59%"
                      transform="translate(279.466382, 293.065629) rotate(-353.000000) translate(-279.466382, -293.065629) "
                      fontFamily="Arvo-Bold, Arvo"
                      fontSize="20"
                      fontWeight="bold"
                      fill="#FFFFFF"
                    >
                      <tspan x="261.966382" y="299.065629">
                        {data && this.getCurrentData(9).ratio}
                      </tspan>
                    </text>
                    {/* <!-- NO10 --> */}
                    <text
                      id="2.2%"
                      transform="translate(238.992470, 333.639086) rotate(-349.000000) translate(-238.992470, -333.639086) "
                      fontFamily="Arvo-Bold, Arvo"
                      fontSize="20"
                      fontWeight="bold"
                      fill="#FFFFFF"
                    >
                      <tspan x="224.99247" y="339.639086">
                        {data && this.getCurrentData(10).ratio}
                      </tspan>
                    </text>
                  </g>

                  {/* <!-- 索引折线 --> */}
                  <polyline
                    id="路径-14"
                    stroke="#00FDFF"
                    points="190 33 205.474701 17.3973967 238 17.08"
                  ></polyline>
                  <polyline
                    id="路径-14"
                    stroke="#00FDFF"
                    points="239 138 254.474701 122.397397 287 122.08"
                  ></polyline>
                  <polyline
                    id="路径-14"
                    stroke="#00FDFF"
                    points="291 198 306.474701 182.397397 339 182.08"
                  ></polyline>
                  <polyline
                    id="路径-14"
                    stroke="#00FDFF"
                    points="351 248 366.474701 232.397397 399 232.08"
                  ></polyline>
                  <polyline
                    id="路径-14"
                    stroke="#00FDFF"
                    points="402 294 417.474701 278.397397 450 278.08"
                  ></polyline>
                  <polyline
                    id="路径-15"
                    stroke="#00FDFF"
                    points="98 133 73 108 50 108"
                  ></polyline>
                  <polyline
                    id="路径-16"
                    stroke="#00FDFF"
                    points="111 392 138 392 162 356"
                  ></polyline>
                  <polyline
                    id="路径-16"
                    stroke="#00FDFF"
                    points="161 421 188 421 215 373"
                  ></polyline>
                  <polyline
                    id="路径-16"
                    stroke="#00FDFF"
                    transform="translate(286.000000, 407.000000) scale(-1, 1) translate(-286.000000, -407.000000) "
                    points="259 431 286 431 313 383"
                  ></polyline>
                  <polyline
                    id="路径-17"
                    stroke="#00FDFF"
                    points="330 390 345 406 385 406"
                  ></polyline>

                  {/* <!-- 柱状图外标签 --> */}
                  <text
                    id="黑色金属冶炼品-¥180,000"
                    fontSize="22"
                    fontWeight="400"
                    fill="#FFFFFF"
                  >
                    <tspan x="252" y="23">
                      {data && this.getCurrentData(1).hwmc}
                    </tspan>
                    <tspan x="252" y="53">
                      ¥&nbsp;
                      {data && (this.getCurrentData(1).je * 0.00001).toFixed(2)}
                      万元
                    </tspan>
                  </text>
                  <text
                    id="电子元器件"
                    fontSize="22"
                    fontWeight="400"
                    fill="#FFFFFF"
                  >
                    <tspan x="300" y="129">
                      {data && this.getCurrentData(3).hwmc}
                    </tspan>
                  </text>
                  <text id="黄金" fontSize="22" fontWeight="400" fill="#FFFFFF">
                    <tspan x="0" y="118">
                      {data && this.getCurrentData(2).hwmc}
                    </tspan>
                  </text>
                  <text
                    id="制品1"
                    fontSize="22"
                    fontWeight="400"
                    fill="#FFFFFF"
                  >
                    <tspan x="51" y="398">
                      {data && this.getCurrentData(4).hwmc}
                    </tspan>
                  </text>
                  <text
                    id="营改增"
                    fontSize="22"
                    fontWeight="400"
                    fill="#FFFFFF"
                  >
                    <tspan x="351" y="188">
                      {data && this.getCurrentData(5).hwmc}
                    </tspan>
                  </text>
                  <text id="煤炭" fontSize="22" fontWeight="400" fill="#FFFFFF">
                    <tspan x="411" y="238">
                      {data && this.getCurrentData(7).hwmc}
                    </tspan>
                  </text>
                  <text
                    id="医疗器械"
                    fontSize="22"
                    fontWeight="400"
                    fill="#FFFFFF"
                  >
                    <tspan x="462" y="284">
                      {data && this.getCurrentData(9).hwmc}
                    </tspan>
                  </text>
                  <text
                    id="制品1"
                    fontSize="22"
                    fontWeight="400"
                    fill="#FFFFFF"
                  >
                    <tspan x="101" y="427">
                      {data && this.getCurrentData(6).hwmc}
                    </tspan>
                  </text>
                  <text
                    id="制品3"
                    fontSize="22"
                    fontWeight="400"
                    fill="#FFFFFF"
                  >
                    <tspan x="320" y="438">
                      {data && this.getCurrentData(8).hwmc}
                    </tspan>
                  </text>
                  <text
                    id="制品4"
                    fontSize="22"
                    fontWeight="400"
                    fill="#FFFFFF"
                  >
                    <tspan x="400" y="412">
                      {data && this.getCurrentData(10).hwmc}
                    </tspan>
                  </text>
                </g>
              </g>
            </g>
          </svg>
        ) : (
          ''
        )}
      </div>
    );
  }
}
export default Top10Svg;
