import {
	RangeSlider,
	RangeSliderFilledTrack,
	RangeSliderThumb,
	RangeSliderTrack
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'hooks/storeHooks.ts'
import { setFilters } from 'slices/catalogSlice.ts'

export const SidebarPrice = () => {
	const filters = useSelector(({ catalog }) => catalog.filters)
	const dispatch = useAppDispatch()
	const [price, setPrice] = useState<number[]>(filters.rangePrice)

	useEffect(() => {
		dispatch(setFilters({ ...filters, rangePrice: price }))
	}, [price])

	return (
		<div>
			<h2 className='text-2xl mb-5'>Price</h2>
			<div className='w-[200px]'>
				<RangeSlider
					aria-label={['min', 'max']}
					min={0}
					max={2000}
					value={price}
					onChange={value => setPrice(value)}
				>
					<RangeSliderTrack>
						<RangeSliderFilledTrack />
					</RangeSliderTrack>
					<RangeSliderThumb index={0} />
					<RangeSliderThumb index={1} />
				</RangeSlider>
				<span className='text-sm'>{`${price[0]} and ${price[1]}`}</span>
			</div>
		</div>
	)
}
