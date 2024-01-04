export interface IProduct {
	id: number
	title: string
	price: number
	img: TypeImage
	isFavorite: boolean
	category: TypeCategoryProduct
	size: TypeSizeProduct[]
}

type TypeImage = {
	src: string
	alt: string
}

type TypeCategoryProduct = 'jeans' | 'pants'

type TypeSizeProduct = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL'

export interface IPropsProduct {
	product: IProduct
}
