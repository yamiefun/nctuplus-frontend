
import { handleActions } from 'redux-actions'
import { FETCHING_STATUS } from 'utilities/constants'

const initialState = {
  status: FETCHING_STATUS.IDLE,
  data: [],
  page: 1,
  maxPage: 1
}

export default handleActions({
  COURSES: {
    INDEX: {
      SET_STATUS: (state, action) => ({ ...state, status: action.payload }),
      STORE: (state, action) => {
        const { data, current_page: page, total_pages: maxPage } = action.payload
        return { ...state, data, page, maxPage }
      },
      UPDATE_PAGE: (state, action) => ({ ...state, page: action.payload })
    }
  }
}, initialState)
