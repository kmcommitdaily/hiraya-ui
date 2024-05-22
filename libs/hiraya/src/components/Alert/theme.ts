// theme.ts
import { createTheme, PaletteOptions } from '@mui/material/styles';

// Define custom color names
type CustomAlertColor =
  | 'positive'
  | 'negative'
  | 'notice'
  | 'information'
  | 'neutral';

// Extend the palette to include custom colors
declare module '@mui/material/styles' {
  interface Palette {
    positive: Palette['primary'];
    negative: Palette['primary'];
    notice: Palette['primary'];
    information: Palette['primary'];
    neutral: Palette['primary'];
  }
  interface PaletteOptions {
    positive?: PaletteOptions['primary'];
    negative?: PaletteOptions['primary'];
    notice?: PaletteOptions['primary'];
    information?: PaletteOptions['primary'];
    neutral?: PaletteOptions['primary'];
  }
}

declare module '@mui/material/Alert' {
  interface AlertPropsColorOverrides {
    positive: true;
    negative: true;
    notice: true;
    information: true;
    neutral: true;
  }
}

// Custom colors definition
const customColors: Record<CustomAlertColor, PaletteOptions['primary']> = {
  positive: { main: '#00A251' },
  negative: { main: '#F04438' },
  notice: { main: '#E9690C' },
  information: { main: '#1291D0' },
  neutral: { main: '#6C849D' },
};

// Create a theme including custom colors
const theme = createTheme({
  palette: {
    positive: customColors.positive,
    negative: customColors.negative,
    notice: customColors.notice,
    information: customColors.information,
    neutral: customColors.neutral,
  },
});

export default theme;
export { CustomAlertColor };

//developer notes:
// The type ensures that only valid color names are used as keys, while the interface ensures that the structure of each color object adheres to the expected format for palette options.
