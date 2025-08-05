import React from 'react'
import {
  CAvatar,
  CBadge,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import {
  cilBell,
  cilCreditCard,
  cilCommentSquare,
  cilEnvelopeOpen,
  cilFile,
  cilLockLocked,
  cilSettings,
  cilTask,
  cilUser,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'

import avatar8 from './../../assets/images/avatars/8.jpg'

const AppHeaderDropdown = () => {
  return (
    <CDropdown variant="nav-item" style={{ backgroundColor: '#1a1a1a' }}>
      <CDropdownToggle placement="bottom-end" className="py-0 pe-0" caret={false}>
        <CIcon icon={cilUser} className="me-2" />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end" style={{ backgroundColor: '#1a1a1a' }}>
        <CDropdownHeader className="bg-body-secondary fw-semibold mb-2" style={{ color: '#398de0' }}>Usuario</CDropdownHeader>
        
        <CDropdownDivider />
        <CDropdownItem href="/#/login" onClick={() => navigate('/#/login')}>
          <CIcon icon={cilLockLocked} className="me-2" />
          Cerrar Sesión
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdown
