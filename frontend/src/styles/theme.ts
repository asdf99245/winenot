import { DefaultTheme } from 'styled-components';

export const colors = {
  primary: '#820000',
  white: '#FFFFFF',
  text: '#2D2727',
  gray1: '#4F5660',
  gray2: '#D3D7DB',
  gray3: '#EBEDEF',
  gray4: '#E3E5E8',
  gray5: '#D7D7D7',
  gray6: '#9E9EB1',
  gray7: '#5d5f65',
  background1: '#FFF6C3',
  background2: '#FFFBAC',
  black1: '#2D2727',
  black2: '#31313C',
  black3: '#1F2025',
  black4: '#313135',
  purple1: '#6e2259',
  purple2: '#655080',
};

const fontSize = {
  xxl: 32 + 'px',
  xl: 24 + 'px',
  lg: 20 + 'px',
  md: 16 + 'px',
  sm: 14 + 'px',
  xs: 12 + 'px',
};

const fontWeight = {
  thin: '100',
  light: '300',
  regular: '400',
  medium: '500',
  bold: '700',
  black: '900',
};

const common = {
  flexRow: `
    display: flex;`,
  flexColumn: `
    display: flex;
    flex-direction: column;`,
  flexCenter: `
    display:flex;
    justify-content:center;
    align-items:center;`,
  flexCenterColumn: `
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;`,
  flexSpaceBetween: `
    display:flex;
    justify-content:space-between;
    align-items:center;`,
  flexSpaceBetweenColumn: `
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;`,
  boxShadow: `
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    `,
};

export type ColorsTypes = typeof colors;
export type FontSizeTypes = typeof fontSize;
export type FontWeightTypes = typeof fontWeight;
export type CommonTypes = typeof common;

const theme: DefaultTheme = {
  colors,
  fontSize,
  fontWeight,
  common,
};

export default theme;
