
import React from 'react'
import { withRouter } from 'react-router-dom'
import Pagination from 'components/Pagination'
import styles from './style.scss'

const Item = withRouter((props) => {
  return (
    <div className='col-4 col-md-4 mb-3' onClick={() => props.history.push(`/books/${props.id}`)}>
      <div className={`${styles.bookItem} card clickable`} >
        <div className='text-center'>
          <img className='d-inline-block' alt='尚無圖片!' height='150' src={`${SERVER_URL}${props.cover_image.url}`} />
        </div>
        <div className='card-body text-center'>
          <div>{props.name}</div>
          <div>作者: {props.authors}</div>
          <div>
            課程: {
              props.courses &&
              props.courses
                .map(course => course.permanent_course.name)
                .join(', ')
            }
          </div>
        </div>

        <div className='card-footer mt-1 p-2' >
          <span>{props.updated_at.slice(0, 10)}</span>
          <span className={`pull-right bold ${styles.price}`}>
            <i className='fa fa-dollar' />{ props.price }
          </span>
        </div>
      </div>
    </div>
  )
})

const Table = (props) => (
  <div>
    <div className='row'>
      { props.data.map(book => (<Item key={book.id} {...book} />)) }
    </div>
    <div className='text-center'>
      <Pagination page={props.page} maxPage={props.maxPage} to={props.updatePage} />
    </div>
  </div>
)

export default Table
