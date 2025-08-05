import React, { useState } from 'react'
import CIcon from '@coreui/icons-react'
import { cilNotes, cilPlus, cilMinus, cilTruck, cilFactory, cilChartPie } from '@coreui/icons'
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

const Distribucion = () => {
  const [inventarioActual] = useState(1250.5) // toneladas
  const [cañaDisponible] = useState(850.3)
  const [cañaEnProceso] = useState(400.2)
  
  // Datos inventados para la maqueta
  const movimientos = [
    {
      id: 1,
      fecha: '2024-01-15',
      hora: '08:30',
      tipo: 'retiro',
      origen: 'Ingenio 1',
      destino: 'Franccionadora 1',
      cantidad: 150.0,
      estado: 'completado',
      precio: 45000.00
    },
    {
      id: 2,
      fecha: '2024-01-15',
      hora: '14:20',
      tipo: 'venta',
      origen: 'Ingenio 2',
      destino: 'Franccionadora 2',
      cantidad: 75.5,
      estado: 'en_proceso',
      precio: 85000.00
    },
    {
      id: 3,
      fecha: '2024-01-14',
      hora: '16:45',
      tipo: 'fraccionamiento',
      origen: 'Ingenio 3',
      destino: 'Franccionadora 3',
      cantidad: 200.0,
      estado: 'completado',
      precio: 120000.00
    },
    {
      id: 4,
      fecha: '2024-01-14',
      hora: '11:15',
      tipo: 'retiro',
      origen: 'Ingenio 4',
      destino: 'Franccionadora 4',
      cantidad: 120.0,
      estado: 'completado',
      precio: 36000.00
    },
    {
      id: 5,
      fecha: '2024-01-13',
      hora: '09:30',
      tipo: 'venta',
      origen: 'Ingenio 5',
      destino: 'Franccionadora 5',
      cantidad: 300.0,
      estado: 'completado',
      precio: 180000.00
    },
    {
      id: 6,
      fecha: '2024-01-13',
      hora: '13:45',
      tipo: 'fraccionamiento',
      origen: 'Ingenio 6',
      destino: 'Franccionadora 6',
      cantidad: 180.0,
      estado: 'en_proceso',
      precio: 108000.00
    }
  ]

  const estadisticas = {
    totalRetiros: 270.0,
    totalVentas: 375.5,
    totalFraccionamiento: 380.0,
    valorTotal: 574000.00,
    rendimiento: 85
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

  const formatTons = (tons) => {
    return `${tons.toFixed(1)} ton`
  }

  const getTipoColor = (tipo) => {
    switch(tipo) {
      case 'retiro': return 'primary'
      case 'venta': return 'success'
      case 'fraccionamiento': return 'warning'
      default: return 'secondary'
    }
  }

  const getEstadoColor = (estado) => {
    return estado === 'completado' ? 'success' : 'warning'
  }

  const getTipoIcon = (tipo) => {
    switch(tipo) {
      case 'retiro': return '🚛'
      case 'venta': return '💰'
      case 'fraccionamiento': return '🏭'
      default: return '📦'
    }
  }

  return (
    <>
      <CCard className="mb-4" style={{ backgroundColor: '#1a1a1a' }}>
        <CCardHeader className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <CIcon icon={cilNotes} className="me-2" size="xl" />
            <h4 className="mb-0">Gestión de Caña de Azúcar</h4>
          </div>
          <div className="d-flex gap-1">
            <CButton 
              
              size="sm"
              className="d-flex align-items-center"
              style={{ minWidth: '30px', height: '40px', backgroundColor:" #398de0", color:"white" }}
            >
              <CIcon icon={cilPlus} size="sm" />
            </CButton>
            <CButton 
              color="success"
              size="sm"
              className="d-flex align-items-center"
              style={{ minWidth: '30px', height: '40px' }}
            >
              <CIcon icon={cilTruck} size="sm" />
            </CButton>
            <CButton 
              color="warning"
              size="sm"
              className="d-flex align-items-center"
              style={{ minWidth: '30px', height: '40px' }}
            >
              <CIcon icon={cilFactory} size="sm" />
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
                  <h5 className="text-muted mb-2">Inventario Total</h5>
                  <h2 className="mb-0" style={{ color: '#398de0' }}>{formatTons(inventarioActual)}</h2>
                  <small className="text-muted">Toneladas</small>
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
                  <h5 className="text-muted mb-2">Disponible</h5>
                  <h2 className="text-success mb-0">{formatTons(cañaDisponible)}</h2>
                  <small className="text-muted">Lista para venta</small>
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
                  <h5 className="text-muted mb-2">En Proceso</h5>
                  <h2 className="text-warning mb-0">{formatTons(cañaEnProceso)}</h2>
                  <small className="text-muted">Fraccionamiento</small>
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
                  <h5 className="text-muted mb-2">Rendimiento</h5>
                  <h2 className="text-info mb-0">{estadisticas.rendimiento}%</h2>
                  <CProgress 
                    value={estadisticas.rendimiento} 
                    className="mt-2"
                    style={{ height: '6px' }}
                  />
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>

          {/* Estadísticas de movimientos */}
          <CRow className="mb-4">
            <CCol md={12}>
              <CCard className="text-center" style={{ 
                backgroundColor: 'transparent', 
                border: '1px solid rgba(255, 255, 255, 0.1)',
                minHeight: '100px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <CCardBody>
                  <div className="row g-3">
                    <div className="col-12 col-sm-4">
                      <div className="text-center">
                        <div style={{display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "10px"}}>
                          <span style={{marginRight: "5px"}}>🚛</span>
                          <h6 style={{color:"#398de0", margin: 0}}>Retiros</h6>
                        </div>
                        <h4 className="mb-0" style={{color:"#398de0"}}>{formatTons(estadisticas.totalRetiros)}</h4>
                      </div>
                    </div>
                    <div className="col-12 col-sm-4">
                      <div className="text-center">
                        <div style={{display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "10px"}}>
                          <span style={{marginRight: "5px"}}>💰</span>
                          <h6 className="text-success" style={{margin: 0}}>Ventas</h6>
                        </div>
                        <h4 className="text-success mb-0">{formatTons(estadisticas.totalVentas)}</h4>
                      </div>
                    </div>
                    <div className="col-12 col-sm-4">
                      <div className="text-center">
                        <div style={{display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "10px"}}>
                          <span style={{marginRight: "5px"}}>🏭</span>
                          <h6 className="text-warning" style={{margin: 0}}>Fraccionamiento</h6>
                        </div>
                        <h4 className="text-warning mb-0">{formatTons(estadisticas.totalFraccionamiento)}</h4>
                      </div>
                    </div>
                  </div>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>

          <h5 className="mb-3">Movimientos de Caña</h5>
          <CTable hover responsive>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell style={{ backgroundColor: '#1a1a1a' }}>Fecha</CTableHeaderCell>
                <CTableHeaderCell style={{ backgroundColor: '#1a1a1a' }}>Hora</CTableHeaderCell>
                <CTableHeaderCell style={{ backgroundColor: '#1a1a1a' }}>Tipo</CTableHeaderCell>
                <CTableHeaderCell style={{ backgroundColor: '#1a1a1a' }}>Origen</CTableHeaderCell>
                <CTableHeaderCell style={{ backgroundColor: '#1a1a1a' }}>Destino</CTableHeaderCell>
                <CTableHeaderCell className="text-end" style={{ backgroundColor: '#1a1a1a' }}>Cantidad</CTableHeaderCell>
                <CTableHeaderCell className="text-end" style={{ backgroundColor: '#1a1a1a' }}>Valor</CTableHeaderCell>
                <CTableHeaderCell style={{ backgroundColor: '#1a1a1a' }}>Estado</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {movimientos.map((movimiento) => (
                <CTableRow key={movimiento.id}>
                  <CTableDataCell style={{ backgroundColor: '#212121' }}>{formatDate(movimiento.fecha)}</CTableDataCell>
                  <CTableDataCell style={{ backgroundColor: '#212121' }}>{movimiento.hora}</CTableDataCell>
                  <CTableDataCell style={{ backgroundColor: '#212121' }}>
                    <CBadge color={getTipoColor(movimiento.tipo)}>
                      {getTipoIcon(movimiento.tipo)} {movimiento.tipo.toUpperCase()}
                    </CBadge>
                  </CTableDataCell>
                  <CTableDataCell style={{ backgroundColor: '#212121' }}>{movimiento.origen}</CTableDataCell>
                  <CTableDataCell style={{ backgroundColor: '#212121' }}>{movimiento.destino}</CTableDataCell>
                  <CTableDataCell className="text-end" style={{ backgroundColor: '#212121' }}>
                    {formatTons(movimiento.cantidad)}
                  </CTableDataCell>
                  <CTableDataCell className="text-end" style={{ backgroundColor: '#212121' }}>
                    {formatCurrency(movimiento.precio)}
                  </CTableDataCell>
                  <CTableDataCell style={{ backgroundColor: '#212121' }}>
                    <CBadge color={getEstadoColor(movimiento.estado)}>
                      {movimiento.estado === 'completado' ? '✅ Completado' : '⏳ En Proceso'}
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

export default Distribucion
