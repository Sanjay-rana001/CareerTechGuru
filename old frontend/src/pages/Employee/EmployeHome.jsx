import React, { useEffect, useRef, useState } from 'react'
import { JobCardTwo } from '../../shared'
import { useEmployeeContext, useSearchContext, useSectionContext } from '../../context';
import { filterByCategory, filterByLatestPost } from '../../utils/filters/Filters';
import { Link } from 'react-router-dom';
import JobsByLocation from './JobsByLocation';
import { Search } from '../../components';
import '../../../src/App.css';
import MediaQuery from 'react-responsive';


const EmployeHome = () => {
    const user = JSON.parse(sessionStorage.getItem('data'));
    const {searchResult} = useSearchContext();
    const { getAllSections } = useSectionContext();
    const { getEmployeeProfile } = useEmployeeContext();
    const [sectionData, setSectionData] = useState([]);
    const [profileData, setProfileData] = useState(null);
    const [filterCategory, setFilterCategory] = useState([])
    // const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const scrollRef = useRef(null);

    const fetchUserProfileDetail = async () => {
        try {
            const result = await getEmployeeProfile(user?.email);
            setProfileData(result?.data?.data);
            //   const category= result?.data?.data?.interests?.category;
            //   console.log("this is int",category)
        } catch (error) {
            console.error('Error fetching user profile:', error);
        } finally {
            setLoading(false);
        }
    };

    const getAllJobCategories = async () => {
        try {
            const data = await getAllSections();
            if (data && data?.data.length > 0) {
                setSectionData(data?.data);
                setLoading(false);
            } else {
                setLoading(false);
            }
        } catch (error) {
            console.error(error);
        }
    }

    const filterCategoryByName = async () => {
        try {
            const categoryNameList = profileData?.interests?.category;
            if (categoryNameList && categoryNameList.length > 0) {
                const categoryIds = [];
                categoryNameList.forEach(categoryName => {
                    const foundCategory = sectionData.find(category => category.title === categoryName);
                    if (foundCategory) {
                        categoryIds.push(foundCategory._id);
                    }
                });
                setFilterCategory(categoryIds)
                return categoryIds;
            }
        } catch (error) {
            console.error("Error filtering categories by name:", error);
        }
    };


    useEffect(() => {
        getAllJobCategories(); // Only fetch sections on component mount
    }, []); // No dependencies, runs once
    
    useEffect(() => {
        if (sectionData.length > 0) {
            fetchUserProfileDetail();
            filterCategoryByName();
        }
    }, [sectionData]); // Runs only when sectionData is fetched and available
    

    const slideRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
        }
    };


    return (
        <>
             <div className="container-fluid bg-light">
                <div className="container-sm">
                    <div className="row py-3">
                        <div className="col-lg baner-box rounded shadow-md flex flex-col justify-center">
                            <div className="box" class="dream">
                                <h1 className="display-5 fw-bold ms-4">
                                    FIND YOUR DREAM JOB!
                                </h1>
                                <p className='font-semibold text-dark ms-4'>Increase your chance to get call from recruiters with Career Techguru</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-center py-3 mb-3">
                        <div className="rounded py-4 ">
                            <h3 className='h3 text-prime'>Find a job that you deserve</h3>
                            <Search categories={sectionData} />
                        </div>
                    </div>
                    <p className="hr bg-secondary my-3"></p>
                    <div className="row">
                        <div className="col-lg-8">
                                <h4 className="h4 text-prime capitalize">Current Openings</h4>
                                <JobCardTwo data={filterByLatestPost(searchResult)} />
                            <div className="col py-3">
                                <h4 className="h4 text-prime capitalize">Find Jobs According to Categories</h4>
                                <div className="flex flex-wrap gap-3">
                                    {sectionData?.map((category, idx) => (
                                        <Link className='nav-link bg-slate-100 px-3 py-2 rounded-pill ' key={idx}>{category?.title}</Link>
                                    ))}
                                </div>
                            </div>
                            <div className="my-4">
                                <h4 className="h4 text-prime capitalize my-4">Find Jobs According to your profile</h4>
                                {filterCategory.map((items, idx) => (
                                    <JobCardTwo data={filterByCategory(searchResult, items)} />
                                ))}
                            </div>
                            <div className="row my-4 rounded bg-dark">
                                <JobsByLocation data={searchResult} />
                            </div>
                        </div>
                        <div className="col-lg-3 rounded">
                            <div className="form-group flex flex-col gap-3 bg-light my-3 py-3 px-2 rounded">
                                <h4 className='h4 text-prime'>Enroll in our courses</h4>
                                <input type="text" className="form-control" placeholder='enter your email' />
                                <button className='btn bg-prime text-light'>Enroll now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
        // <>
        //     <div className="border-grey z-40 py-2 hidden w-full border border-x-0 border-b-0 sm:flex">
        //         <div className="justify-left md:justify-left container mx-auto flex px-6 lg:justify-center">
        //             <span onClick={slideLeft} className="flex w-auto cursor-pointer self-center pr-1">
        //                 <FaAngleLeft size={20} />
        //             </span>
        //             <div
        //                 ref={scrollRef}
        //                 className="relative inline-block h-full w-full items-center gap-6 overflow-x-auto scroll-smooth whitespace-nowrap py-2 text-sm font-medium lg:flex lg:justify-between no-scrollbar"
        //             >
        //                 {sectionData?.map((category, idx) => (
        //                     <span key={idx} className="mx-4 cursor-pointer first:ml-0 hover:text-sky-400 lg:mx-0">
        //                         <Link>{category?.title}</Link>
        //                     </span>
        //                 ))}
        //             </div>
        //             <span onClick={slideRight} className="flex w-auto cursor-pointer self-center pl-1">
        //                 <FaAngleRight size={20} />
        //             </span>
        //         </div>
        //     </div>
        //     <div className="container-fluid">
        //         <div className="container-sm py-4 bg-primary-subtle rounded my-3">
        //             <div className="row gap-3 justify-center items-center py-4">
        //                 <div className="col-lg-10">
        //                     <p className='text-center text-dark text-[13px] font-semibold'> &#11088; Find Jobs, Hire Talent, Succeed Together</p>
        //                     <h1 className='display-2 text-gradient font-semibold text-center'>The Perfect Match for Employers and Job Seekers</h1>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="container-sm">
        //             <div className="row py-6">
        //                 <div className="col-lg py-4">
        //                     <h4 className='uppercase flex flex-col items-center text-2xl font-semibold'><span>current openings</span> <Link className='text-gradient'>see more</Link></h4>
        //                     <p>Here are a few of the jobs that our clients are currently hiring from Career Techguru talent pool.</p>
        //                 </div>
        //                 <div className="row">
        //                     <JobCardTwo data={filterByLatestPost(data)} />
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     {filterCategory?.length > 0 && (
        //         <div className="container-fluid">
        //             <div className="container-sm">
        //                 <div className="col-lg py-4">
        //                     <h4 className='uppercase font-bold flex text-xl items-center justify-between text-gradient'>
        //                         <span>Jobs according to your profile</span>
        //                         <Link className='text-gradient'>see more</Link>
        //                     </h4>
        //                     <p>Here are a few of the jobs that matches your skills and interests at Career Techguru talent pool.</p>
        //                 </div>
        //             </div>
        //             <div className=" z-40 py-2 hidden w-full sm:flex">
        //                 <div className="justify-left md:justify-left container mx-auto flex px-6 lg:justify-center">
        //                     <span onClick={slideLeft} className="flex w-auto cursor-pointer self-center pr-1">
        //                         <FaAngleLeft size={20} />
        //                     </span>
        //                     <div
        //                         ref={scrollRef}
        //                         className="relative inline-block h-full w-full items-center gap-4 overflow-x-auto scroll-smooth whitespace-nowrap py-2 text-sm font-medium lg:flex lg:justify-between no-scrollbar"
        //                     >
        // {filterCategory.map((items, idx) => (
        //     <JobCardTwo data={filterByCategory(data, items)} />
        // ))}
        //                     </div>
        //                     <span onClick={slideRight} className="flex w-auto cursor-pointer self-center pl-1">
        //                         <FaAngleRight size={20} />
        //                     </span>
        //                 </div>
        //             </div>
        //         </div>
        //     )}
        //     <JobsByLocation data={data} />
        //     <div className="container-fluid">
        //         <div className="container-sm">
        //             <div className="row">
        //                 <div className="col-lg">
        //                     <h3 className='uppercase font-bold flex text-xl items-center justify-between text-gradient'>Find a job that you deserve</h3>
        //                     <Search />
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </>
    )
}

export default EmployeHome