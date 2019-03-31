#!/usr/bin/env node

process.env.UMI_PLUGINS = require.resolve('./plugin');
const umiBinPath = require.resolve('umi/bin/umi');
require('child_process').fork(
  umiBinPath,
  process.argv.slice(2),
  {
    stdio: 'inherit',
  },
);
