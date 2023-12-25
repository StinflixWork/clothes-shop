import React from 'react'

interface ICheckbox {
	title: string
	value: string
	id: string
	onChecked: (e: React.ChangeEvent<HTMLInputElement>) => void
}
export const MyCheckbox = ({ title, id, value, onChecked }: ICheckbox) => {
	return (
		<label className='inline-flex gap-x-2 items-center'>
			<input
				type='checkbox'
				id={id}
				value={value}
				onChange={e => onChecked(e)}
			/>
			{title}
		</label>
	)
}
