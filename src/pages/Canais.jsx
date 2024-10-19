import AnimatedPage from "../components/AnimatedPage"
import { Icon } from "@iconify/react"
import Footer from "../Footer"

export default function Canais() {
	return (
		<>
			{" "}
			<AnimatedPage>
				<section id='canais'>
					<div className='bg-white min-h-screen flex items-center'>
						<div className='mx-auto lg:flex lg:h-screen lg:items-center lg:justify-center max-w-6xl py-30'>
							<h1 className='text-rose-600 text-6xl mb-10 lg:mb-0'>Canais</h1>
							<div className='flex flex-col gap-6 sm:flex-row sm:flex-wrap lg:flex-1 my-8 lg:ml-8'>
								<div className='flex flex-1 items-center text-xs leading-5 justify-center md:justify-start font-medium rounded-full p-8 bg-blue-950 text-white md:-mr-30p'>
									<div className='mr-3'>
										<Icon icon='hugeicons:instagram' height='36px' />
									</div>
									<a
										className='text-xl'
										target='_blank'
										rel='noopener noreferrer'
										href='https://www.instagram.com/r3koficial/'>
										@r3koficial
									</a>
								</div>
								<div className='flex flex-1 items-center text-xs leading-5 justify-center md:justify-start font-medium rounded-full p-8 bg-rose-600 text-white md:-mr-30p'>
									<div className='mr-3'>
										<Icon icon='hugeicons:youtube' height='36px' />
									</div>
									<a
										className='text-xl'
										target='_blank'
										rel='noopener noreferrer'
										href='https://www.youtube.com/@r3koficial'>
										@r3koficial
									</a>
								</div>
								<div className='flex flex-1 items-center text-xs leading-5 justify-center md:justify-start font-medium rounded-full p-8 bg-blue-950 text-white'>
									<div className='mr-3'>
										<Icon icon='hugeicons:spotify' height='36px' />
									</div>
									<a
										className='text-xl'
										target='_blank'
										rel='noopener noreferrer'
										href='https://open.spotify.com/episode/4MUAoFe4k056bO7WQPDp5k?si=-Cgyt-M9SL-HTAKZcBvw8A'>
										R3K Sua Saúde Nossa Especialidade
									</a>
								</div>
							</div>
						</div>
					</div>{" "}
				</section>
			</AnimatedPage>
		</>
	)
}
