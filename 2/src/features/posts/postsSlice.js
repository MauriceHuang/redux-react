import { createSlice } from '@reduxjs/toolkit'

const postsSlice = createSlice({
  name: 'posts',
  initialState: [
    { id: 1, title: 'First post', content: 'first content' },
    { id: 2, title: 'Second post', content: 'second content' },
  ],
  reducers: {
    postAdded(state, action) {
      state.push(action.payload)
    },
  },
})
export const { postAdded } = postsSlice.actions
export default postsSlice.reducer
