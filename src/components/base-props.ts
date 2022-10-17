import { CSSProperties } from "./css-type";
import { Elevation } from "./elevation";
import {ComponentBaseProps} from '@builder.io/qwik';

export interface BaseProps extends ComponentBaseProps{
  style?: CSSProperties;
  elevation?: Elevation;
}