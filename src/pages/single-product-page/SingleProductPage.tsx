import Container from 'components/container/Container.tsx'

export const SingleProductPage = () => {
	return (
		<section className='py-10'>
			<Container>
				<div className='flex gap-x-10'>
					<div className='basis-[300px]'>
						<img src='' alt='' />
					</div>
					<div className='flex-auto flex-col py-5'>
						<h2 className='text-2xl font-semibold mb-3'></h2>
						<p className='text-xl mb-5'> UAH</p>
						<button className='bg-amber-400 py-2 px-8 font-semibold'>
							Buy
						</button>
					</div>
				</div>
			</Container>
		</section>
	)
}
