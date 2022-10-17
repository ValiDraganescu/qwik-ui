import { PropFunction } from "@builder.io/qwik";
import { BaseProps } from "../base-props";

export interface ButtonProps extends BaseProps {
  title: string;
  link?: string;
  blank?: boolean;
  onClick$?: PropFunction<() => void>;
}