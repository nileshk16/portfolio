import AboutImg from '../assets/about.png';

export default function About () {
    const config  = {
        line1: `Hello, I'm Nileshkumar K, a dedicated web developer with a passion for crafting seamless and visually appealing user experiences. With a strong foundation in frontend development, I'm actively seeking opportunities for both internships and full-time positions. My daily routine revolves around honing my skills through hands-on practice, tackling diverse projects, and continuously enhancing my problem-solving abilities. I thrive on creating elegant and functional websites that marry aesthetics with functionality. If you're looking for a motivated and adaptable web developer, I'm excited to bring my expertise to your team.`,
        line2: 'I am proficient in Frontend skills like HTML, CSS, javascript, bootstrap, tailwind and react.',
    }

    return <section className='flex flex-col md:flex-row bg-secondary px-5' id='about'>
        <div className='py-5 md:w-1/2'>
            <img alt= "about" src={AboutImg} />
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
                <p className='pb-5'>{config.line1}</p>
                <p className='pb-5'>{config.line2}</p>
            </div>
        </div>
    </section>
}