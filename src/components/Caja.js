import React, { useState } from 'react'
import CIcon from '@coreui/icons-react'
import { cilLaptop, cilPlus, cilMinus } from '@coreui/icons'
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
  CBadge
} from '@coreui/react'

const Caja = () => {
  const [saldoActual] = useState(15420.50)
  
  // Datos inventados para la maqueta
  const transacciones = [
    {
      id: 1,
      fecha: '2024-01-15',
      hora: '09:30',
      descripcion: 'Venta de productos',
      tipo: 'ingreso',
      monto: 1250.00,
      saldo: 15420.50
    },
    {
      id: 2,
      fecha: '2024-01-15',
      hora: '11:45',
      descripcion: 'Pago a proveedor',
      tipo: 'egreso',
      monto: 850.00,
      saldo: 14170.50
    },
    {
      id: 3,
      fecha: '2024-01-14',
      hora: '16:20',
      descripcion: 'Venta de servicios',
      tipo: 'ingreso',
      monto: 3200.00,
      saldo: 15020.50
    },
    {
      id: 4,
      fecha: '2024-01-14',
      hora: '14:15',
      descripcion: 'Compra de insumos',
      tipo: 'egreso',
      monto: 450.00,
      saldo: 11820.50
    },
    {
      id: 5,
      fecha: '2024-01-13',
      hora: '10:00',
      descripcion: 'Pago de servicios',
      tipo: 'egreso',
      monto: 1200.00,
      saldo: 12270.50
    },
    {
      id: 6,
      fecha: '2024-01-13',
      hora: '08:30',
      descripcion: 'Venta mayorista',
      tipo: 'ingreso',
      monto: 5800.00,
      saldo: 13470.50
    }
  ]

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

  return (
    <>
      <CCard className="mb-4" style={{ backgroundColor: '#1a1a1a' }}>
        <CCardHeader className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <CIcon icon={cilLaptop} className="me-2" size="xl" />
            <h4 className="mb-0">Caja Registradora</h4>
          </div>
          <div className="d-flex gap-1">
            <CButton 
              color="success" 
              size="sm"
              className="d-flex align-items-center"
              style={{ minWidth: '30px', height: '40px' }}
            >
              <CIcon icon={cilPlus} size="sm" />
            </CButton>
            <CButton 
              color="danger"
              size="sm"
              className="d-flex align-items-center"
              style={{ minWidth: '30px', height: '40px' }}
            >
              <CIcon icon={cilMinus} size="sm" />
            </CButton>
          </div>
        </CCardHeader>
        <CCardBody>
          <CRow className="mb-4">
            <CCol md={6}>
              <CCard className="text-center" style={{ 
                backgroundColor: 'transparent', 
                border: '1px solid rgba(255, 255, 255, 0.1)',
                height: '120px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <CCardBody>
                  <h5 className="text-muted mb-2">Saldo Actual en Caja</h5>
                  <h2 className="mb-0" style={{ color: '#398de0' }}>{formatCurrency(saldoActual)}</h2>
                </CCardBody>
              </CCard>
            </CCol>
            <CCol md={6}>
              <CCard className="text-center" style={{ 
                backgroundColor: 'transparent', 
                border: '1px solid rgba(255, 255, 255, 0.1)',
                height: '120px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <CCardBody>
                  <h5 className="text-muted mb-2">Resumen del Día</h5>
                  <div className="d-flex justify-content-between">
                    <div className="text-center" style={{ flex: 1, paddingRight: '20px' }}>
                      <h6 className="text-success">Ingresos</h6>
                      <h4 className="text-success mb-0">{formatCurrency(4450.00)}</h4>
                    </div>
                    <div className="text-center" style={{ flex: 1, paddingLeft: '20px' }}>
                      <h6 className="text-danger">Egresos</h6>
                      <h4 className="text-danger mb-0">{formatCurrency(2500.00)}</h4>
                    </div>
                  </div>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>

          <h5 className="mb-3">Historial de Transacciones</h5>
          <CTable hover responsive>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell  style={{ backgroundColor: '#1a1a1a' }}>Fecha</CTableHeaderCell>
                <CTableHeaderCell  style={{ backgroundColor: '#1a1a1a' }}>Hora</CTableHeaderCell>
                <CTableHeaderCell  style={{ backgroundColor: '#1a1a1a' }}>Descripción</CTableHeaderCell>
                <CTableHeaderCell  style={{ backgroundColor: '#1a1a1a' }}>Tipo</CTableHeaderCell>
                <CTableHeaderCell className="text-end" style={{ backgroundColor: '#1a1a1a' }}>Monto</CTableHeaderCell>
                <CTableHeaderCell className="text-end" style={{ backgroundColor: '#1a1a1a' }}>Saldo</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {transacciones.map((transaccion) => (
                <CTableRow key={transaccion.id}>
                  <CTableDataCell style={{ backgroundColor: '#212121' }}>{formatDate(transaccion.fecha)}</CTableDataCell>
                  <CTableDataCell style={{ backgroundColor: '#212121' }}    >{transaccion.hora}</CTableDataCell>
                  <CTableDataCell style={{ backgroundColor: '#212121' }}>{transaccion.descripcion}</CTableDataCell>
                  <CTableDataCell style={{ backgroundColor: '#212121' }}>
                    <CBadge 
                      color={transaccion.tipo === 'ingreso' ? 'success' : 'danger'}
                    >
                      {transaccion.tipo === 'ingreso' ? 'Ingreso' : 'Egreso'}
                    </CBadge>
                  </CTableDataCell>
                  <CTableDataCell className="text-end" style={{ backgroundColor: '#212121' }}>
                    <span className={transaccion.tipo === 'ingreso' ? 'text-success' : 'text-danger'}>
                      {transaccion.tipo === 'ingreso' ? '+' : '-'} {formatCurrency(transaccion.monto)}
                    </span>
                  </CTableDataCell>
                  <CTableDataCell className="text-end" style={{ backgroundColor: '#212121' }}>
                    {formatCurrency(transaccion.saldo)}
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

export default Caja
