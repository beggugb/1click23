const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@core': 'src/app',    
    '@pages': 'src/app/pages',   
    '@reducers/crm': 'src/app/pages/User/BundleCrm/reducers',                    
    '@reducers/inventario': 'src/app/pages/User/BundleInventario/reducers',                    
    '@reducers/auth': 'src/app/pages/BundleAuth/reducers',
    '@bundleAuth': 'src/app/pages/BundleAuth',         
    '@layouts': 'src/app/layouts',
    '@auth': 'src/app/auth',
    '@services': 'src/app/services',
    '@components': 'src/app/components',
    '@helpers': 'src/app/helpers',
    '@data': 'src/app/data',
  })(config);

  return config;
};
