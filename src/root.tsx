import { Button, Card } from ".";
import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./global.scss";
import { Elevation } from "./components/elevation";

export default component$(() => {
  useStyles$(styles);
  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <title>Qwik Blank App</title>
      </head>
      <body>
      <Card elevation={Elevation.TWO}>
        <Button title={"TestButton"}
                onClick$={() => console.log("test button clicked")}
                elevation={Elevation.TWO} />
      </Card>

      </body>
    </>
  );
});
