export interface IProduct {
	id: number
	title: string
	price: number
	img: TypeImage
	isFavorite: boolean
	category: TypeCategoryProduct
}

type TypeImage = {
	src: string
	alt: string
}

type TypeCategoryProduct = 'jeans' | 'pants'
