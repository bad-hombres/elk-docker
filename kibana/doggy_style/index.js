
export default function (kibana) {
  return new kibana.Plugin({
   uiExports: {
     app: {
        title: 'doggy_style',
        order: -100,
        description: 'Dog Styling',
        main: 'plugins/doggy_style/index.js',
        hidden: true
     }
    }
  });
};
