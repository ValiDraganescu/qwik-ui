import {component$, Slot, useStylesScoped$} from '@builder.io/qwik';
import styles from './column.scss';
import {StyleBuilder} from '../../style-builder';
import {ColumnProps} from './column-props';


export const Column = component$((props: ColumnProps) => {
    const {elevation, style, alignItems} = props;
    useStylesScoped$(styles);

    const styleBuilder = new StyleBuilder(style);
    const rowStyle = styleBuilder
        .withElevation(elevation)
        .withAlignment(alignItems)
        .build();

    return <div class={'column'}
                style={rowStyle}>
        <Slot/>
    </div>;
});