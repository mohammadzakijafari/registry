import type { Params } from "react-router-dom";
import { getPackage } from "../../api/queries/getPackage";
import type { PackageDetails } from "../../api/types/packageDetails";


export interface DetailsLoaderResult {
    details: PackageDetails;
}

export interface LoaderArgs {
    params: Params;
}
export async function detailsLoader({ params }: LoaderArgs) {

    const { name } = params;
    if (!name) {
        throw Error("Name must be provided");
    }

    const details = await getPackage(name);
    return {
        details: details
    }
}