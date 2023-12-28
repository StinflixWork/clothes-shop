import { useSelector } from 'react-redux'
import { useAppDispatch } from 'hooks/storeHooks.ts'
import { RootState } from '../../../store/store.ts'
import { setFilters } from 'slices/catalogSlice.ts'

export const SortProducts = () => {
	const filters = useSelector(({ catalog }: RootState) => catalog.filters)
	const dispatch = useAppDispatch()

	function handleSearch(value: string) {
		dispatch(setFilters({ ...filters, search: value }))
	}

	function handleSort(value: string) {
		dispatch(setFilters({ ...filters, sort: value }))
	}

	return (
		<div className='inline-flex items-center gap-x-2'>
			<select
				className='bg-teal-950 text-amber-50 px-1 py-2 outline-0'
				id='sort-products'
				value={filters.sort}
				onChange={e => handleSort(e.target.value)}
			>
				<option value='default'>Sort by...</option>
				<option value='new'>New</option>
				<option value='cheaper'>From cheap to expensive</option>
				<option value='expensive'>From expensive to cheap</option>
			</select>
			<input
				placeholder='Search'
				type='text'
				value={filters.search}
				onChange={e => handleSearch(e.target.value)}
				className='bg-teal-950 text-amber-50 px-4 py-2'
			/>
		</div>
	)
}
