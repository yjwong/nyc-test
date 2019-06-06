# TypeScript + nyc

This repo is a demonstration of a problem with running nyc on a TypeScript project.

```
yarn install
yarn build
yarn test
```

Gives the following output:

```
/tmp/nyc-test/node_modules/istanbul-lib-source-maps/lib/transformer.js:30
                mappedCoverage.addStatement(mapping.loc, hits);
                               ^
TypeError: mappedCoverage.addStatement is not a function
    at Object.keys.forEach.s (/tmp/nyc-test/node_modules/istanbul-lib-source-maps/lib/transformer.js:30:32)
    at Array.forEach (<anonymous>)
    at SourceMapTransformer.processFile (/tmp/nyc-test/node_modules/istanbul-lib-source-maps/lib/transformer.js:22:38)
    at coverageMap.files.forEach.file (/tmp/nyc-test/node_modules/istanbul-lib-source-maps/lib/transformer.js:120:34)
    at Array.forEach (<anonymous>)
    at SourceMapTransformer.transform (/tmp/nyc-test/node_modules/istanbul-lib-source-maps/lib/transformer.js:109:29)
    at MapStore.transformCoverage (/tmp/nyc-test/node_modules/istanbul-lib-source-maps/lib/map-store.js:173:14)
    at SourceMaps.remapCoverage (/tmp/nyc-test/node_modules/nyc/lib/source-maps.js:33:42)
    at NYC.writeCoverageFile (/tmp/nyc-test/node_modules/nyc/index.js:355:34)
    at NYC.addAllFiles (/tmp/nyc-test/node_modules/nyc/index.js:179:10)
error Command failed with exit code 1.
```

