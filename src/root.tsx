import {Button, Card, Column, Row, Text} from '.';
import {component$, useStyles$} from '@builder.io/qwik';
import styles from './global.scss';
import {Elevation} from './components/elevation';
import {TextType} from './components/text/text-props';

export default component$(() => {
    useStyles$(styles);
    return (
        <>
            <head>
                <meta charSet="utf-8"/>
                <title>Qwik UI Demo</title>
            </head>
            <body>
            <Row>
                <Column>
                    <Card elevation={Elevation.TWO}>
                        <Column>
                            <Text textType={TextType.h1}> This is a column</Text>
                            <Button title={'Test Button'}
                                    onClick$={() => console.log('test button clicked')}
                                    elevation={Elevation.TWO}/>
                        </Column>
                    </Card>
                </Column>
                <Column>
                    <Card elevation={Elevation.FOUR}>
                        <Column alignItems={'center'}>
                            <Text textType={TextType.h1}> This is another column</Text>
                            <Button title={'Test Button'}
                                    onClick$={() => console.log('test button clicked')}
                                    elevation={Elevation.FOUR}/>
                        </Column>
                    </Card>
                </Column>
            </Row>


            </body>
        </>
    );
});
