import {formatISO9075} from 'date-fns';
import { Link } from 'react-router-dom';
export default function Post({_id,title, summary, cover, content,author, createdAt}){
  return(
    <div className="post">
      <div className="image">
        <Link to={`/post/${_id}`} >
          <img src={'http://localhost:4000/'+cover} alt="" height={'204px'}  style={{ width:'100%' }}/>
          {/* <img src='https://techcrunch.com/wp-content/uploads/2023/01/DSC02723.jpg?w=1390&crop=1' /> */}
        </Link>
      </div>
      <div className="texts">
        <Link to={`/post/${_id}`} >
          <h2>{title}</h2>
        </Link>
        <p className="info">
          <a className="author">{author.username}</a>
          <time>{formatISO9075(new Date(createdAt))}</time>
        </p>
        <p className="summary">{summary}</p>
      </div>
    </div>
  )
}