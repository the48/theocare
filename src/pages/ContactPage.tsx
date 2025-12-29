import { Phone, Mail, MapPin } from 'lucide-react';

function ContactPage() {
	return (
		<section className='bg-[#18776C] text-white py-12 sm:py-16 md:py-20 lg:py-24'>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
				<h2 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-12 sm:mb-16'>
					Contact Us
				</h2>
				<div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12'>
					<div className='space-y-6'>
						<div className='flex items-start gap-3'>
							<MapPin className='mt-1 flex-shrink-0' size={24} />
							<div>
								<h3 className='font-bold text-xl mb-2'>Location</h3>
								<p className='text-lg'>Ruiru Town</p>
							</div>
						</div>
						<div className='flex items-start gap-3'>
							<Phone className='mt-1 flex-shrink-0' size={24} />
							<div>
								<h3 className='font-bold text-xl mb-2'>Mobile</h3>
								<a
									href='tel:+254708762791'
									className='text-lg hover:opacity-80 transition-opacity'>
									(254) 708934419
								</a>
							</div>
						</div>
						<div className='flex items-start gap-3'>
							<Mail className='mt-1 flex-shrink-0' size={24} />
							<div>
								<h3 className='font-bold text-xl mb-2'>Email</h3>
								<a
									href='mailto:info@theo-care.com'
									className='text-lg hover:opacity-80 transition-opacity'>
									info@theo-care.com
								</a>
							</div>
						</div>
					</div>

					<div className='sm:col-span-1 lg:col-span-2'>
						<div className='border-2 border-white rounded-3xl p-6 sm:p-8'>
							<h3 className='font-bold text-2xl sm:text-3xl mb-6'>
								Clinic Hours
							</h3>
							<div className='space-y-3 text-base sm:text-lg'>
								<div className='flex justify-between'>
									<span>Monday:</span>
									<span>8am – 6pm</span>
								</div>
								<div className='flex justify-between'>
									<span>Tuesday:</span>
									<span>8am – 6pm</span>
								</div>
								<div className='flex justify-between'>
									<span>Wednesday:</span>
									<span>8am – 6pm</span>
								</div>
								<div className='flex justify-between'>
									<span>Thursday:</span>
									<span>8am – 6pm</span>
								</div>
								<div className='flex justify-between'>
									<span>Friday:</span>
									<span>8am – 6pm</span>
								</div>
								<div className='flex justify-between'>
									<span>Sunday:</span>
									<span>12pm – 6pm</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<footer className='border-t border-white/20 mt-12 sm:mt-16 pt-8 sm:pt-12'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='flex flex-col md:flex-row justify-between items-center gap-6'>
						<div className='text-2xl sm:text-3xl font-bold tracking-wide'>
							THEO-CARE
						</div>
						<div className='flex flex-col sm:flex-row gap-4 sm:gap-8 text-center sm:text-left'>
							<a
								href='tel:+254708762791'
								className='hover:opacity-80 transition-opacity'>
								(254) 708934419
							</a>
							<a
								href='mailto:info@theo-care.com'
								className='hover:opacity-80 transition-opacity'>
								info@theo-care.com
							</a>
							<span>Ruiru Town</span>
						</div>
					</div>
				</div>
			</footer>
		</section>
	);
}

export default ContactPage;
