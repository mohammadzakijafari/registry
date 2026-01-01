import { searchPackages } from "../../api/queries/searchPackages";
import type { PackageSummary } from "../../api/types/packageSummary";

// ------------- Implementing search Result to custom data type --------------- 
export interface searchLoaderResult {
    searchResult: PackageSummary[];
}

export async function searchLoader({ request }: { request: Request }) {
    // ------------ getting search params from URL using URL technique ----------------
    const { searchParams } = new URL(request.url);
    const term = searchParams.get('term');

    if (!term) {
        throw Error("Search Term must be provided");
    }

    const result = await searchPackages(term);
    return {
        searchResult: result
    }

}