import mongoose, { Model, Schema } from "mongoose";
import { IContact } from "../interfaces/contactus_queries.interface";

const contactSchema = new Schema<IContact>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: {
    type: String,
    required: true,
    validate: {
      validator: function (v: string) {
        return /^\d+$/.test(v); // Ensures the phone number only contains digits
      },
      message: (props: { value: string }) => `${props.value} is not a valid phone number!`
    }
  },
  description: { type: String, required: true },
});

const ContactUsModel = mongoose.model<IContact>('Contact', contactSchema, 'contact-us-queries');

export default ContactUsModel;
