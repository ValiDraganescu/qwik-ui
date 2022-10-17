import {component$, Slot, useStylesScoped$} from '@builder.io/qwik';
import styles from './text.scss';
import {StyleBuilder} from '../style-builder';
import {TextProps} from './text-props';

export const Text = component$((props: TextProps) => {
    const {style, textType} = props;
    useStylesScoped$(styles);

    const styleBuilder = new StyleBuilder(style);
    const cardStyle = styleBuilder
        .withTextType(textType)
        .build();

    return <>
        <div class={'text'}
             style={cardStyle}>
            <Slot/>
        </div>
    </>;
});