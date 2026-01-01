import type { PackageSummary } from "../types/packageSummary";

interface searchResponse {
    objects: {
        package: {
            name: string,
            description: string,
            version: string,
            keywords: string[],
        }
    }[]
}
// ----------- making a async request to get data from outside api ------------
export async function searchPackages(term: string): Promise<PackageSummary[]> {

    const res = await fetch(
        `https://registry.npmjs.org/-/v1/search?text=${term}`
    );

    const data: searchResponse = await res.json();
    const packages: PackageSummary[] = data.objects.map(({ package: { name, description, version, keywords } }) => {
        return {
            name,
            description,
            version,
            keywords,
        };
    });
    return packages
}