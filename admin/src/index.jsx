import EditViewRightLinks from './components/EditViewRightLinks';

export default {
  register(app) {
    app.registerPlugin({
      id: 'test-plugin',
      name: 'Test Plugin',
    });
  },

  bootstrap(app) {
    app.getPlugin('content-manager').injectComponent('editView', 'right-links', {
      name: 'test-plugin.right-links',
      Component: EditViewRightLinks,
    });
  },
};