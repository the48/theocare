import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

interface BookAppointmentPageProps {
	onNavigate: (page: 'home' | 'book' | 'contact') => void;
}

function BookAppointmentPage({ onNavigate }: BookAppointmentPageProps) {
	useEffect(() => {
		// Load Calendly widget script
		const script = document.createElement('script');
		script.src = 'https://assets.calendly.com/assets/external/widget.js';
		script.async = true;
		document.body.appendChild(script);

		return () => {
			document.body.removeChild(script);
		};
	}, []);

	return (
		<section className='container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24'>
			<button
				onClick={() => onNavigate('home')}
				className='flex items-center gap-2 mb-8 sm:mb-12 hover:opacity-70 transition-opacity'>
				<ArrowLeft size={28} />
				<span className='text-lg'>Back</span>
			</button>

			<div className='grid lg:grid-cols-2 gap-8 lg:gap-16 items-start'>
				<div>
					<h1 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8'>
						Book An <span className='text-[#18776C]'>Appointment With Us</span>
					</h1>

					<div className='space-y-8 sm:space-y-10'>
						<div>
							<h2 className='text-2xl sm:text-3xl font-bold text-[#18776C] mb-6 sm:mb-8'>
								Book your appointment
							</h2>

							<div 
								className='calendly-inline-widget' 
								data-url='https://calendly.com/theocarephysiotherapy/30min?hide_event_type_details=1&hide_gdpr_banner=1' 
								style={{ minWidth: '320px', height: '700px' }}
							/>
						</div>
					</div>
				</div>

				<div className='order-first lg:order-last'>
					<div className='aspect-square bg-[#18776C]/10 rounded-3xl mb-6 overflow-hidden group-hover:bg-[#18776C]/20 transition-colors'>
						<img src='/7.png' alt='Appointment' />
					</div>
				</div>
			</div>
		</section>
	);
}

export default BookAppointmentPage;
