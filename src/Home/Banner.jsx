import './Banner.css'
import video from './../assets/pexels-tony-schnagl-5527787 (2160p).mp4';
const Banner = ({searchValue,handlePopularSearch}) => {
    return (
        <div className='mb-20'>
           

<section className="relative h-[700px] flex flex-col items-center justify-center text-center text-white ">
    <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
        <video className="min-w-full min-h-full absolute object-cover"
            src={video}
            type="video/mp4" autoPlay muted loop></video>
    </div>
    <div className="video-content space-y-2 z-10">
    <div className='max-w-md mx-auto'>
    <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
        <div className="grid place-items-center h-full w-12 text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </div>

        <input
        onChange={searchValue}
        autoComplete='on'
        className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
        type="text"
        id="search"
        placeholder="Search something.." /> 
    </div>
</div>
        <h1 className="font-light text-6xl  text-gray-200 ">Populer Tags</h1>
       <div className='flex justify-evenly'>
       <button onClick={()=>handlePopularSearch('cooking')} className="btn">cooking</button>
       <button onClick={()=>handlePopularSearch('book')} className="btn">book</button>
       <button onClick={()=>handlePopularSearch('travel')} className="btn">travel</button>
       <button onClick={()=>handlePopularSearch('coding')} className="btn">coding</button>
       </div>
    </div>
</section>


        </div>
    );
};

export default Banner;