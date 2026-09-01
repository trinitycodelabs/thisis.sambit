import { notFound } from 'next/navigation'
import { Navbar, Footer, ProductCard, StatusBadge, Lightbox, BuyButton } from '@/components/site'
import { products } from '@/lib/data'

export function generateStaticParams(){return products.map(p=>({slug:p.slug}))}

export default async function ProductPage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params
  const product=products.find(p=>p.slug===slug)
  if(!product)notFound()
  return <>
    <Navbar/>
    <main className="container page-main product-detail">
      <div className="detail-layout">
        <Lightbox images={product.images} name={product.name}/>
        <div className="detail-panel">
          <StatusBadge status={product.status}/>
          <h1>{product.name}</h1>
          <p className="hero-sub">{product.longDescription}</p>
          {product.status === 'COMING SOON'
            ? <div className="coming-soon-note">Coming soon — pricing revealed at launch. <a href={product.buyUrl} target="_blank" rel="noreferrer">Get notified <span aria-hidden>↗</span></a></div>
            : <BuyButton url={product.buyUrl} type={product.buyType} price={product.price}/>}
          <ul className="feature-list">
            {product.features.map(f=><li key={f}>{f}</li>)}
          </ul>
          <div className="detail-tags">
            <span className="category-pill">{product.category}</span>
          </div>
        </div>
      </div>
      <div className="product-grid more-grid">
        <h2 className="eyebrow">More from the studio</h2>
        {products.filter(p=>p.slug!==slug).slice(0,3).map(p=><ProductCard product={p} key={p.slug}/>)}
      </div>
    </main>
    <Footer/>
  </>
}
