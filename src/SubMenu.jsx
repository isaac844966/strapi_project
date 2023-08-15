import React from 'react'
import sublinks from './data'
import { useGlobalContext } from './Context'


const SubMenu = () => {
  
 const {pageId, setPageId } = useGlobalContext()
 const currnetPage = sublinks.find((item)=>item.pageId === pageId)
 const handleMouseLeave = ()=>{
  setPageId(null)
 }
  return (
    <div className={currnetPage?'submenu show-submenu': 'submenu'} onMouseLeave={handleMouseLeave}>
      <h5>{currnetPage?.page}</h5>
      <div className="submenu-links"  style={{gridTemplateColumns:currnetPage?.links.length > 3? '1fr 1fr':'1fr' }}>
        {currnetPage?.links.map((link)=>{
          const {id,icon,url,label} = link
          return <a key={id} href={url}>{icon}{label}</a>
        })}
      </div>
    </div>
  )
}

export default SubMenu