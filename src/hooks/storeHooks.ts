import { AppDispatch } from '../store/store.ts'
import { useDispatch } from 'react-redux'

type TypeDispatch = () => AppDispatch
export const useAppDispatch: TypeDispatch = useDispatch
