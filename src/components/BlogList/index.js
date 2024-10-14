import BlogItem from '../BlogItem'

import './index.css'

const BlogList = props => {
  const {blogsList} = props

  return (
    <ul className="blog-item-container">
      {blogsList.map(eachblog => (
        <BlogItem eachblogDetails={eachblog} key={eachblog.id} />
      ))}
    </ul>
  )
}

export default BlogList
