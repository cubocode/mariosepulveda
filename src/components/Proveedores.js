import React, { useState } from 'react'
import CIcon from '@coreui/icons-react'
import { cilSpeedometer, cilPlus, cilUser, cilClock, cilDollar } from '@coreui/icons'
import { 
  CRow, 
  CCol, 
  CCard, 
  CCardHeader, 
  CCardBody, 
  CButton, 
  CTable, 
  CTableHead, 
  CTableRow, 
  CTableHeaderCell, 
  CTableBody, 
  CTableDataCell,
  CBadge,
  CProgress
} from '@coreui/react'

const Proveedores = () => {
  const [totalEmpleados] = useState(12)
  const [horasTrabajadas] = useState(156.5)
  const [costoTotal] = useState(234750.00)
  const [empleadosActivos] = useState(8)
  
  // Datos inventados para la maqueta
  const empleados = [
    {
      id: 1,
      nombre: 'Carlos Mendoza',
      tipo: 'cerco',
      horas: 12.5,
      tarifa: 1500.00,
      total: 18750.00,
      estado: 'activo',
      fecha: '2024-01-15'
    },
    {
      id: 2,
      nombre: 'María González',
      tipo: 'galpon',
      horas: 8.0,
      tarifa: 1800.00,
      total: 14400.00,
      estado: 'activo',
      fecha: '2024-01-15'
    },
    {
      id: 3,
      nombre: 'Roberto Silva',
      tipo: 'cerco',
      horas: 10.0,
      tarifa: 1500.00,
      total: 15000.00,
      estado: 'activo',
      fecha: '2024-01-15'
    },
    {
      id: 4,
      nombre: 'Ana López',
      tipo: 'galpon',
      horas: 6.5,
      tarifa: 1800.00,
      total: 11700.00,
      estado: 'inactivo',
      fecha: '2024-01-14'
    },
    {
      id: 5,
      nombre: 'Juan Pérez',
      tipo: 'cerco',
      horas: 14.0,
      tarifa: 1500.00,
      total: 21000.00,
      estado: 'activo',
      fecha: '2024-01-15'
    },
    {
      id: 6,
      nombre: 'Lucía Fernández',
      tipo: 'galpon',
      horas: 9.0,
      tarifa: 1800.00,
      total: 16200.00,
      estado: 'activo',
      fecha: '2024-01-15'
    }
  ]

  const estadisticas = {
    totalCerco: 36.5,
    totalGalpon: 23.5,
    costoPromedio: 1500.00,
    eficiencia: 92
  }

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS'
    }).format(amount)
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('es-AR')
  }

  const formatHours = (hours) => {
    return `${hours.toFixed(1)}h`
  }

  const getTipoColor = (tipo) => {
    return tipo === 'cerco' ? 'primary' : 'warning'
  }

  const getEstadoColor = (estado) => {
    return estado === 'activo' ? 'success' : 'secondary'
  }

  const getTipoIcon = (tipo) => {
    return tipo === 'cerco' ? '🔨' : '🏭'
  }

  return (
    <>
      <CCard className="mb-4" style={{ backgroundColor: '#1a1a1a' }}>
        <CCardHeader className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <CIcon icon={cilSpeedometer} className="me-2" size="xl" />
            <h4 className="mb-0">Gestión de Proveedores</h4>
          </div>
          <div className="d-flex gap-1">
            <CButton 
              size="sm"
              className="d-flex align-items-center"
              style={{ minWidth: '30px', height: '40px', backgroundColor: '#398de0', color: 'white' }}
            >
              <CIcon icon={cilPlus} size="sm" />
            </CButton>
            <CButton 
              color="success"
              size="sm"
              className="d-flex align-items-center"
              style={{ minWidth: '30px', height: '40px' }}
            >
              <CIcon icon={cilUser} size="sm" />
            </CButton>
            <CButton 
              color="info"
              size="sm"
              className="d-flex align-items-center"
              style={{ minWidth: '30px', height: '40px' }}
            >
              <CIcon icon={cilClock} size="sm" />
            </CButton>
          </div>
        </CCardHeader>
        <CCardBody>
          {/* Cards de información principal */}
          <CRow className="mb-4">
            <CCol md={3}>
              <CCard className="text-center" style={{ 
                backgroundColor: 'transparent', 
                border: '1px solid rgba(255, 255, 255, 0.1)',
                height: '120px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <CCardBody>
                  <h5 className="text-muted mb-2">Total Empleados</h5>
                  <h2 className="mb-0" style={{ color: '#398de0' }}>{totalEmpleados}</h2>
                  <small className="text-muted">Activos: {empleadosActivos}</small>
                </CCardBody>
              </CCard>
            </CCol>
            <CCol md={3}>
              <CCard className="text-center" style={{ 
                backgroundColor: 'transparent', 
                border: '1px solid rgba(255, 255, 255, 0.1)',
                height: '120px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <CCardBody>
                  <h5 className="text-muted mb-2">Horas Trabajadas</h5>
                  <h2 className="text-success mb-0">{formatHours(horasTrabajadas)}</h2>
                  <small className="text-muted">Este mes</small>
                </CCardBody>
              </CCard>
            </CCol>
            <CCol md={3}>
              <CCard className="text-center" style={{ 
                backgroundColor: 'transparent', 
                border: '1px solid rgba(255, 255, 255, 0.1)',
                height: '120px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <CCardBody>
                  <h5 className="text-muted mb-2">Costo Total</h5>
                  <h2 className="text-warning mb-0">{formatCurrency(costoTotal)}</h2>
                  <small className="text-muted">Gastos laborales</small>
                </CCardBody>
              </CCard>
            </CCol>
            <CCol md={3}>
              <CCard className="text-center" style={{ 
                backgroundColor: 'transparent', 
                border: '1px solid rgba(255, 255, 255, 0.1)',
                height: '120px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <CCardBody>
                  <h5 className="text-muted mb-2">Eficiencia</h5>
                  <h2 className="text-info mb-0">{estadisticas.eficiencia}%</h2>
                  <CProgress 
                    value={estadisticas.eficiencia} 
                    className="mt-2"
                    style={{ height: '6px' }}
                  />
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>

          {/* Estadísticas por tipo de trabajo */}
          <CRow className="mb-4">
            <CCol md={12}>
              <CCard className="text-center" style={{ 
                backgroundColor: 'transparent', 
                border: '1px solid rgba(255, 255, 255, 0.1)',
                height: '100px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <CCardBody>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="text-center" style={{ flex: 1, paddingRight: "20px" }}>
                      <div style={{display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "10px"}}>
                        <span style={{marginRight: "5px"}}>🔨</span>
                        <h6 style={{color:"#398de0", margin: 0}}>Cerco</h6>
                      </div>
                      <h4 className="mb-0" style={{color:"#398de0"}}>{formatHours(estadisticas.totalCerco)}</h4>
                    </div>
                    <div className="text-center" style={{ flex: 1, paddingLeft: "20px", paddingRight: "20px" }}>
                      <div style={{display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "10px"}}>
                        <span style={{marginRight: "5px"}}>🏭</span>
                        <h6 className="text-warning" style={{margin: 0}}>Galpón</h6>
                      </div>
                      <h4 className="text-warning mb-0">{formatHours(estadisticas.totalGalpon)}</h4>
                    </div>
                    <div className="text-center" style={{ flex: 1, paddingLeft: "20px" }}>
                      <div style={{display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "10px"}}>
                        <span style={{marginRight: "5px"}}>💰</span>
                        <h6 className="text-success" style={{margin: 0}}>Promedio</h6>
                      </div>
                      <h4 className="text-success mb-0">{formatCurrency(estadisticas.costoPromedio)}/h</h4>
                    </div>
                  </div>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>

          <h5 className="mb-3">Registro de Trabajos</h5>
          <CTable hover responsive>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell style={{ backgroundColor: '#1a1a1a' }}>Empleado</CTableHeaderCell>
                <CTableHeaderCell style={{ backgroundColor: '#1a1a1a' }}>Tipo</CTableHeaderCell>
                <CTableHeaderCell style={{ backgroundColor: '#1a1a1a' }}>Fecha</CTableHeaderCell>
                <CTableHeaderCell className="text-end" style={{ backgroundColor: '#1a1a1a' }}>Horas</CTableHeaderCell>
                <CTableHeaderCell className="text-end" style={{ backgroundColor: '#1a1a1a' }}>Tarifa/h</CTableHeaderCell>
                <CTableHeaderCell className="text-end" style={{ backgroundColor: '#1a1a1a' }}>Total</CTableHeaderCell>
                <CTableHeaderCell style={{ backgroundColor: '#1a1a1a' }}>Estado</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {empleados.map((empleado) => (
                <CTableRow key={empleado.id}>
                  <CTableDataCell style={{ backgroundColor: '#212121' }}>{empleado.nombre}</CTableDataCell>
                  <CTableDataCell style={{ backgroundColor: '#212121' }}>
                    <CBadge color={getTipoColor(empleado.tipo)}>
                      {getTipoIcon(empleado.tipo)} {empleado.tipo.toUpperCase()}
                    </CBadge>
                  </CTableDataCell>
                  <CTableDataCell style={{ backgroundColor: '#212121' }}>{formatDate(empleado.fecha)}</CTableDataCell>
                  <CTableDataCell className="text-end" style={{ backgroundColor: '#212121' }}>
                    {formatHours(empleado.horas)}
                  </CTableDataCell>
                  <CTableDataCell className="text-end" style={{ backgroundColor: '#212121' }}>
                    {formatCurrency(empleado.tarifa)}
                  </CTableDataCell>
                  <CTableDataCell className="text-end" style={{ backgroundColor: '#212121' }}>
                    {formatCurrency(empleado.total)}
                  </CTableDataCell>
                  <CTableDataCell style={{ backgroundColor: '#212121' }}>
                    <CBadge color={getEstadoColor(empleado.estado)}>
                      {empleado.estado === 'activo' ? '✅ Activo' : '⏸️ Inactivo'}
                    </CBadge>
                  </CTableDataCell>
                </CTableRow>
              ))}
            </CTableBody>
          </CTable>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Proveedores
