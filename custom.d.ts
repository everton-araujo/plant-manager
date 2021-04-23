declare module '*.png' {
  const content: any;
}

declare module '*.json' {
  const value: any;
  export default value;
}
