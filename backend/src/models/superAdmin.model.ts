import { DataTypes, Model } from 'sequelize';
import { ICandidateData } from '../interfaces/superAdmin.interface';
import { adminSequelize } from '../connections/admin.connection';

class AdminData extends Model<ICandidateData> implements ICandidateData {
  public id!: number;
  public timestamp!: string;
  public first_name!: string;
  public last_name!: string;
  public email!: string;
  public contact_number!: string;
  public current_location!: string;
  public current_company_name!: string;
  public interviewing_other_companies!: string;
  public willing_to_relocate!: string;
  public can_attend_walk_in_interview!: string;
  public current_salary!: string;
  public expected_salary!: string;
  public interviewed_at_esps_before!: string;
  public applied_at_esps_before!: string;
  public bound_by_current_company!: string;
  public notice_period!: string;
  public can_handle_multiple_work!: string;
  public handle_work_pressure!: string;
  public technical_skills_rating!: string;
  public communication_skills_rating!: string;
  public short_description!: string;
}

AdminData.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  timestamp: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      isEmail: true,
    },
  },
  contact_number: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  current_location: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  current_company_name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  interviewing_other_companies: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  willing_to_relocate: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  can_attend_walk_in_interview: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  current_salary: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  expected_salary: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  interviewed_at_esps_before: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  applied_at_esps_before: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  bound_by_current_company: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  notice_period: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  can_handle_multiple_work: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  handle_work_pressure: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  technical_skills_rating: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      isInt: true,
      min: 1,
      max: 10,
    },
  },
  communication_skills_rating: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  short_description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
}, {
  tableName: 'job_applicants',
  timestamps: false,
  sequelize: adminSequelize, // Pass the `sequelize` instance here
});

export default AdminData;
