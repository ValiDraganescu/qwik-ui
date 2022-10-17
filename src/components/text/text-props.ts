import {BaseProps} from '../base-props';

export enum TextType {
    title = 'title',
    body = 'body',
    h1 = 'h1',
    h2 = 'h2',
    h3 = 'h3',
    h4 = 'h4',
    h5 = 'h5',
    h6 = 'h6',
    label = 'label',
}

export interface TextProps extends BaseProps {
    textType?: TextType;
}