# react-tag-names

List of React's HTML and SVG tag names. Tag names are scraped directly from
`@types/react`, so you are getting exactly the tag names that React uses
internally.

## react-tag-names vs html-tag-names

- Tag names are divided into HTML and SVG tag names. This is useful since React
  uses different typings for those two categories.

- Instead of kebab-case (e.g. `clip-path`), React uses camel-case (`clipPath`).

- Since the tag names are taken directly from React's type definition, you are
  guaranteed to always get exactly the tags that React supports.

## Install

```sh
npm install react-tag-names
```

> _Note: Previous versioning of `react-tag-names` was coupled to respective
> react versions (e.g. `react@16.9.2` => `react-tag-names@16.9.2`). As React's
> list of tag names only changes very rarely, this convention has been
> discontinued. `react-tag-names` now follows its own versioning, starting at
> v1.0.0._

## Usage

### All (default export)

```js
import reactTagNames from "react-tag-names";
```

`reactTagNames: string[]` &mdash; List of all React tag names (sorted HTML first
and SVG last)

```js
[
  "a",
  "abbr",
  "address",
  // ...
  "video",
  "wbr",
  "webview",

  "animate",
  "circle",
  "clipPath",
  // ...
  "tspan",
  "use",
  "view",
];
```

### HTML (`htmlTagNames` export)

```js
import { htmlTagNames } from "react-tag-names";
```

`htmlTagNames: string[]` &mdash; List of HTML React tag names

```js
[
  "a",
  "abbr",
  "address",
  // ...
  "video",
  "wbr",
  "webview",
];
```

### SVG (`svgTagNames` export)

```js
import { svgTagNames } from "react-tag-names";
```

`svgTagNames: string[]` &mdash; List of SVG React tag names

```js
[
  "animate",
  "circle",
  "clipPath",
  // ...
  "tspan",
  "use",
  "view",
];
```

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
