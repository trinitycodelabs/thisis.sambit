'use client'
import { useState } from 'react'
import { Navbar, Footer, SectionHeader, ProductCard, products } from '@/components/site'
import { productCategories } from '@/lib/data'
export default function ProductsPage(){const [filter,setFilter]=useState('All'); const shown=filter==='All'?products:products.filter(p=>p.category===filter);return <><Navbar/><main className="container page-main"><div className="page-heading"><p className="eyebrow">The studio</p><h1>Products with<br/><em>a point of view.</em></h1><p className="hero-sub">A growing collection of useful, opinionated things for the modern internet.</p></div><div className="filter-row">{productCategories.map(c=><button key={c} className={filter===c?'filter active':'filter'} onClick={()=>setFilter(c)}>{c}</button>)}</div><div className="product-grid directory-grid">{shown.map(p=><ProductCard product={p} key={p.slug}/>)}</div></main><Footer/></>}
