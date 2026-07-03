import { IQueryParams } from "../interfaces/product.interface";

export const buildQuery = (collectionRef: any, params: IQueryParams): any => {
  let query = collectionRef;

  // Add parameters conditionally to the query object
  if (params.category) query = query.where("category", "==", params.category);
  if (params.subcategory)
    query = query.where("subcategory", "==", params.subcategory);
  if (params.jobType) query = query.where("jobType", "==", params.jobType);
  if (params.inStock !== undefined)
    query = query.where("inStock", "==", params.inStock);
  if (params.workType) query = query.where("workType", "==", params.workType);
  if (params.salaryRange)
    query = query.where("salaryRange", "==", params.salaryRange);
  if (params.experience)
    query = query.where("experience", "==", params.experience);
  if (params.qualification)
    query = query.where("qualification", "==", params.qualification);
  if (params.jobLocation)
    query = query.where("jobLocation", "==", params.jobLocation);

  return query;
};
