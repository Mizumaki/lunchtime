import * as Color from './colors';
// Menu が開く、閉じるでのトランスフォーム
export const menu_transform = {
  open: {
    transform: 'translate(200px, 0)', // 初期では左に -200px の場所に存在するものを、右に200px移動する
    transitionDuration: '300ms',
  },
  close: {
    transform: 'translate(0, 0)',
    transitionDuration: '500ms',
  }
}

// チェーンによるカラーリング
export const chainCss = {
  starbucks: {
    background: Color.logoColor.starbucks,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  doutor: {
    background: Color.logoColor.doutor,
    color: Color.Black.normal,
    fontWeight: '600',
  },
  excel: {
    background: Color.logoColor.excel,
    color: '#F5F5DC',
    fontWeight: '500'
  },
  excel_barista: {
    background: Color.logoColor.excel,
    color: '#50443c',
    fontWeight: '600'
  },
  veloce: {
    background: Color.logoColor.veloce,
    color: '#FFFFFF',
    fontWeight: '500'
  },
  tullys: {
    background: Color.logoColor.tullys,
    color: '#FAFAD2',
    fontWeight: '500'
  }
}

// Shadow   Z軸のレベルにより5段階
export const Shadow = {
  z1: {
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)'
  },
  z2: {
    boxShadow: '0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)'
  },
  z3: {
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)'
  },
  z4: {
    boxShadow: '0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)'
  },
  z5: {
    boxShadow: '0 19px 38px rgba(0, 0, 0, 0.30), 0 15px 12px rgba(0, 0, 0, 0.22)'
  },
}

