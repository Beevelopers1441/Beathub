import { css } from 'styled-components';

// const fontWeight = {
//   regular: 400,
//   medium: 500,
//   bold: 'bold',
// };

const theme = {
  colors: {
    black: '#000000',
    white: '#ffffff',
    darkBlue: '#212C4F',
    lightBlue: '#C6D0EB',
    lightGrey: '#F0F3F5',
    purple: '#7B42F6',
    violet: '#B01EFF',
    pink: '#FF6780',
    blue: '#3672F8',
    teal: '#56CCF2',
    green: '#A6E1D5',
    teurquoise: '#14F1D9',
    subGrey: '#ABB0B5',
    // gredient
    purpleViolet: 'linear-gradient(117.03deg, #7B42F6 0%, #B01EFF 100%)',
    violetPink: 'linear-gradient(117.03deg, #B01EFF 0%, #E1467C 100%)',
    pinkDarkGreen: 'linear-gradient(117.03deg, #E1467C 0%, #205284 100%)',
    blueViolet: 'linear-gradient(117.03deg, #3672F8 0%, #B01EFF 100%)',
    blueMarine: 'linear-gradient(115.74deg, #14F1D9 1.79%, #3672F8 100%)',
    deepBlue: 'linear-gradient(93.96deg, #4F73C3 0%, #3C46A2 100%)'
  },

  font: {
    bold: css`
      font-style: normal;
      font-weight: bold;
    `,
  }

/* example style */
//   flexCol: (justifyContent = 'center', alignItems = 'center') => css`
//     display: flex;
//     flex-direction: column;
//     justify-content: ${justifyContent};
//     align-items: ${alignItems};
//   `,
//   flexRow: (justifyContent = 'center', alignItems = 'center') => css`
//     display: flex;
//     flex-direction: row;
//     justify-content: ${justifyContent};
//     align-items: ${alignItems};
//   `,
//   font: {
//     n36m: css`
//       font-weight: ${fontWeight.medium};
//       font-size: 36px;
//       line-height: 48px;
//     `,
//     n26b: css`
//       font-weight: ${fontWeight.bold};
//       font-size: 26px;
//       line-height: 38px;
//     `,
//     n20m: css`
//       font-weight: ${fontWeight.medium};
//       font-size: 20px;
//       line-height: 32px;
//     `,
//     n18b: css`
//       font-weight: ${fontWeight.bold};
//       font-size: 18px;
//       line-height: 26px;
//     `,
//     n16m: css`
//       font-weight: ${fontWeight.medium};
//       font-size: 16px;
//       line-height: 24px;
//     `,
//     n16r: css`
//       font-weight: ${fontWeight.regular};
//       font-size: 16px;
//       line-height: 24px;
//     `,
//     n14m: css`
//       font-weight: ${fontWeight.medium};
//       font-size: 14px;
//       line-height: 20px;
//     `,
//     n14r: css`
//       font-weight: ${fontWeight.regular};
//       font-size: 14px;
//       line-height: 20px;
//     `,
//     n12m: css`
//       font-weight: ${fontWeight.medium};
//       font-size: 12px;
//       line-height: 20px;
//     `,
//   },
};

export default theme;
