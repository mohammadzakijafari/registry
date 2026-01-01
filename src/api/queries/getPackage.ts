
import type { PackageDetails } from "../types/packageDetails";


export async function getPackage(name: string): Promise<PackageDetails> {

    // ------------- getting data from outside api using async function ------------------
    const res = await fetch(`https://registry.npmjs.org/${name}`);
    const data = await res.json();
    // console.log(data)

    return data as PackageDetails;
}