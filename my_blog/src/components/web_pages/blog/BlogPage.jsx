import React from 'react'
import HeroBlog from './HeroBlog'
import BlogList from './BlogList'
import Footer3 from '../home/Footer3'
import BlogSeo from '../../seo/BlogSeo'

export default function BlogPage() {
  return (
    <div>
      <BlogSeo />
      <HeroBlog />
      <BlogList />
      <Footer3 />
    </div>
  )
}
