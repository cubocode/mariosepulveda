import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'

const Login = () => {
  const navigate = useNavigate()

  return (
    <div className=" min-vh-100 d-flex flex-row align-items-center" style={{backgroundColor: '#141414'}}>
      <CContainer style={{backgroundColor: '#141414'}}>
        <CRow className="justify-content-center">
          <CCol md={4}>
            <CCardGroup style={{backgroundColor: '#1a1a1a'}}>
              <CCard className="p-4" style={{backgroundColor: '#1a1a1a'}}>
                <CCardBody>
                  <CForm>
                    <h1>Iniciar Sesión</h1>
                    <p className="text-body-secondary">Inicia sesión para continuar</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput placeholder="Usuario" autoComplete="username" />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Contraseña"
                        autoComplete="current-password"
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton  className="px-4" onClick={() => navigate('/')} style={{ backgroundColor: '#398de0', color: '#fff' }}>
                          Ingresar
                        </CButton>
                      </CCol>
                      
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
             
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
