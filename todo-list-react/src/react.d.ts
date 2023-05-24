 declare module "*.scss" {
   const styles: { [key: string]: string };
   export default styles;
 }
// declare module '*.scss' {
//   const styles: Record<string, string>;
//   export = styles;
// }

 declare module '*.png' {
  const src: string;
  export default src;
 }

 declare module '*.svg' {
  const src: string;
  export default src;
 }

 declare module '*/\.(woff|woff2|ttf|otf|eot)$/'




