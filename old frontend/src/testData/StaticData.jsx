import { FaLaptopCode } from "react-icons/fa";
import { SiReadthedocs } from "react-icons/si";
import { ImHome3 } from "react-icons/im";
import { PiOfficeChairFill } from "react-icons/pi";
import { FaGoogleScholar } from "react-icons/fa6";
import { MdLockClock } from "react-icons/md";
import { BsPersonWalking } from "react-icons/bs";
import { BsBank } from "react-icons/bs";
import { FcOk } from "react-icons/fc";


export const jobTypeSections = [
    {
        icon : <FaLaptopCode />,
        title : "IT Software",
        description : "IT Software",
        color : "#e871b0",
        bgColor : "#e8f5ff"
    },
    {
        icon : <SiReadthedocs />,
        title : "Contingent Job",
        description : "Contingent Job",
        color : "#e27d3a",
        bgColor : "#fce9dd"
    },
    {
        icon : <ImHome3 />,
        title : "Work From Home",
        description : "Work From Home",
        color : "#40aae6",
        bgColor : "#e8f5ff"
    },
    {
        icon : <PiOfficeChairFill />,
        title : "Govt Jobs",
        description : "Govt Jobs",
        color : "#e871b0",
        bgColor : "#e8f5ff"
    },
    {
        icon : <FaGoogleScholar/>,
        title : "Internships",
        description : "Internships  ",
        color : "#8a66ea",
        bgColor : "#e7dffd"
    },
    {
        icon : <MdLockClock />,
        title : "Part Time Jobs",
        description : "Part Time Jobs",
        color : "#e27d3a",
        bgColor : "#fce9dd"
    },
    {
        icon : <BsPersonWalking />,
        title : "Walk-in Jobs",
        description : "Walk-in Jobs",
        color : "#24c9c8",
        bgColor : "#d9ffff",
    },
    {
        icon : <BsBank />,
        title : "Bank Jobs",
        description : "Bank Jobs",
        color : "#e975b3",
        bgColor : "#ffeaf6",
    },
];

export const salaryRange = [
    {
        id : 1,
        range : "5k - 10k"
    },
    {
        id : 2,
        range : "15k - 25k"
    },
    {
        id : 3,
        range : "4 lpa - 6 lpa"
    },
    {
        id : 4,
        range : "8 lpa - 10 lpa"
    },
    {
        id : 5,
        range : "Not disclosed"
    },
];

export const experienceLevel = [
    {
        id : 1,
        title : "Fresher"
    },
    {
        id : 2,
        title : "1 - 2 years"
    },
    {
        id : 3,
        title : "2 - 3 years"
    },
    {
        id : 4,
        title : "4 - 6 years"
    },
    {
        id : 5,
        title : "7 - 8 years"
    },
]
export const jobType = [
    {
        id : 1,
        title : "Work from home"
    },
    {
        id : 2,
        title : "Work from office"
    },
    {
        id : 3,
        title : "Hybrid"
    },
]

export const locations = [
    {
        title : "Delhi/NCR"
    },
    {
        title : "Noida"
    },
    {
        title : "Faridabad"
    },
    {
        title : "Gurgaon"
    },
    {
        title : "Pune"
    },
    {
        title : "Banglore"
    },
];

export const companyList = [
    {
        src : 'https://shorturl.at/HxaAY',
        alt : 'sdfdssd'
    },
    {
        src : 'https://shorturl.at/JVjhp',
        alt : 'sdfdssd'
    },
    {
        src : 'https://shorturl.at/tdued',
        alt : 'sdfdssd'
    },
    {
        src : 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Zomato_Logo.svg/2560px-Zomato_Logo.svg.png',
        alt : 'sdfdssd'
    },
    {
        src : 'https://shorturl.at/fImAu',
        alt : 'sdfdssd'
    },
    {
        src : 'https://shorturl.at/h0Vwc',
        alt : 'sdfdssd'
    },
    {
        src : 'https://rb.gy/tog9h5',
        alt : 'sdfdssd'
    },
]
export const featureListOne =[
    {
        icon : <FcOk/>,
        description : "Get Latest Job alerts"
    },
    {
        icon : <FcOk/>,
        description : "AI Resume builder"
    },
    {
        icon : <FcOk/>,
        description : "Easy to apply for job"
    },
    {
        icon : <FcOk/>,
        description : "And much more..."
    },
]

export const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
};

export const employeeRoutes = [
    {
      name : "profile",
      path : "/view-profile"
    },
    {
      name : "Applied jobs",
      path : "/view-profile"
    },
  ]