import { keys } from "ts-transformer-keys";
import { writeFile } from "fs";
import * as rimraf from "rimraf";
import * as mkdirp from "mkdirp";

import { ReactHTML, ReactSVG } from "react";

import { version } from "./node_modules/@types/react/package.json";
import * as pkg from "./package.json";

import { noop, bail } from "./utils";

const htmlTagNames = keys<ReactHTML>();
const svgTagNames = keys<ReactSVG>();

const prepare = (cb = noop) => {
  rimraf(
    `src`,
    bail(() => {
      mkdirp(`src`, bail(cb));
    })
  );
};

const writeFiles = (cb = noop) => {
  let completed = 0;

  const complete = () => {
    completed++;
    if (completed === 2) {
      cb();
    }
  };

  writeFile(
    `src/index.ts`,
    `export const htmlTagNames = ${JSON.stringify(htmlTagNames, null, 2)};
export const svgTagNames = ${JSON.stringify(svgTagNames, null, 2)};
export default [...htmlTagNames, ...svgTagNames];
`,
    bail(complete)
  );

  writeFile(
    `package.json`,
    JSON.stringify({ ...pkg, version }, null, 2) + `\n`,
    bail(complete)
  );
};

prepare(() => {
  writeFiles();
});
