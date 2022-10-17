import {component$, Slot, useStylesScoped$} from '@builder.io/qwik';
import {RowProps} from './row-props';
import styles from './row.scss';
import {StyleBuilder} from '../../style-builder';


export const Row = component$((props: RowProps) => {
    const {elevation, style} = props;
    useStylesScoped$(styles);

    const styleBuilder = new StyleBuilder(style);
    const rowStyle = styleBuilder
        .withElevation(elevation)
        .build();

    return <div class={'row'}
                style={rowStyle}>
        <Slot/>
    </div>;
});