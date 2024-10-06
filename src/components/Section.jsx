
const Section = ({title, content, id}) => {
    return (
        <section className='px-6 py-10' id={id}>
            <div className='w-fit'>
                <h1 className='text-4xl md:text-6xl font-medium tracking-tight mb-10'>
                    {title}
                </h1>
                <div className='h-1 w-[100%] mb-8 bg-white'/>
            </div>
            {content}
        </section>
    );
};

export default Section;