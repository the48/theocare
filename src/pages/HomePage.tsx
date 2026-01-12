interface HomePageProps {
	onNavigate: (page: 'home' | 'book' | 'contact') => void;
}

function HomePage({ onNavigate }: HomePageProps) {
	return (
		<>
			<section className='container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24'>
				<div className='grid lg:grid-cols-2 gap-8 lg:gap-12 items-center'>
					<div className='space-y-6 sm:space-y-8'>
						<h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight'>
							Your path to better physical wellness starts here
						</h1>
						<p className='text-lg sm:text-xl md:text-2xl leading-relaxed opacity-90'>
							Count on our expert physical therapy experts to help you move
							better and feel better
						</p>
						<div className='flex flex-col sm:flex-row gap-4 pt-4'>
							<button
								onClick={() => onNavigate('book')}
								className='px-8 py-4 bg-[#18776C] text-white rounded-full hover:bg-[#18776C]/90 transition-colors text-lg font-medium'>
								Book Now
							</button>
						</div>
					</div>
					<div className='order-first lg:order-last'>
						{/* <div className='aspect-[4/3] bg-[#18776C]/10 rounded-3xl'> */}
						<div className='aspect-[4/3] bg-[#18776C]/10 rounded-3xl mb-6 overflow-hidden group-hover:bg-[#18776C]/20 transition-colors'>
							<img src='/1.jpg' alt='Physical_Wellness' />
						</div>
					</div>
				</div>
			</section>

			<section
				id='about'
				className='bg-white/30 py-12 sm:py-16 md:py-20 lg:py-24'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='grid lg:grid-cols-2 gap-8 lg:gap-12 items-center'>
						<div className='order-last lg:order-first'>
							{/* <div className='aspect-[4/3] bg-[#18776C]/10 rounded-3xl'> */}
							<div className='aspect-[4/3] bg-[#18776C]/10 rounded-3xl mb-6 overflow-hidden group-hover:bg-[#18776C]/20 transition-colors'>
								<img src='/2.jpg' alt='Exercise' />
							</div>
						</div>
						<div className='space-y-6 sm:space-y-8'>
							<h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight'>
								Feeling better starts with{' '}
								<span className='text-[#18776C]'>moving better</span>
							</h2>
							<p className='text-lg sm:text-xl leading-relaxed'>
								Welcome to Theo-Care, where client satisfaction reigns supreme
								in our physiotherapy practice. Our dedicated team prioritizes
								your needs, crafting personalized treatments to enhance
								performance and aid in recovery.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section id='services' className='py-12 sm:py-16 md:py-20 lg:py-24'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16'>
						What we offer
					</h2>
					<div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'>
						<div className='group'>
							{/* <div className='aspect-[4/3] bg-[#18776C]/10 rounded-3xl mb-6 group-hover:bg-[#18776C]/20 transition-colors'> */}
							<div className='aspect-[4/3] bg-[#18776C]/10 rounded-3xl mb-6 overflow-hidden group-hover:bg-[#18776C]/20 transition-colors'>
								<img src='/3.jpg' alt='Muscoskeletal' />
							</div>
							<h3 className='text-2xl sm:text-3xl font-bold text-center'>
								Musculoskeletal Pain-management
							</h3>
						</div>
						<div className='group'>
							{/* <div className='aspect-[4/3] bg-[#18776C]/10 rounded-3xl mb-6 group-hover:bg-[#18776C]/20 transition-colors'> */}
							<div className='aspect-[4/3] bg-[#18776C]/10 rounded-3xl mb-6 overflow-hidden group-hover:bg-[#18776C]/20 transition-colors'>
								<img src='/4.jpg' alt='Sports_Rehab' />
							</div>
							<h3 className='text-2xl sm:text-3xl font-bold text-center'>
								Sports Injury Rehabilitation
							</h3>
						</div>
						<div className='group sm:col-span-2 lg:col-span-1'>
							{/* <div className='aspect-[4/3] bg-[#18776C]/10 rounded-3xl mb-6 group-hover:bg-[#18776C]/20 transition-colors'> */}
							<div className='aspect-[4/3] bg-[#18776C]/10 rounded-3xl mb-6 overflow-hidden group-hover:bg-[#18776C]/20 transition-colors'>
								<img src='/5.jpg' alt='Post_OP' />
							</div>
							<h3 className='text-2xl sm:text-3xl font-bold text-center'>
								Post-OP Rehabilitation
							</h3>
						</div>
					</div>
				</div>
			</section>

			<section
				id='approach'
				className='bg-white/30 py-12 sm:py-16 md:py-20 lg:py-24'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='grid lg:grid-cols-2 gap-8 lg:gap-12 items-center'>
						<div className='space-y-6 sm:space-y-8'>
							<h2 className='text-3xl sm:text-4xl md:text-5xl font-bold leading-tight'>
								What we do best
							</h2>
							<h3 className='text-xl sm:text-2xl italic opacity-90'>
								Our approach to physical therapy
							</h3>
							<p className='text-base sm:text-lg leading-relaxed'>
								Our physiotherapy clinic specializes in multifaceted approach
								that includes thorough assessments, personalized treatment
								plans, and advanced therapeutic techniques. Our highly qualified
								therapists utilize a combination of exercise therapy, manual
								therapy, and modalities such as electrotherapy and ultrasound to
								alleviate pain and improve function. We emphasize patient
								education, providing guidance on posture, ergonomics, and
								activity modification to prevent recurrence.
							</p>
						</div>
						<div>
							{/* <div className='aspect-[4/3] bg-[#18776C]/10 rounded-3xl'> */}
							<div className='aspect-[4/3] bg-[#18776C]/10 rounded-3xl mb-6 overflow-hidden group-hover:bg-[#18776C]/20 transition-colors'>
								<img src='/6.jpg' alt='Therapy' />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default HomePage;
