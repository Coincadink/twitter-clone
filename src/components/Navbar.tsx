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
    <section className='w-0 invisible sm:visible sm:w-[80px] xl:w-[340px] flex justify-center items-center'>
        LEFT NAVBAR
    </section>
  )
}

export default Navbar