
module.exports = (api, options = {}) => {
  api.registerPlugin({
    id: 'sekiro:antd',
    apply: require('umi-plugin-react/lib/plugins/antd').default,
    opts: options.antd,
  });
  api.registerPlugin({
    id: 'sekiro:dva',
    apply: require('umi-plugin-react/lib/plugins/dva').default,
    opts: options.dva,
  });

  api.onBuildSuccess(() => {
    console.log('[Sekiro]: success');
  });
};
