import React, { useEffect, useState } from 'react';
import Marquee from "react-fast-marquee";
import { useJobContext } from '../context';
import { FcOk } from "react-icons/fc";
import { IoRibbonSharp } from "react-icons/io5";
import { FaHandHoldingUsd, FaUsers } from "react-icons/fa";
import { GiBrain, GiElvenCastle, GiPuzzle } from "react-icons/gi";
import { FiMessageSquare } from "react-icons/fi";
import { MdCelebration } from 'react-icons/md';
import banner from '../assets/logo.jpeg';

const Home = () => {
  const { getCompanyList, getJobSingleDetail } = useJobContext();
  const [companyListDetails, setCompanyListDetails] = useState([]);
  const [jobLocations, setJobLocations] = useState([]);

  const fetchListedCompany = async () => {
    try {
      const result = await getCompanyList();
      setCompanyListDetails(result || []);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchJobLocations = async () => {
    try {
      const result = await getJobSingleDetail();
      setJobLocations(result?.data);
    } catch (error) {
      console.error('Error fetching job locations:', error);
    }
  };

  useEffect(() => {
    fetchListedCompany();
    fetchJobLocations();
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm font-semibold text-[#2563EB] tracking-wider uppercase mb-3">
            ⭐ Find Jobs, Hire Talent, Succeed Together
          </p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
            The Perfect Match for <span className="text-[#2563EB]">Employers</span> and <span className="text-[#2563EB]">Job Seekers</span>
          </h1>
          <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Welcome to Career tech guru, the ultimate destination for employers and job seekers. Whether you're looking to hire top talent or searching for your dream job, we provide a seamless and efficient platform to connect the right people with the right opportunities.
          </p>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img 
              src="https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="What we do" 
              className="w-full h-[350px] object-cover rounded-2xl shadow-md border border-slate-100" 
            />
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <h4 className="text-xs font-semibold text-[#2563EB] tracking-wider uppercase">
              What we do
            </h4>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-snug">
              Career Techguru matches awesome people with <span className="text-[#2563EB]">awesome jobs.</span>
            </h2>
            <ul className="space-y-4 p-0 list-none">
              <li className="flex gap-3 items-start text-sm md:text-base text-slate-600">
                <span className="mt-1 flex-shrink-0"><FcOk size={18} /></span>
                <span>We find talented professionals around the world (7 million and counting).</span>
              </li>
              <li className="flex gap-3 items-start text-sm md:text-base text-slate-600">
                <span className="mt-1 flex-shrink-0"><FcOk size={18} /></span>
                <span>Empower them to prove their aptitude, abilities & attitude are world-class.</span>
              </li>
              <li className="flex gap-3 items-start text-sm md:text-base text-slate-600">
                <span className="mt-1 flex-shrink-0"><FcOk size={18} /></span>
                <span>Enable companies to recruit the best 1% for premium remote full-time jobs.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-[#2563EB] text-white my-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-10 pb-6 border-b border-white/20 flex-wrap gap-4">
            <span className="text-xs font-bold tracking-widest uppercase text-blue-100">What we do</span>
            <span className="text-xs font-bold tracking-widest uppercase text-blue-100">our vision</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-white text-center md:text-left">
            Recruitment sucks. So we’re fixing it.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 space-y-4">
              <div className="flex items-center gap-3 text-white">
                <span className="text-2xl"><IoRibbonSharp /></span>
                <h4 className="text-lg font-semibold">The Olympics of work</h4>
              </div>
              <p className="text-sm text-blue-50 leading-relaxed">
                It’s super hard to qualify—extreme quality standards ensure every single team member is at the top of their game.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 space-y-4">
              <div className="flex items-center gap-3 text-white">
                <span className="text-2xl"><FaHandHoldingUsd /></span>
                <h4 className="text-lg font-semibold">Premium pay for premium talent</h4>
              </div>
              <p className="text-sm text-blue-50 leading-relaxed">
                Over 50% of new hires double or triple their previous pay. Why? Because that’s what the best person in the world is worth.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 space-y-4">
              <div className="flex items-center gap-3 text-white">
                <span className="text-2xl"><IoRibbonSharp /></span>
                <h4 className="text-lg font-semibold">Shortlist by skills, not bias</h4>
              </div>
              <p className="text-sm text-blue-50 leading-relaxed">
                We don’t care where you went to school, what color your hair is, or whether we can pronounce your name. Just prove you’ve got the skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Top Companies Marquee */}
      {companyListDetails && companyListDetails.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center md:text-left">
            <h3 className="text-xs font-semibold text-[#2563EB] tracking-wider uppercase mb-2">
              Top companies hiring from us
            </h3>
            <p className="text-lg text-slate-500">
              To find the best person in the world, not the best person in their zipcode.
            </p>
          </div>
          <div className="py-4 border-y border-slate-100 bg-slate-50/50">
            <Marquee speed={40} gradient={false}>
              <div className="flex gap-8 items-center py-2 px-4">
                {companyListDetails.map((items, idx) => (
                  <div key={items.id || idx} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm w-36 h-20 flex items-center justify-center">
                    <img src={items?.profilePicture} alt="Company Logo" className="max-h-full max-w-full object-contain" />
                  </div>
                ))}
              </div>
            </Marquee>
          </div>
        </section>
      )}

      {/* How it Works Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 mb-14 text-center md:text-left">
            <h4 className="text-xs font-semibold text-[#2563EB] tracking-wider uppercase">
              How it works ?
            </h4>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Applying for a role? Here’s what to expect.
            </h2>
            <p className="text-sm text-slate-400 max-w-2xl">
              We’ve curated a series of steps that take the guesswork (and cognitive bias) out of recruiting the best person.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
            {/* Step 1 */}
            <div className="bg-slate-800/50 border border-slate-800 p-6 rounded-2xl flex flex-col justify-between">
              <div className="text-3xl text-blue-400 mb-6"><GiBrain /></div>
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-1">step 1</p>
                <h5 className="text-sm font-semibold text-white">Pass Cognitive Aptitude Test.</h5>
              </div>
            </div>
            {/* Step 2 */}
            <div className="bg-slate-800/50 border border-slate-800 p-6 rounded-2xl flex flex-col justify-between">
              <div className="text-3xl text-blue-400 mb-6"><FiMessageSquare /></div>
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-1">step 2</p>
                <h5 className="text-sm font-semibold text-white">Pass English Proficiency Test.</h5>
              </div>
            </div>
            {/* Step 3 */}
            <div className="bg-slate-800/50 border border-slate-800 p-6 rounded-2xl flex flex-col justify-between">
              <div className="text-3xl text-blue-400 mb-6"><GiPuzzle /></div>
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-1">step 3</p>
                <h5 className="text-sm font-semibold text-white">Prove Real-World Job Skills.</h5>
              </div>
            </div>
            {/* Step 4 */}
            <div className="bg-slate-800/50 border border-slate-800 p-6 rounded-2xl flex flex-col justify-between">
              <div className="text-3xl text-blue-400 mb-6"><FaUsers /></div>
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-1">step 4</p>
                <h5 className="text-sm font-semibold text-white">Ace An Interview Or Two.</h5>
              </div>
            </div>
            {/* Step 5 */}
            <div className="bg-slate-800/50 border border-slate-800 p-6 rounded-2xl flex flex-col justify-between">
              <div className="text-3xl text-blue-400 mb-6"><GiElvenCastle /></div>
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-1">step 5</p>
                <h5 className="text-sm font-semibold text-white">Accept Job Offer.</h5>
              </div>
            </div>
            {/* Step 6 */}
            <div className="bg-slate-800/50 border border-slate-800 p-6 rounded-2xl flex flex-col justify-between">
              <div className="text-3xl text-blue-400 mb-6"><MdCelebration /></div>
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-1">step 6</p>
                <h5 className="text-sm font-semibold text-white">Celebrate!</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Marquee */}
      {jobLocations && jobLocations.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center md:text-left">
            <h3 className="text-xs font-semibold text-[#2563EB] tracking-wider uppercase mb-2">
              Find nearest jobs from you
            </h3>
            <p className="text-lg text-slate-500">
              To find the best location near to you.
            </p>
          </div>
          <div className="py-2 border-y border-slate-100 bg-slate-50/50">
            <Marquee speed={30} gradient={false}>
              <div className="flex gap-6 py-2 px-4">
                {jobLocations.map((item, idx) => (
                  <div key={idx} className="bg-white px-6 py-4 rounded-xl border border-slate-200 shadow-sm w-44 text-center">
                    <span className="font-medium text-slate-700 capitalize text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </Marquee>
          </div>
        </section>
      )}

      {/* About Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-100 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <img src={banner} alt="About logo" className="max-h-60 rounded-xl object-contain shadow-sm border border-slate-100 p-4" />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-900">About Career Techguru</h2>
            <p className="text-slate-500 leading-relaxed text-sm md:text-base">
              Career Techguru is a job seeker and job advertising tool created by the developer team at ESPS Pvt Ltd. CTG uses web scraping technology to actively interact with third-party job posting websites and apply to many jobs.
            </p>
            <button className="bg-[#2563EB] hover:bg-blue-700 text-white font-medium text-sm px-6 py-3 rounded-lg transition-colors border-0 shadow-sm">
              Explore more
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;