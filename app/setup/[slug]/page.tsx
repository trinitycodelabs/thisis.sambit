import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Navbar, Footer, SetupProductCard, Lightbox, BuyButton } from '@/components/site'
import { setup } from '@/lib/data'

export function generateStaticParams(){return setup.map(item=>({slug:item.slug}))}

export default async function SetupItemPage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params
  const item=setup.find(s=>s.slug===slug)
  if(!item)notFound()
  const more=setup.filter(s=>s.slug!==slug).slice(0,3)
  return <>
    <Navbar/>
    <main className="container page-main product-detail">
      <Link href="/setup" className="text-link back-link"><ArrowLeft size={15}/> Back to setup</Link>
      <div className="detail-layout">
        <Lightbox images={item.images} name={item.name}/>
        <div className="detail-panel">
          <span className="category-pill">{item.category}</span>
          <h1>{item.name}</h1>
          <p className="hero-sub">{item.longDescription}</p>
          {item.price === '—'
            ? <div className="coming-soon-note">Details coming soon — check back shortly.</div>
            : <BuyButton url={item.buyUrl} type={item.buyType} price={item.price} retailer={item.retailer}/>}
        </div>
      </div>
      <div className="setup-grid more-grid">
        <h2 className="eyebrow">More on the desk</h2>
        {more.map(s=><SetupProductCard item={s} key={s.slug}/>)}
      </div>
    </main>
    <Footer/>
  </>
}
