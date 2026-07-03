import { db } from "../Database";
import { ICandidateData } from "../interfaces/superAdmin.interface";

class SuperAdminServices {
  async getAllCandidatesDetails(): Promise<ICandidateData[]> {
    try {
      const snapshot = await db.collection("JobApplicants").get();
      return snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as any),
      })) as ICandidateData[];
    } catch (error) {
      console.error("Error fetching candidate details:", error);
      throw new Error("Unable to fetch candidate details");
    }
  }
}

export const superAdminService = new SuperAdminServices();
