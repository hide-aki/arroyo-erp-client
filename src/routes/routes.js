import createTabComponent from 'components/Tabs/create-tab-component';
import Provider from './Provider';
import ProviderInvoices from './InvoicesProvider';

function createRoute({path, tabName, component}) {
  const tab = {
    name: tabName,
    link: path,
    id: path,
    title: tabName,
  };
  const WrappedComponent = createTabComponent(tab, component);

  return {
    path,
    component: WrappedComponent,
  };
}

const createRoutes = () =>
  Object.keys(routes).map(path =>
    createRoute({path, ...routes[path]}),
  );

const routes = {
  'proveedor': {
    tabName: 'Proveedor',
    component: Provider,
  },
  'factura/proveedores': {
    tabName: 'Facturas',
    component: ProviderInvoices,
  },
};

export default createRoutes();
