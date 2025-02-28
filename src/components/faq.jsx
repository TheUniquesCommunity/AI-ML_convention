import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const faqList = [
	{
		isActive: true,
		question: "What is Easy Frontend?",
		answer:
			"When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind. When it comes to booking a holiday, we know everyone likes something different.",
	},
	{
		isActive: false,
		question: "Who is Easy Frontend for?",
		answer:
			"When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind. When it comes to booking a holiday, we know everyone likes something different.",
	},
	{
		isActive: false,
		question: "How does Easy Frontend work?",
		answer:
			"When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind. When it comes to booking a holiday, we know everyone likes something different.",
	},
	{
		isActive: false,
		question: "How often does your team upload resources?",
		answer:
			"When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind. When it comes to booking a holiday, we know everyone likes something different.",
	},
];

const FaqItem = ({ faq }) => {
	const [isOpen, setIsOpen] = useState(faq.isActive || false);

	const toggleFaq = () => setIsOpen(!isOpen);

	return (
		<div className={`${isOpen && "active"} rounded-lg`}>
			<a
				href="#!"
				className="btn p-4 lg:p-6 w-full text-start flex justify-between items-center cursor-pointer"
				onClick={toggleFaq}
			>
				<span>{faq.question}</span>
				<FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
			</a>
			<div
				className={`${
					isOpen ? "block" : "hidden"
				} p-4 lg:p-6 bg-white border-b  border-slate-300  `}
			>
				<p className="opacity-80">{faq.answer}</p>
			</div>
		</div>
	);
};

FaqItem.propTypes = {
	faq: PropTypes.object.isRequired,
};

const Faq8 = () => {
	return (
		<section id="faqs" className="ezy__faq8 light py-14 md:py-24 px-2 bg-white  text-zinc-900">
			<div className="container ">
				<div className="grid grid-cols-12 justify-between gap-6">
					<div className="col-span-12 md:col-span-5">
						<h2 className="font-bold text-[25px] md:text-[45px] leading-none mb-6">
							FAQ
						</h2>
						<p className="text-lg opacity-70">
							Assumenda non repellendus distinctio nihil dicta sapiente,
							quibusdam maiores, illum at, aliquid blanditiis eligendi
							qui.Assumenda non repellendus distinctio nihil dicta sapiente,
							quibusdam maiores
						</p>

					</div>
					<div className="col-span-12 md:col-span-6 md:col-start-7">
						{faqList.map((faq, i) => (
							<FaqItem faq={faq} key={i} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Faq8;