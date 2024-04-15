import IUserAddress from "./IUserAddress";
import IUserCompany from "./IUserCompany";

export default interface IUser {
    id: number;
    name: string;
    phone: string;
    username: string;
    website: string;
    email: string;
    address: IUserAddress
    company: IUserCompany
}