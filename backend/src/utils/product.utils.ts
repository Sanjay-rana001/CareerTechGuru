import { IQueryParams } from "../interfaces/product.interface";

export const buildQuery = (params: IQueryParams): any => {
    const query: any = {};

    // Add parameters conditionally to the query object
    if (params.id) query._id = params.id;
    if (params.category) query.category = params.category;
    if (params.subcategory) query.subcategory = params.subcategory;
    if (params.jobType) query.jobType = params.jobType;
    if (params.inStock !== undefined) query.inStock = params.inStock;
    if (params.workType) query.workType = params.workType;
    if (params.salaryRange) query.salaryRange = params.salaryRange;
    if (params.experience) query.experience = params.experience;
    if (params.qualification) query.qualification = params.qualification;
    if (params.jobLocation) query.jobLocation = params.jobLocation;

    // Add any additional dynamic query parameters
    for (const key in params) {
        if (!query.hasOwnProperty(key) && params[key] !== undefined) {
            query[key] = params[key];
        }
    }

    return query;
};
