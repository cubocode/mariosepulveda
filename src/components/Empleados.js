import React, { useState } from 'react'
import CIcon from '@coreui/icons-react'
import { cilPeople, cilPlus, cilUser, cilDollar, cilCalendar } from '@coreui/icons'
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

const Empleados = () => {
  const [totalEmpleados] = useState(15)
  const [empleadosActivos] = useState(12)
  const [sueldoTotal] = useState(450000.00)
  const [adelantosPendientes] = useState(125000.00)
  
  // Datos inventados para la maqueta
  const empleados = [
    {
      id: 1,
      nombre: 'Roberto Martínez',
      dni: '35.123.456',
      cargo: 'Operario',
      sueldo: 45000.00,
      adelantos: 15000.00,
      licencias: 5,
      estado: 'activo',
      fechaIngreso: '2023-03-15',
      telefono: '11-1234-5678'
    },
    {
      id: 2,
      nombre: 'María Elena Rodríguez',
      dni: '28.987.654',
      cargo: 'Supervisor',
      sueldo: 65000.00,
      adelantos: 20000.00,
      licencias: 2,
      estado: 'activo',
      fechaIngreso: '2022-08-20',
      telefono: '11-2345-6789'
    },
    {
      id: 3,
      nombre: 'Carlos Alberto López',
      dni: '32.456.789',
      cargo: 'Operario',
      sueldo: 42000.00,
      adelantos: 12000.00,
      licencias: 8,
      estado: 'licencia',
      fechaIngreso: '2023-01-10',
      telefono: '11-3456-7890'
    },
    {
      id: 4,
      nombre: 'Ana Sofía García',
      dni: '29.789.123',
      cargo: 'Administrativo',
      sueldo: 55000.00,
      adelantos: 18000.00,
      licencias: 3,
      estado: 'activo',
      fechaIngreso: '2022-11-05',
      telefono: '11-4567-8901'
    },
    {
      id: 5,
      nombre: 'Juan Carlos Silva',
      dni: '33.654.321',
      cargo: 'Operario',
      sueldo: 48000.00,
      adelantos: 25000.00,
      licencias: 0,
      estado: 'activo',
      fechaIngreso: '2023-05-12',
      telefono: '11-5678-9012'
    },
    {
      id: 6,
      nombre: 'Lucía Fernanda Torres',
      dni: '27.321.654',
      cargo: 'Supervisor',
      sueldo: 68000.00,
      adelantos: 30000.00,
      licencias: 1,
      estado: 'activo',
      fechaIngreso: '2022-06-18',
      telefono: '11-6789-0123'
    }
  ]

  const estadisticas = {
    totalSueldos: 450000.00,
    totalAdelantos: 125000.00,
    promedioSueldo: 48000.00,
    licenciasActivas: 3
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

  const getEstadoColor = (estado) => {
    switch(estado) {
      case 'activo': return 'success'
      case 'licencia': return 'warning'
      case 'inactivo': return 'secondary'
      default: return 'info'
    }
  }

  const getEstadoIcon = (estado) => {
    switch(estado) {
      case 'activo': return '✅'
      case 'licencia': return '🏥'
      case 'inactivo': return '⏸️'
      default: return '❓'
    }
  }

  const getCargoColor = (cargo) => {
    switch(cargo) {
      case 'Supervisor': return 'primary'
      case 'Operario': return 'success'
      case 'Administrativo': return 'info'
      default: return 'secondary'
    }
  }

  return (
    <>
      <CCard className="mb-4" style={{ backgroundColor: '#1a1a1a' }}>
        <CCardHeader className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <CIcon icon={cilPeople} className="me-2" size="xl" />
            <h4 className="mb-0">Gestión de Empleados</h4>
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
              color="warning"
              size="sm"
              className="d-flex align-items-center"
              style={{ minWidth: '30px', height: '40px' }}
            >
              <CIcon icon={cilDollar} size="sm" />
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
                  <h5 className="text-muted mb-2">Sueldo Total</h5>
                  <h2 className="text-success mb-0">{formatCurrency(sueldoTotal)}</h2>
                  <small className="text-muted">Mensual</small>
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
                  <h5 className="text-muted mb-2">Adelantos</h5>
                  <h2 className="text-warning mb-0">{formatCurrency(adelantosPendientes)}</h2>
                  <small className="text-muted">Pendientes</small>
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
                  <h5 className="text-muted mb-2">Licencias</h5>
                  <h2 className="text-info mb-0">{estadisticas.licenciasActivas}</h2>
                  <small className="text-muted">Activas</small>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>

          {/* Estadísticas de empleados */}
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
                        <span style={{marginRight: "5px"}}>💰</span>
                        <h6 style={{color:"#398de0", margin: 0}}>Sueldos</h6>
                      </div>
                      <h4 className="mb-0" style={{color:"#398de0"}}>{formatCurrency(estadisticas.totalSueldos)}</h4>
                    </div>
                    <div className="text-center" style={{ flex: 1, paddingLeft: "20px", paddingRight: "20px" }}>
                      <div style={{display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "10px"}}>
                        <span style={{marginRight: "5px"}}>💸</span>
                        <h6 className="text-warning" style={{margin: 0}}>Adelantos</h6>
                      </div>
                      <h4 className="text-warning mb-0">{formatCurrency(estadisticas.totalAdelantos)}</h4>
                    </div>
                    <div className="text-center" style={{ flex: 1, paddingLeft: "20px" }}>
                      <div style={{display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "10px"}}>
                        <span style={{marginRight: "5px"}}>📊</span>
                        <h6 className="text-success" style={{margin: 0}}>Promedio</h6>
                      </div>
                      <h4 className="text-success mb-0">{formatCurrency(estadisticas.promedioSueldo)}</h4>
                    </div>
                  </div>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>

          <h5 className="mb-3">Lista de Empleados</h5>
          <CTable hover responsive>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell style={{ backgroundColor: '#1a1a1a' }}>Empleado</CTableHeaderCell>
                <CTableHeaderCell style={{ backgroundColor: '#1a1a1a' }}>DNI</CTableHeaderCell>
                <CTableHeaderCell style={{ backgroundColor: '#1a1a1a' }}>Cargo</CTableHeaderCell>
                <CTableHeaderCell className="text-end" style={{ backgroundColor: '#1a1a1a' }}>Sueldo</CTableHeaderCell>
                <CTableHeaderCell className="text-end" style={{ backgroundColor: '#1a1a1a' }}>Adelantos</CTableHeaderCell>
                <CTableHeaderCell className="text-end" style={{ backgroundColor: '#1a1a1a' }}>Licencias</CTableHeaderCell>
                <CTableHeaderCell style={{ backgroundColor: '#1a1a1a' }}>Estado</CTableHeaderCell>
                <CTableHeaderCell style={{ backgroundColor: '#1a1a1a' }}>Ingreso</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {empleados.map((empleado) => (
                <CTableRow key={empleado.id}>
                  <CTableDataCell style={{ backgroundColor: '#212121' }}>
                    <div>
                      <strong>{empleado.nombre}</strong>
                      <br />
                      <small className="text-muted">{empleado.telefono}</small>
                    </div>
                  </CTableDataCell>
                  <CTableDataCell style={{ backgroundColor: '#212121' }}>{empleado.dni}</CTableDataCell>
                  <CTableDataCell style={{ backgroundColor: '#212121' }}>
                    <CBadge color={getCargoColor(empleado.cargo)}>
                      {empleado.cargo}
                    </CBadge>
                  </CTableDataCell>
                  <CTableDataCell className="text-end" style={{ backgroundColor: '#212121' }}>
                    {formatCurrency(empleado.sueldo)}
                  </CTableDataCell>
                  <CTableDataCell className="text-end" style={{ backgroundColor: '#212121' }}>
                    <span className="text-warning">
                      {formatCurrency(empleado.adelantos)}
                    </span>
                  </CTableDataCell>
                  <CTableDataCell className="text-end" style={{ backgroundColor: '#212121' }}>
                    <span className="text-info">
                      {empleado.licencias} días
                    </span>
                  </CTableDataCell>
                  <CTableDataCell style={{ backgroundColor: '#212121' }}>
                    <CBadge color={getEstadoColor(empleado.estado)}>
                      {getEstadoIcon(empleado.estado)} {empleado.estado.toUpperCase()}
                    </CBadge>
                  </CTableDataCell>
                  <CTableDataCell style={{ backgroundColor: '#212121' }}>
                    {formatDate(empleado.fechaIngreso)}
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

export default Empleados
