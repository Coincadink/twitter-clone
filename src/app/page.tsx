import { Navbar, Timeline, Trending } from '@/components'

const page = () => {
	return (
		<div className='w-screen h-screen flex justify-center'>
			<Navbar/>
			<Timeline/>
			<Trending/>
		</div>
	)
}

export default page