import { $, component$, useStylesScoped$ } from "@builder.io/qwik";
import { ButtonProps } from "./button-props";
import styles from "./button.scss";
import { StyleBuilder } from "../style-builder";

export const Button = component$((props: ButtonProps) => {
  const { title, link, blank, onClick$, elevation, style } = props;

  useStylesScoped$(styles);
  const styleBuilder = new StyleBuilder(style);
  const buttonStyle = styleBuilder
    .withElevation(elevation)
    .build();

  const isLink = link && link.length;

  const openLink = $(() => {
    // open link in browser
    if (blank) {
      window.open(link, "_blank");
      return;
    }
    window.open(link);
    return;
  });

  const onBtnClick = $(() => {
    if (isLink) {
      openLink();
    }
    if (onClick$) {
      onClick$();
    }
  });

  return <>
    <button
      class={'button'}
      style={buttonStyle}
      preventdefault:click
      onClick$={onBtnClick}
    >
      {title}
    </button>
  </>;
});
