import { createSlice } from '@reduxjs/toolkit'

type MenuData = {
  MenuId: string
  ParentMenuId: string
  MenuText: string
  MenuPath: string
  MenuElement: string
  MenuType: number
  Generation: number
  Sort: number
  AccessLevel: number
  disabled: boolean
}

type UserData = {
  AccessToken: string | null
  KategoryPengguna: string
  UserUuid: string
  Username: string
  Nama: string
  NoPerkhidmatan: string
  KodNegeri: string
  Negeri: string
  KodNegara: string | null
  Negara: string | null
  KodCawangan: string
  Cawangan: string
  KodBahagian: string
  Bahagian: string
  KodJabatan: string | null
  Jabatan: string | null
  KodUnit: string
  Unit: string
  KodJawatan: string
  Jawatan: string
  KodGred: string
  Gred: string
  KodAgensi: string | null
  Agensi: string | null
  KodPeranans: Array<string>
}

interface InitialStateProps {
  isLoading: boolean
  menu: Array<MenuData>
  userData: UserData
}

const initialState: InitialStateProps = {
  isLoading: false,
  menu: [],
  userData: {
    AccessToken: null,
    KategoryPengguna: '',
    UserUuid: '',
    Username: '',
    Nama: '',
    NoPerkhidmatan: '',
    KodNegeri: '',
    Negeri: '',
    KodNegara: null,
    Negara: null,
    KodCawangan: '',
    Cawangan: '',
    KodBahagian: '',
    Bahagian: '',
    KodJabatan: null,
    Jabatan: null,
    KodUnit: '',
    Unit: '',
    KodJawatan: '',
    Jawatan: '',
    KodGred: '',
    Gred: '',
    KodAgensi: null,
    Agensi: null,
    KodPeranans: ['']
  }
}

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload.isLoading
    },
    setUserMenu: (state, action) => {
      state.menu = action.payload.menu
    },
    setUserData: (state, action) => {
      state.userData = action.payload.userData
    },
    logOut: (state) => {
      state = initialState
    }
  }
})

export const commonData = (state) => state.common

// Action creators are generated for each case reducer function
export const { setLoading, setUserMenu, setUserData, logOut } = commonSlice.actions

export default commonSlice.reducer
