'use client'
import { useState } from 'react'
import { Navbar, Footer, SectionHeader, ResourceCard } from '@/components/site'
import { resources } from '@/lib/data'
import { resourceCategories } from '@/lib/data'
export default function ResourcesPage(){const [filter,setFilter]=useState('All');const shown=filter==='All'?resources:resources.filter(r=>r.category===filter);return <><Navbar/><main className="container page-main"><div className="page-heading"><p className="eyebrow">The good stuff</p><h1>Resources I<br/><em>recommend.</em></h1><p className="hero-sub">Tools and ideas I return to, recommend to friends, and use to make better things.</p></div><div className="filter-row">{resourceCategories.map(c=><button key={c} className={filter===c?'filter active':'filter'} onClick={()=>setFilter(c)}>{c}</button>)}</div><div className="resource-grid directory-grid">{shown.map(item=><ResourceCard item={item} key={item.name}/>)}</div></main><Footer/></>}
