import {BiHomeCircle, BiUser} from 'react-icons/bi'
import {BsBell, BsBookmark, BsTwitter} from 'react-icons/bs'
import {HiOutlineHashtag} from 'react-icons/hi'
import {HiEnvelope} from 'react-icons/hi2'

import Link from 'next/link'

const NAV_ITEMS = [
	{
		title: "Home",
		icon: BiHomeCircle
	},
	{
		title: "Explore",
		icon: HiOutlineHashtag
	},
	{
		title: "Notifications",
		icon: BsBell
	},
	{
		title: "Messages",
		icon: HiEnvelope
	},
	{
		title: "Bookmarks",
		icon: BsBookmark
	},
	{
		title: "Profile",
		icon: BiUser
	}
]

const page = () => {
	return (
		<div className='w-full h-full flex justify-center items-center relative'>
			<div className='max-w-screen-xl w-full h-full flex relative'>
				{/* left side bar for nav */}
				<section className='fixed w-72 flex flex-col h-screen space-y-4 my-4'>
					<Link href={"/"} className='my-4 p2 text-2xl'>
						<BsTwitter />
					</Link>
					{
						NAV_ITEMS.map((item)=>(
							<Link className = 'hover:bg-white/10 transition duration-200 text-xl rounded-3xl p-2 flex items-center justify-start w-fit space-x-4' href={`/${item.title.toLowerCase()}`} key = {item.title}>
								<div>
									<item.icon/>
								</div>
								<div>
									{item.title}
								</div>
							</Link>
						))
					}
				</section>

				{/*  */}
				<main>
					home timeline
				</main>

				{/*  */}
				<section>
					right sidebar
				</section>
			</div>
		</div>
	)
}

export default page