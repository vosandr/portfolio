/* @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
import daisyui from "daisyui";
import typography from '@tailwindcss/typography';
import flyonui from 'flyonui'
import flyonuiPlugin from 'flyonui/plugin'
import { fontFamily, padding } from "tailwindcss-classnames";
export const content = ['./index.html', './src/**/!(tailwind).{ts,tsx}', "./node_modules/flyonui/dist/js/*.js"];
export const plugins = [typography, flyonui, flyonuiPlugin];
export const theme = {
}