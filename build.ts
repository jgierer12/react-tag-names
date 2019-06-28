import { keys } from "ts-transformer-keys";
import { copyFile, writeFile } from "fs";
import * as rimraf from "rimraf";
import * as mkdirp from "mkdirp";

import { ReactHTML, ReactSVG } from "react";
import { version } from "./node_modules/@types/react/package.json";

import { noop, bail } from "./utils";

const htmlTagNames = keys<ReactHTML>();
const svgTagNames = keys<ReactSVG>();

const prepareDir = (cb = noop) => {
  rimraf(
    `dist`,
    bail(() => {
      mkdirp(`dist`, bail(cb));
    })
  );
};

const writeFiles = (cb = noop) => {
  let completed = 0;

  const complete = () => {
    completed++;
    if (completed === 3) {
      cb();
    }
  };

  writeFile(
    `dist/index.json`,
    JSON.stringify({ htmlTagNames, svgTagNames }, null, 2),
    bail(complete)
  );

  writeFile(
    `dist/package.json`,
    JSON.stringify(
      {
        name: `react-tag-names`,
        version,
        license: `MIT`,
        main: `index.json`,
        files: [`index.json`],
        description: `List of React's HTML and SVG tag names`,
        keywords: [`react`, `tag`, `name`, `html`, `svg`],
        repository: `jgierer12/react-tag-names`,
        bugs: `https://github.com/jgierer12/react-tag-names/issues`,
        author: `Jonas Gierer <jonas@gierer.xyz> (https://gierer.xyz)`,
      },
      null,
      2
    ),
    bail(complete)
  );

  copyFile(`readme.md`, `dist/readme.md`, bail(complete));
  copyFile(`license`, `dist/license`, bail(complete));
};

prepareDir(() => {
  writeFiles();
});
