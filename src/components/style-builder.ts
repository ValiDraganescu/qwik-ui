import { Elevation } from "./elevation";
import { CSSProperties } from "./css-type";

export class StyleBuilder {

  private style: CSSProperties = {};
  private boxShadow: string | undefined;

  constructor(style?: CSSProperties) {
    if (style) {
      this.style = {
        ...style
      }
    }
  }

  private getBoxShadow = (elevation?: Elevation): string | undefined => {
    switch (elevation) {
      case Elevation.ONE: {
        return "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)";
      }
      case Elevation.TWO: {
        return "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)";
      }
      case Elevation.THREE: {
        return "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)";
      }
      case Elevation.FOUR: {
        return "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)";
      }
      // the default is Elevation.NONE
      default: {
        return undefined;
      }
    }
  };

  public withElevation = (elevation?: Elevation): StyleBuilder => {
    if (elevation) {
      this.boxShadow = this.getBoxShadow(elevation);
    }
    return this;
  }

  public build = (): CSSProperties => {
    this.style.boxShadow = this.boxShadow;
    return this.style;
  }
}