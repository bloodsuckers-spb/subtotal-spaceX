/* eslint-disable import/no-default-export */
declare module '*.scss' {
  interface IClassNames {
    [className: string]: string;
  }
  const classnames: IClassNames;
  export = classnames;
}

declare module '*.svg' {
  const res: Record<string, string>;
  export default res;
}