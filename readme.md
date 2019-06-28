# react-tag-names

List of React's HTML and SVG tag names. Tag names are scraped directly from
`@types/react`, so you are getting exactly the tag names that React uses
internally.

## react-tag-names vs html-tag-names

The main notable difference is that tag names are divided into HTML and SVG tag
names. This is useful since React uses different typings for those two
categories.

Instead of kebab-case (e.g. `clip-path`), React uses camel-case (`clipPath`).

Also, since the tag names are taken directly from React's type definition, and
this package's version always matches the respective React version, you are
guaranteed to always get exactly the tags that React supports.

## Install

```sh
npm install react-tag-names
```

## Usage

```js
import { htmlTagNames, svgTagNames } from "react-tag-names";

console.log(htmlTagNames.slice(0, 20));
```

Yields:

```js
[
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
];
```

## API

### `htmlTagNames`

`string[]` &mdash; List of lowercase HTML tag names.

### `svgTagNames`

`string[]` &mdash; List of lowercase SVG tag names.

## Related

- [`html-tag-names`](https://github.com/wooorm/html-tag-names) — List of HTML
  tags
- [`mathml-tag-names`](https://github.com/wooorm/mathml-tag-names) — List of
  MathML tags
- [`svg-tag-names`](https://github.com/wooorm/svg-tag-names) — List of SVG tags
- [`svg-element-attributes`](https://github.com/wooorm/svg-element-attributes) —
  Map of SVG elements to allowed attributes
- [`html-element-attributes`](https://github.com/wooorm/html-element-attributes)
  — Map of HTML elements to allowed attributes
- [`aria-attributes`](https://github.com/wooorm/aria-attributes) — List of ARIA
  attributes

## License

[MIT](license) &copy; [Jonas Gierer](https://gierer.xyz)
