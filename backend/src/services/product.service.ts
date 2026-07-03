import {
  ICompanyDetails,
  IProduct,
  IQueryParams,
} from "../interfaces/product.interface";
import { db } from "../Database";
import { buildQuery } from "../utils/product.utils";

class ProductService {
  async createJobApplication(data: IProduct): Promise<IProduct> {
    try {
      const docRef = await db.collection("Product").add(data as any);
      return { _id: docRef.id, ...data };
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getAllApplications(): Promise<IProduct[]> {
    try {
      const snapshot = await db.collection("Product").get();
      return snapshot.docs.map((doc) => ({
        _id: doc.id,
        ...(doc.data() as any),
      })) as IProduct[];
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  }

  async getJobApplicationsById(adminId: string): Promise<IProduct[]> {
    try {
      const snapshot = await db
        .collection("Product")
        .where("adminId", "==", adminId)
        .get();
      return snapshot.docs.map((doc) => ({
        _id: doc.id,
        ...(doc.data() as any),
      })) as IProduct[];
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  }

  async getJobApplicationByJobId(id: string): Promise<IProduct | null> {
    try {
      const docRef = await db.collection("Product").doc(id).get();
      if (!docRef.exists) return null;
      return { _id: docRef.id, ...(docRef.data() as any) } as IProduct;
    } catch (error) {
      console.error("Error fetching product:", error);
      throw error;
    }
  }

  async useSearchApplicationQuery(
    queryParams: IQueryParams,
  ): Promise<IProduct[]> {
    try {
      const collectionRef = db.collection("Product");
      const query = buildQuery(collectionRef, queryParams);
      const snapshot = await query.get();
      return snapshot.docs.map((doc: any) => ({
        _id: doc.id,
        ...(doc.data() as any),
      })) as IProduct[];
    } catch (error) {
      console.error("Error in useSearchApplicationQuery:", error);
      throw new Error("Error retrieving products");
    }
  }

  async deleteProductById(id: string): Promise<string> {
    try {
      const docRef = db.collection("Product").doc(id);
      const doc = await docRef.get();
      if (!doc.exists) {
        throw new Error(`Product with id ${id} not found`);
      }
      await docRef.delete();
      return "Product deleted successfully";
    } catch (error) {
      throw new Error(`Error deleting product: ${error}`);
    }
  }

  async getAllUniqueCities(): Promise<string[]> {
    try {
      const snapshot = await db.collection("Product").get();
      const cities = new Set<string>();
      snapshot.docs.forEach((doc) => {
        const data = doc.data() as any;
        if (data.jobLocation) cities.add(data.jobLocation);
      });
      return Array.from(cities);
    } catch (error) {
      console.error("Error fetching unique cities:", error);
      throw error;
    }
  }

  async getJobLocation(): Promise<string[]> {
    return this.getAllUniqueCities();
  }
  async getUniqueCompanyDetails(): Promise<ICompanyDetails[]> {
    try {
      const snapshot = await db.collection("Product").get();
      const companyMap = new Map<string, ICompanyDetails>();

      snapshot.docs.forEach((doc) => {
        const data = doc.data() as any;
        if (data.companyName && !companyMap.has(data.companyName)) {
          companyMap.set(data.companyName, {
            companyName: data.companyName,
            profilePicture: data.profilePicture,
          });
        }
      });

      return Array.from(companyMap.values());
    } catch (error) {
      console.error("Error fetching unique company details:", error);
      throw new Error("Error retrieving unique company details");
    }
  }
}

export const productServices = new ProductService();
