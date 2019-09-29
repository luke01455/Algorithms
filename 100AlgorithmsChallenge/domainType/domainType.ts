function domainType(domains: string[]): string[] {
const returnArr = []
    for(let i = 0; i < domains.length; i++) {
        if(domains[i].includes(".com")) {
            returnArr.push("commercial");
        }
        else if (domains[i].includes(".org")) {
            returnArr.push("orgnisation")
        }
        else if(domains[i].includes(".net")) {
            returnArr.push("network")
        }
        else if(domains[i].includes(".info")) {
            returnArr.push("information")
        } else {
            returnArr.push("unknown")
        }
    }

    return returnArr
}

console.log(domainType(["en.wiki.org", "codefights.com", "happy.net", "code.info"]));