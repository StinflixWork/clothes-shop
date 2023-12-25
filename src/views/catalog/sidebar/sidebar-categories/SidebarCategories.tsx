import { categoriesList } from 'views/catalog/sidebar/categories.data.ts'
import { MyCheckbox } from 'components/inputs/checkbox/MyCheckbox.tsx'
import { toCapitalizeCase } from 'utils/toCapitalizeCase.ts'
import React, { useEffect, useState } from 'react'
import { useAppDispatch } from 'hooks/storeHooks.ts'
import { changeFilter } from 'slices/filterSlice.ts'

export const SidebarCategories = () => {
	const [isCheckedCategories, setIsCheckedCategories] = useState<string[]>([])
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(changeFilter(isCheckedCategories))
	}, [isCheckedCategories])

	function handleCheckedCategory(e: React.ChangeEvent<HTMLInputElement>) {
		const { value, checked } = e.target

		if (checked) {
			setIsCheckedCategories([...isCheckedCategories, value])
		} else {
			setIsCheckedCategories(
				isCheckedCategories.filter(category => category !== value)
			)
		}
	}
	return (
		<div>
			<h2 className='text-2xl mb-5'>Categories</h2>
			<div className='flex flex-col gap-y-2'>
				{categoriesList.map(category => (
					<MyCheckbox
						key={category}
						title={toCapitalizeCase(category)}
						value={category}
						id={`checkbox-category-${category}`}
						onChecked={handleCheckedCategory}
					/>
				))}
			</div>
		</div>
	)
}
