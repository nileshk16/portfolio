import websiteImg1 from '../assets/portfolio.png';
import websiteImg2 from '../assets/arjunaairways.png';
import websiteImg3 from '../assets/littlelemon.png';
import websiteImg4 from '../assets/todoapp.png';
import websiteImg5 from '../assets/notesapp.png';

export default function Projects() {
    const config = {
        projects: [
            {
                image: websiteImg1,
                description: 'Portfolio website. Built using React & Tailwind CSS.',
                codeLink: 'https://github.com/jvlcode/jvlcart',
                liveLink: ""
            },
            {
                image: websiteImg2,
                description: 'Arjuna airways, a flight booking app. Built using React & Tailwind CSS.',
                codeLink: 'https://github.com/nileshk16/flight-booking-app',
                liveLink: 'https://arjunaairways.netlify.app/'
            },
            {
                image: websiteImg3,
                description: 'Booking a table at Little lemon restaurant. Built using React & Vannila CSS.',
                codeLink: 'https://github.com/nileshk16/little-lemon',
                liveLink: 'https://thelittlelemonrs.netlify.app/'
            },
            {
                image: websiteImg4,
                description: 'Todo app. Built using React & Vannila CSS.',
                codeLink: 'https://github.com/nileshk16/reactjs-todolist',
                liveLink: 'https://todomakerapp.netlify.app/'
            },
            {
                image: websiteImg5,
                description: 'Booksky, a notes app. Built using HTML, CSS and javascript.',
                codeLink: 'https://github.com/nileshk16/Booksky-notes-app',
                liveLink: 'https://bookskynotes.netlify.app/'
            }
        ]
    };

    return (
        <section id='projects' className="flex flex-col py-20 px-5 justify-center bg-primary text-white">
            <div className="w-full">
                <div className="px-10 py-5">
                    <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold">Projects</h1>
                </div>
            </div>
            <div className="w-full px-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {config.projects.map((project, index) => (
                        <div key={index} className='relative bg-white text-black rounded-lg overflow-hidden shadow-lg group'>
                            <img className='h-[200px] w-full object-contain' src={project.image} alt={project.description} />
                            <div className='p-5'>
                                <p className='text-center mb-4'>{project.description}</p>
                                <div className='absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                    <a className='btn bg-secondary text-white px-4 py-2 m-2 rounded' target='_blank' rel="noopener noreferrer" href={project.codeLink}>View code</a>
                                    {project.liveLink && 
                                        <a className='btn bg-secondary text-white px-4 py-2 m-2 rounded' target='_blank' rel="noopener noreferrer" href={project.liveLink}>View live</a>
                                    }
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
