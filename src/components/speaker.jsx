import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebookF,
	faLinkedinIn,
	faTwitter,
	faBehance,
} from "@fortawesome/free-brands-svg-icons";
import PropTypes from "prop-types";

const teamMembers = [
	{
		picture: "https://cdn.easyfrontend.com/pictures/users/user24.jpg",
		fullName: "Akshay Kumar",
		designation: "Founder / CEO",
		bio: "Subscribe to Easy Tutorials YouTube Channel to watch more videos.",
		socialLinks: [
			{ icon: faFacebookF, href: "#" },
			{ icon: faLinkedinIn, href: "#" },
			{ icon: faTwitter, href: "#" },
			{ icon: faBehance, href: "#" },
		],
	},
	{
		picture: "https://cdn.easyfrontend.com/pictures/users/user9.jpg",
		fullName: "Raima Ray",
		designation: "Business Head",
		bio: "Subscribe to Easy Tutorials YouTube Channel to watch more videos.",
		socialLinks: [
			{ icon: faFacebookF, href: "#" },
			{ icon: faLinkedinIn, href: "#" },
			{ icon: faTwitter, href: "#" },
			{ icon: faBehance, href: "#" },
		],
	},
	{
		picture: "https://cdn.easyfrontend.com/pictures/users/user23.jpg",
		fullName: "Arjun Kapur",
		designation: "UI Designer",
		bio: "Subscribe to Easy Tutorials YouTube Channel to watch more videos.",
		socialLinks: [
			{ icon: faFacebookF, href: "#" },
			{ icon: faLinkedinIn, href: "#" },
			{ icon: faTwitter, href: "#" },
			{ icon: faBehance, href: "#" },
		],
	},
	{
		picture: "https://cdn.easyfrontend.com/pictures/users/user13.jpg",
		fullName: "Alia Bhatt",
		designation: "Marketing Head",
		bio: "Subscribe to Easy Tutorials YouTube Channel to watch more videos.",
		socialLinks: [
			{ icon: faFacebookF, href: "#" },
			{ icon: faLinkedinIn, href: "#" },
			{ icon: faTwitter, href: "#" },
			{ icon: faBehance, href: "#" },
		],
	},
];

const TeamMemberItem = ({ member }) => (
	<div className="bg-white shadow-xl rounded-xl hover:-translate-y-1 duration-500 lg:h-full h-max lg:my-0 md:my-7 sm:my-8 my-16 p-6 lg:p-8">
		<img
			src={member.picture}
			alt={member.fullName}
			className="max-w-full h-auto rounded-full border-4 p-1 border-red-600 mx-auto -mt-20"
			width="120"
		/>
		<div className="mt-6">
			<h4 className="text-2xl font-medium mb-1">{member.fullName}</h4>
			<p className="mb-4 text-sm">{member.designation}</p>
			<p className="opacity-50">{member.bio}</p>
			<div className="mt-6">
				{member.socialLinks.map((item, i) => (
					<a
						href={item.href}
						className={`inline-block opacity-60 transition duration-300 hover:translate-y-1 hover:opacity-100 ${
							i + 1 !== member.socialLinks.length ? "mr-4" : ""
						}`}
						key={i}
					>
						<FontAwesomeIcon icon={item.icon} />
					</a>
				))}
			</div>
		</div>
	</div>
);

TeamMemberItem.propTypes = {
	member: PropTypes.shape({
		picture: PropTypes.string.isRequired,
		fullName: PropTypes.string.isRequired,
		designation: PropTypes.string.isRequired,
		bio: PropTypes.string.isRequired,
		socialLinks: PropTypes.arrayOf(
			PropTypes.shape({
				icon: PropTypes.object.isRequired,
				href: PropTypes.string.isRequired,
			})
		).isRequired,
	}).isRequired,
};

const TeamMember10 = () => {
	return (
		<section id="speakers" className="ezy__team10 light py-14 md:py-24 bg-white  text-zinc-900">
			<div className="container px-2 mx-auto">
				<div className="flex justify-center mb-6 md:mb-12">
					<div className="max-w-lg text-center">
						<h2 className="text-3xl leading-none font-bold md:text-[45px] mb-4">
							Our Experts Team
						</h2>
						<p>
							Assumenda non repellendus distinctio nihil dicta sapiente, quibusdam maiores, illum at qui.
						</p>
					</div>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-y-4 md:gap-y-20 gap-y-24 text-center pt-6">
					{teamMembers.map((member, i) => (
						<div key={i} className="col-span-1">
							<TeamMemberItem member={member} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default TeamMember10;