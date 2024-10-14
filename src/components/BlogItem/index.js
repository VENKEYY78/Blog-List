import './index.css'

const BlogItem = props => {
  const {eachblogDetails} = props
  const {title, description, publishedDate} = eachblogDetails

  return (
    <li>
      <div>
        <h1 className="tiltle">{title}</h1>
        <p>{description}</p>
      </div>
      <p>{publishedDate}</p>
    </li>
  )
}

export default BlogItem
