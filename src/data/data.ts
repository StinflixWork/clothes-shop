import CargoJeans from 'images/catalog/pants/jeans_cargo_1.jpeg'
import CargoPants from 'images/catalog/pants/pants_cargo_1.jpeg'
import CargoPants2 from 'images/catalog/pants/pants_cargo_2.jpeg'
import CargoPants3 from 'images/catalog/pants/pants_cargo_3.jpeg'
import CargoJeans2 from 'images/catalog/pants/jeans_cargo_2.jpeg'
import { IProduct } from 'interfaces/index.ts'

// temp fake data
export const data: IProduct[] = [
	{
		id: 1,
		title: 'The jeans Cargo black slim',
		price: 1130,
		img: {
			alt: 'jeans',
			src: CargoJeans
		},
		isFavorite: false,
		category: 'jeans',
		size: ['XS', 'S', 'M', 'L', 'XL']
	},
	{
		id: 2,
		title: 'The pants Staff du cargo blue',
		price: 1230,
		img: {
			alt: 'pants',
			src: CargoPants
		},
		isFavorite: false,
		category: 'pants',
		size: ['XS', 'S', 'M']
	},
	{
		id: 3,
		title: 'Insulated joggers Staff ba grey fleece',
		price: 1050,
		img: {
			alt: 'pants',
			src: CargoPants2
		},
		isFavorite: false,
		category: 'pants',
		size: ['XS', 'S']
	},
	{
		id: 4,
		title: 'Joggers Staff hazard',
		price: 860,
		img: {
			alt: 'pants',
			src: CargoPants3
		},
		isFavorite: false,
		category: 'pants',
		size: ['XS', 'S']
	},
	{
		id: 5,
		title: 'Jeans Staff c2 baggy reg',
		price: 1190,
		img: {
			alt: 'jeans',
			src: CargoJeans2
		},
		isFavorite: false,
		category: 'jeans',
		size: ['XS', 'S']
	}
]
