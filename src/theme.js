import {Dimensions, PixelRatio} from 'react-native';

class Theme {
  /*
   * backgroundColor red
   */
  colorRed = 'rgb(246, 12, 13)';

  /*
   * backgroundColor scarlet
   */
  colorScarlet = 'rgb(191, 52, 52)';

  /*
   * backgroundColor dark red
   */
  colorDarkRed = 'rgb(191, 52, 52)';

  /*
   * backgroundColor yellow
   */
  yellow = 'rgb(255, 196, 0)';

  /*
   * backgroundColor green
   */
  green = 'rgb(22, 175, 47)';

  /*
   * backgroundColor white with opacity
   */
  colorOpacityWhite = 'rgba(255, 255, 255, 0.4)';

  /*
   * backgroundColor grey
   */
  colorGray = 'rgb(179, 178, 178)';

  /*
   * backgroundColor lightgrey
   */
  colorLightGray = 'rgb(246, 245, 245)';

  /*
   * backgroundColor opacity grey
   */
  colorOpacityGrey = 'rgba(235, 235, 235, 0.3)';

  /*
   * fontSize0
   */
  fontSize0 = this.aligned(12);

  /*
   * fontSize1
   */
  fontSize1 = this.aligned(14);

  /*
   * fontSize2
   */
  fontSize2 = this.aligned(16);

  /*
   * fontColor
   */
  fontColor = 'rgb(37, 37, 37)';

  /**
   *  Function for more simpler convert from size in points to size in pixels
   */
  aligned(pt) {
    return PixelRatio.roundToNearestPixel(pt);
  }
}

const theme = new Theme();

export default theme;
