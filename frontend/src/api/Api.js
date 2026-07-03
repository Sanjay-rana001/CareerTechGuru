// const BASE_URL = 'http://localhost:5001/api/v1';
 const BASE_URL = 'https://api.careertechguru.com/api/v1';
// const BASE_URL = 'http://localhost:80/api/v1'

export const loginUserURL = `${BASE_URL}/auth/login-user`;
export const registerUserURL = `${BASE_URL}/auth/create-user`
export const verifyUserEmailId = `${BASE_URL}/auth/verify-email`;
export const forgotPasswordUrl = `${BASE_URL}/auth/forgot-password`
export const verifyOtpUrl = `${BASE_URL}/auth/verify-reset-password-otp`
export const resetPasswordUrl = `${BASE_URL}/auth/reset-password`;


export const ADD_CATEGORY_URL = `${BASE_URL}/category/add-category`;
export const fetchAllSectionsUrl = `${BASE_URL}/category/get-all-category`;
export const fetchSectionsByIdEndpoint = `${BASE_URL}/section/get-section/id`;


export const addJobUrl = `${BASE_URL}/job/add-job-application`;
export const fetchAllApplications = `${BASE_URL}/job/get-job-applications`;
export const fetchApplicationByJobId = `${BASE_URL}/job/get-job/job`;
export const fetchAllProductByAdminId = `${BASE_URL}/job/get-job-application/admin`;
export const fetchAllProductByUserId = `${BASE_URL}/product/get-product/sellerId`
export const fetchAllProductById = `${BASE_URL}/product/get-product/id`;
export const DELETE_APPLICATION_BY_ID = `${BASE_URL}/job/delete-job-application/id`;
export const SEARCH_APPLICATION_QUERY = `${BASE_URL}/job/search-product`;

//admin API
export const GET_ADMIN_DETAILS_BY_ADMINID_URL = `${BASE_URL}/admin/get-profile-details`
export const CREATE_ADMIN_PROFILE_URL = `${BASE_URL}/admin/create-profile`

export const createJobApplicationAPI = `${BASE_URL}/job/create/application`;
export const fetchJobApplicationByUserIdAPI = `${BASE_URL}/job/get-user/application`;
export const fetchJobApplicationBySellerIdAPI = `${BASE_URL}/job/get-job-application/admin`;
export const FETCH_JOB_COMPANY = `${BASE_URL}/job/get-unique-compnany`;
export const FETCH_JOB_SINGLE_DATA = `${BASE_URL}/job/get-unique-value`


export const deleteEmployeeEducationDetails = `${BASE_URL}/profile/delete-education-details`;
export const deleteEmployeeExperienceDetails = `${BASE_URL}/profile/delete-experience-details`;

export const UPDATE_PROFILE_URL = `${BASE_URL}/user/update-user-details`;
export const updateEmployeeExperienceDetails = `${BASE_URL}/profile/update-experience-details`;
export const updateEmployeeInfoDetails = `${BASE_URL}/profile/update-info-details`;
export const updateEmployeeAddressDetails = `${BASE_URL}/profile/update-address-details`;

export const ADD_EMPLOYEE_PROFILE_URL = `${BASE_URL}/user/create-user`;
export const GET_EMPLOYEE_DETAILS = `${BASE_URL}/user/get-user/user`;

export const SA_CANDIDATE_DATA_URL = `${BASE_URL}/manage/get-all-cadidates`
export const contactUsQueries = `${BASE_URL}/contact-us/contact-query`;

export const resumeUpload = `${BASE_URL}/upload/upload`;