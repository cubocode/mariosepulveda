import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

const Caja = React.lazy(() => import('./components/Caja'))
const Distribucion = React.lazy(() => import('./components/Distribucion'))
const Proveedores = React.lazy(() => import('./components/Proveedores'))
const Empleados = React.lazy(() => import('./components/Empleados'))
const Login = React.lazy(() => import('./components/Login'))


const routes = [
  { path: '/', exact: true, name: 'Home', element: Dashboard },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/caja', name: 'Caja', element: Caja },
  { path: '/distribucion', name: 'Distribución', element: Distribucion },
  { path: '/proveedores', name: 'Proveedores', element: Proveedores },
  { path: '/empleados', name: 'Empleados', element: Empleados },
  {path: '/login', name: 'Login', element: Login},
]

export default routes
