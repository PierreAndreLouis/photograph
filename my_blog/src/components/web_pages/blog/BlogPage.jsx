import React from 'react'
import HeroBlog from './HeroBlog'
import BlogList from './BlogList'
// import Footer4 from '../home/Footer4'
import BlogSeo from '../../seo/BlogSeo'

export default function BlogPage() {
  return (
    <div>
      <BlogSeo />
      <HeroBlog />
      <BlogList />
      {/* <Footer4 /> */}
    </div>
  )
}
