import IAddressGeo from "./IAddressGeo"

export default interface IUserAddress {
    city: string
    geo: IAddressGeo
    street: string
    suite: string
    zipcode: string
}