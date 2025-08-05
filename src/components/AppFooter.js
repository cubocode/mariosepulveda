import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter className="px-4" style={{ backgroundColor: '#141414' }}>
      <div>
        
        <span className="ms-1">&copy; 2025</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Desarrollado por</span>
        <a href="https://www.instagram.com/cubo.code/" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', color:"#398de0"}}>
          Cubo
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
