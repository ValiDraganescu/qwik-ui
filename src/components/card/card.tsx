import { component$, Slot, useStylesScoped$ } from "@builder.io/qwik";
import { CardProps } from "./card-props";
import styles from "./card.scss";
import { StyleBuilder } from "../style-builder";

export const Card = component$((props: CardProps) => {
  const { style, elevation } = props;
  useStylesScoped$(styles);

  const styleBuilder = new StyleBuilder(style);
  const cardStyle = styleBuilder
      .withElevation(elevation)
      .build();

  return <>
    <div class={"card"}
         style={cardStyle}>
      <Slot />
    </div>
  </>;
});