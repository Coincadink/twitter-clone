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

const Navbar = () => {
	return (
		<section className='w-0 invisible sm:visible sm:w-[80px] xl:w-[340px] flex flex-col justify-between items-center'>
			<div className="w-full p-2">
				<Link href={"/"} className='my-4 p2'>
					<BsTwitter className='relative left-2 text-4xl'/>
				</Link>
				{
					NAV_ITEMS.map((item)=>(
						<Link className = 'hover:bg-white/10 transition duration-200 text-2xl rounded-3xl p-3 flex items-center justify-start w-fit space-x-4' href={`/${item.title.toLowerCase()}`} key = {item.title}>
							<div><item.icon/></div>
							<div>{item.title}</div>
						</Link>
					))
				}
				<Link className='w-full h-20 bg-blue-500 flex items-center justify-center p-100 rounded-4xl' href="#">POST</Link>
			</div>

			<div>PROFILE SECTION</div>
		</section>
	)
}

export default Navbar