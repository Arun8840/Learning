import { createSlice } from "@reduxjs/toolkit"
import { title } from "process"

interface AppState {
  tost: boolean
  drawer: {
    title: string | null
    isOpen: boolean
  }
}

const initialState: AppState = {
  tost: false,
  drawer: {
    title: null,
    isOpen: false,
  },
}

const uiSlicer = createSlice({
  name: "ui",
  initialState,
  reducers: {
    Tost: (state, action) => {
      state.tost = action.payload
    },
    openDrawer: (state, actions) => {
      let payload = actions?.payload
      let updated = {
        ...state?.drawer,
        title: payload?.title,
        isOpen: payload?.isOpen,
      }
      state.drawer = updated
    },
  },
})

export const { Tost, openDrawer } = uiSlicer.actions
export default uiSlicer.reducer
