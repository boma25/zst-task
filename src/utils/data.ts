/** @format */
import { HiSpeakerphone } from "react-icons/hi"
import { IoMdTime, IoIosSettings } from "react-icons/io"
import { MdComputer } from "react-icons/md"
import { FaUsers, FaCreditCard } from "react-icons/fa"

interface listing {
	name: string
	imageUrl: string
	description: string
	contact_name: string
	contact_num: number
}

const listings: Array<listing> = [
	{
		name: "5 bedroom Duplex in Ajah",
		imageUrl:
			"https://wp.zillowstatic.com/25/real-estate-photo-shutterstock_554000050-ca1d64.jpg",
		description: "Beautiful terrace located in a serene environment",
		contact_name: "Fred Benjamin",
		contact_num: +2349031561232,
	},
	{
		name: "4 bedroom Flat in Leki",
		imageUrl:
			"https://wp.zillowstatic.com/trulia/wp-content/uploads/sites/1/2016/05/Take-Better-Listing-Photos-051016-LIGHT.jpg",
		description: "Beautiful terrace located in a serene environment",
		contact_name: "Fred Benjamin",
		contact_num: +2349031561232,
	},
	{
		name: "5 bedroom Duplex in Ajah",
		imageUrl:
			"https://wp.zillowstatic.com/25/real-estate-photo-shutterstock_554000050-ca1d64.jpg",
		description: "Beautiful terrace located in a serene environment",
		contact_name: "Fred Benjamin",
		contact_num: +2349031561232,
	},
	{
		name: "4 bedroom Flat in Leki",
		imageUrl:
			"https://wp.zillowstatic.com/trulia/wp-content/uploads/sites/1/2016/05/Take-Better-Listing-Photos-051016-LIGHT.jpg",
		description: "Beautiful terrace located in a serene environment",
		contact_name: "Fred Benjamin",
		contact_num: +2349031561232,
	},
	{
		name: "5 bedroom Duplex in Ajah",
		imageUrl:
			"https://wp.zillowstatic.com/25/real-estate-photo-shutterstock_554000050-ca1d64.jpg",
		description: "Beautiful terrace located in a serene environment",
		contact_name: "Fred Benjamin",
		contact_num: +2349031561232,
	},
	{
		name: "4 bedroom Flat in Leki",
		imageUrl:
			"https://wp.zillowstatic.com/trulia/wp-content/uploads/sites/1/2016/05/Take-Better-Listing-Photos-051016-LIGHT.jpg",
		description: "Beautiful terrace located in a serene environment",
		contact_name: "Fred Benjamin",
		contact_num: +2349031561232,
	},
]

const asideList: Array<{ name: string; Icon: any }> = [
	{
		name: "Listings",
		Icon: HiSpeakerphone,
	},
	{
		name: "Dashboard",
		Icon: IoMdTime,
	},
	{
		name: "Providers",
		Icon: MdComputer,
	},
	{
		name: "Users",
		Icon: FaUsers,
	},
	{
		name: "Billing",
		Icon: FaCreditCard,
	},
	{
		name: "Settings",
		Icon: IoIosSettings,
	},
]

const loginCred = {
	email: "boma@boma.com",
	password: "theTest123",
}

export { listings, asideList, loginCred }
