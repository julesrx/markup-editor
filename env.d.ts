declare module 'textile-js' {
    declare const fn: (raw: string) => string;
    export default fn;
}

declare module '*?raw' {
    declare const text: string;
    export default text;
}
