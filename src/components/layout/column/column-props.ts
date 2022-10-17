import {BaseProps} from '../../base-props';

export interface ColumnProps extends BaseProps {
    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
}