import { useAppDispatch } from './storeHooks.ts'
import { useEffect } from 'react'
import { setIdFilterProduct } from 'slices/catalogSlice.ts'
import { useSelector } from 'react-redux'
import { selectByIdProduct } from '../store/selectors.ts'

// Хук для отримання товару по ID
export const useFilterByIdProduct = (params: string | undefined) => {
	const idProduct = parseInt(params as string)
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(setIdFilterProduct(idProduct))
	}, [])

	return useSelector(selectByIdProduct)
}
