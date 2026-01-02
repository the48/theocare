import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

interface BookAppointmentPageProps {
	onNavigate: (page: 'home' | 'book' | 'contact') => void;
}

function BookAppointmentPage({ onNavigate }: BookAppointmentPageProps) {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		date: '',
		timeRange: '',
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		const { name, value } = e.target as HTMLInputElement & HTMLSelectElement;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log('Form submitted:', formData);
		setFormData({ name: '', email: '', phone: '', date: '', timeRange: '' });
	};

	return (
		<section className='container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24'>
			<button
				onClick={() => onNavigate('home')}
				className='flex items-center gap-2 mb-8 sm:mb-12 hover:opacity-70 transition-opacity'>
				<ArrowLeft size={28} />
				<span className='text-lg'>Back</span>
			</button>

			<div className='grid lg:grid-cols-2 gap-8 lg:gap-16 items-center'>
				<div>
					<h1 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8'>
						Book An <span className='text-[#18776C]'>Appointment With Us</span>
					</h1>

					<div className='space-y-8 sm:space-y-10'>
						<div>
							<h2 className='text-2xl sm:text-3xl font-bold text-[#18776C] mb-6 sm:mb-8'>
								Book your appointment
							</h2>

							<form onSubmit={handleSubmit} className='space-y-4 sm:space-y-6'>
								<div className='grid sm:grid-cols-2 gap-4 sm:gap-6'>
									<input
										type='text'
										name='name'
										placeholder='Name'
										value={formData.name}
										onChange={handleChange}
										required
										className='px-4 sm:px-6 py-3 sm:py-4 border-2 border-[#18776C] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#18776C] text-base'
									/>
									<input
										type='email'
										name='email'
										placeholder='Email'
										value={formData.email}
										onChange={handleChange}
										required
										className='px-4 sm:px-6 py-3 sm:py-4 border-2 border-[#18776C] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#18776C] text-base'
									/>
									<input
										type='tel'
										name='phone'
										placeholder='Phone'
										value={formData.phone}
										onChange={handleChange}
										required
										className='px-4 sm:px-6 py-3 sm:py-4 border-2 border-[#18776C] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#18776C] text-base'
									/>
									<input
										type='date'
										name='date'
										value={formData.date}
										onChange={handleChange}
										required
										className='px-4 sm:px-6 py-3 sm:py-4 border-2 border-[#18776C] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#18776C] text-base'
									/>
									<select
										name='timeRange'
										value={formData.timeRange}
										onChange={handleChange}
										required
										className='px-4 sm:px-6 py-3 sm:py-4 border-2 border-[#18776C] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#18776C] text-base'>
										<option value=''>Select time range</option>
										<option value='08:00-09:00'>8:00 AM - 9:00 AM</option>
										<option value='09:00-10:00'>9:00 AM - 10:00 AM</option>
										<option value='10:00-11:00'>10:00 AM - 11:00 AM</option>
										<option value='11:00-12:00'>11:00 AM - 12:00 PM</option>
										<option value='12:00-13:00'>12:00 PM - 1:00 PM</option>
										<option value='13:00-14:00'>1:00 PM - 2:00 PM</option>
										<option value='14:00-15:00'>2:00 PM - 3:00 PM</option>
										<option value='15:00-16:00'>3:00 PM - 4:00 PM</option>
										<option value='16:00-17:00'>4:00 PM - 5:00 PM</option>
									</select>
								</div>

								<button
									type='submit'
									className='w-full px-8 py-4 border-2 border-[#18776C] rounded-lg text-[#18776C] font-bold text-lg hover:bg-[#18776C] hover:text-[#EFE4CF] transition-colors mt-2'>
									Book now
								</button>
							</form>
						</div>
					</div>
				</div>

				<div className='order-first lg:order-last'>
					{/* <div className='aspect-square bg-[#18776C]/10 rounded-3xl'> */}
					<div className='aspect-square bg-[#18776C]/10 rounded-3xl mb-6 overflow-hidden group-hover:bg-[#18776C]/20 transition-colors'>
						<img src='/7.png' alt='Appointment' />
					</div>
				</div>
			</div>
		</section>
	);
}

export default BookAppointmentPage;
