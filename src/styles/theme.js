// import { isEmptyString } from 'utils/app.utils';
// import { ObjectiveStatus } from 'utils/constants';
import { scaleFactor } from './globalStyle';

function hashStr(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i += 1) {
    hash += str.charCodeAt(i);
  }
  return hash;
}

export const getScaledValue = (value = 0) => {
  return `${value * scaleFactor}px`;
};

export const dim = {
  _0px: getScaledValue(0),
  _1px: getScaledValue(1),
  _2px: getScaledValue(2),
  _4px: getScaledValue(4),
  _6px: getScaledValue(6),
  _7px: getScaledValue(7),
  _8px: getScaledValue(8),
  _10px: getScaledValue(10),
  _12px: getScaledValue(12),
  _14px: getScaledValue(14),
  _16px: getScaledValue(16),
  _18px: getScaledValue(18),
  _20px: getScaledValue(20),
  _22px: getScaledValue(22),
  _24px: getScaledValue(24),
  _26px: getScaledValue(26),
  _28px: getScaledValue(28),
  _30px: getScaledValue(30),
  _32px: getScaledValue(32),
  _34px: getScaledValue(34),
  _36px: getScaledValue(36),
  _38px: getScaledValue(38),
  _40px: getScaledValue(40),
  _42px: getScaledValue(42),
  _44px: getScaledValue(44),
  _46px: getScaledValue(46),
  _48px: getScaledValue(48),
  _50px: getScaledValue(50),
  _52px: getScaledValue(52),
  _54px: getScaledValue(54),
  _56px: getScaledValue(56),
  _58px: getScaledValue(58),
  _60px: getScaledValue(60),
  _62px: getScaledValue(62),
  _64px: getScaledValue(64),
  _66px: getScaledValue(66),
  _68px: getScaledValue(68),
  _70px: getScaledValue(70),
  _72px: getScaledValue(72),
  _74px: getScaledValue(74),
  _76px: getScaledValue(76),
  _78px: getScaledValue(78),
  _80px: getScaledValue(80),
  _82px: getScaledValue(82),
  _scale: function _scale(value) {
    return getScaledValue(value);
  }
};

const Theme = {
  color: {
    base_0: '#000000',
    base_10: '#202124',
    base_20: '#54555d',
    base_30: '#72737d',
    base_70: '#c8c9d1',
    base_80: '#eaebf0',
    base_90: '#f8f8fa',
    base_100: '#ffffff',
    blue_10: '#1f2e64',
    blue_20: '#182272',
    blue_50: '#2f53d7',
    blue_80: '#95a3fb',
    blue_100: '#f2f2ff',
    green_20: '#135d0d',
    green_50: '#1db510',
    green_80: '#84e57c',
    green_100: '#f2fff5',
    effects_scrim_black_50: 'rgba(0, 0, 0, 0.5)',
    yellow_20: '#886412',
    yellow_50: '#f9b312',
    yellow_80: '#ffe58e',
    yellow_90: '#fdf7e6',
    yellow_100: '#fff8db',
    red_20: '#751818',
    red_50: '#eb5757',
    red_80: '#ff9696',
    red_100: '#fff2f2',
    effects_highlights_yellow: '#ffcc19',
    grey_1: '#333333',
    grey_25: '#edeef3',
    grey_50: '#979797',
    stroke_0_5_px_light_grey: 'rgba(0, 0, 0, 0.09)',
    highlights_blue: '#e5f1ff',
    text_low_emphasis: '#a2a5b1',
    button_hover_blue: '#5e89f7',
    button_active_blue: '#cce4ff',
    effects_card_highlights_yellow: '#ffcc19',
    white: '#ffffff',
    black: '#000000',
    tomato: '#df2e2e',
    button_disabled: '#c8c9d1',
    transparent: '#0000',
    text_normal: '#6d6c6f'
  },
  dim,
  randomColor: function randomColor(str = null) {
    const randomColorArray = [
      '#f69988',
      '#f36c60',
      '#e84e40',
      '#ff7997',
      '#ff5177',
      '#f48fb1',
      '#f06292',
      '#ec407a',
      '#ff80ab',
      '#ff4081',
      '#ce93d8',
      '#ba68c8',
      '#ab47bc',
      '#ea80fc',
      '#5c6bc0',
      '#3f51b5',
      '#8c9eff',
      '#536dfe',
      '#3d5afe',
      '#91a7ff',
      '#738ffe',
      '#5677fc',
      '#6889ff',
      '#4d73ff',
      '#80deea',
      '#4dd0e1',
      '#26c6da',
      '#00bcd4',
      '#84ffff',
      '#18ffff',
      '#00e5ff',
      '#80cbc4',
      '#4db6ac',
      '#26a69a',
      '#009688',
      '#64ffda',
      '#1de9b6',
      '#00bfa5',
      '#72d572',
      '#42bd41',
      '#2baf2b',
      '#a2f78d',
      '#e6ee9c',
      '#dce775',
      '#d4e157',
      '#ffee58',
      '#ffe082',
      '#ffd54f',
      '#ffca28',
      '#ffe57f',
      '#ffd740',
      '#ffc400',
      '#ffcc80',
      '#ffb74d',
      '#ffa726',
      '#ffd180',
      '#ffab40',
      '#ff9100',
      '#ffccbc',
      '#ffab91',
      '#ff8a65',
      '#ff9e80',
      '#ff6e40',
      '#bcaaa4',
      '#a1887f',
      '#8d6e63',
      '#90a4ae',
      '#78909c',
      '#607d8b'
    ];
    // if (isEmptyString(str)) {
    //   return randomColorArray[
    //     Math.floor(Math.random() * randomColorArray.length)
    //   ];
    // }
    const index = hashStr(str) % randomColorArray.length;
    return randomColorArray[index];
  }
};

// const getColor = type => {
//   if (type === ObjectiveStatus.DROPPED) return `${Theme.color.base_20}`;
//   if (type === ObjectiveStatus.OFF_TRACK) return `${Theme.color.tomato}`;
//   if (type === ObjectiveStatus.ON_TRACK) return `${Theme.color.green_50}`;
//   if (type === ObjectiveStatus.NOT_ACHIEVED) return `${Theme.color.blue_50}`;
//   if (type === ObjectiveStatus.NOT_STARTED) return `${Theme.color.base_20}`;
//   if (type === ObjectiveStatus.NEEDS_WORK) return `${Theme.color.yellow_20}`;
//   if (type === ObjectiveStatus.ACHIEVED) return `${Theme.color.green_20}`;
//   return `${Theme.color.base_100}`;
// };

// const getBgColor = type => {
//   if (type === ObjectiveStatus.DROPPED) return `${Theme.color.base_70}`;
//   if (type === ObjectiveStatus.OFF_TRACK) return `${Theme.color.red_100}`;
//   if (type === ObjectiveStatus.ON_TRACK) return `${Theme.color.green_100}`;
//   if (type === ObjectiveStatus.NOT_ACHIEVED)
//     return `${Theme.color.highlights_blue}`;
//   if (type === ObjectiveStatus.NOT_STARTED) return `${Theme.color.base_80}`;
//   if (type === ObjectiveStatus.NEEDS_WORK) return `${Theme.color.yellow_100}`;
//   if (type === ObjectiveStatus.ACHIEVED) return `${Theme.color.green_100}`;
//   return `${Theme.color.base_80}`;
// };

export default Theme;
// export { getColor, getBgColor };
