export interface LocationData {
  [country: string]: {
    [state: string]: {
      [city: string]: string[] | string;
    };
  };
}

// Organized location data
export const locationData: LocationData = {
  India: {
    Assam: {
      Guwahati:
        "/software-qa-testing-services-in-guwahati",
    },
    Bihar: {
      Patna: "/software-qa-testing-services-in-patna",
    },
    "Chandigarh (Union Territory)": {
      Chandigarh:
        "/software-qa-testing-services-in-chandigarh",
    },
    Chhattisgarh: {
      Raipur:
        "/software-qa-testing-services-in-raipur",
    },
    "Delhi (Union Territory)": {
      Delhi: "/software-qa-testing-services-in-delhi",
    },
    Goa: {
      Goa: "/software-qa-testing-services-in-goa",
    },
    Gujarat: {
      Ahmedabad:
        "/software-qa-testing-services-in-ahmedabad",
      Gandhinagar:
        "/software-qa-testing-services-in-gandhinagar",
      Rajkot:
        "/software-qa-testing-services-in-rajkot",
      Surat: "/software-qa-testing-services-in-surat",
      Vadodara:
        "/software-qa-testing-services-in-vadodara",
    },
    Haryana: {
      Faridabad:
        "/software-qa-testing-services-in-faridabad",
      Gurgaon:
        "/software-qa-testing-services-in-gurgaon",
    },
    "Himachal Pradesh": {
      Shimla:
        "/software-qa-testing-services-in-shimla",
    },
    "Jammu & Kashmir": {
      Jammu: "/software-qa-testing-services-in-jammu",
    },
    Jharkhand: {
      Jamshedpur:
        "/software-qa-testing-services-in-jamshedpur",
      Ranchi:
        "/software-qa-testing-services-in-ranchi",
    },
    Karnataka: {
      // The page lives at .../-in-bangalore. This entry pointed at
      // .../-in-bengaluru, which only exists as a 308 in
      // src/lib/seo/redirect-map.ts — so every link here cost a redirect hop
      // and Bangalore (46 GSC clicks, the brief's second-highest city) ended up
      // with one real inbound link instead of two.
      Bengaluru:
        "/software-qa-testing-services-in-bangalore",
      Mangalore:
        "/software-qa-testing-services-in-mangalore",
    },
    Kerala: {
      Ernakulam:
        "/software-qa-testing-services-in-ernakulam",
      Kochi: "/software-qa-testing-services-in-kochi",
      Trivandrum:
        "/software-qa-testing-services-in-trivandrum",
    },
    "Madhya Pradesh": {
      Bhopal:
        "/software-qa-testing-services-in-bhopal",
      Gwalior:
        "/software-qa-testing-services-in-gwalior",
      Indore:
        "/software-qa-testing-services-in-indore",
    },
    Maharashtra: {

      Mumbai: "/software-qa-testing-services-in-mumbai",
      Nagpur: "/software-qa-testing-services-in-nagpur",
      Nashik: "/software-qa-testing-services-in-nashik",
      Pune: "/software-qa-testing-services-in-pune",

    },
    Odisha: {
      Bhubaneswar:
        "/software-qa-testing-services-in-bhubaneswar",
    },
    Punjab: {
      Amritsar:
        "/software-qa-testing-services-in-amritsar",
      Jalandhar:
        "/software-qa-testing-services-in-jalandhar",
      Ludhiana:
        "/software-qa-testing-services-in-ludhiana",
    },
    Rajasthan: {
      Ajmer: "/software-qa-testing-services-in-ajmer",
      Jaipur:
        "/software-qa-testing-services-in-jaipur",
      Jodhpur:
        "/software-qa-testing-services-in-jodhpur",
      Udaipur:
        "/software-qa-testing-services-in-udaipur",
    },
    "Tamil Nadu": {
      Chennai:
        "/software-qa-testing-services-in-chennai",
      Coimbatore:
        "/software-qa-testing-services-in-coimbatore",
      Madurai:
        "/software-qa-testing-services-in-madurai",
    },
    Telangana: {
      Hyderabad:
        "/software-qa-testing-services-in-hyderabad",
      Secunderabad:
        "/software-qa-testing-services-in-secunderabad",
    },
    "Uttar Pradesh": {
      Agra: "/software-qa-testing-services-in-agra",
      Ghaziabad:
        "/software-qa-testing-services-in-ghaziabad",
      Gorakhpur:
        "/software-qa-testing-services-in-gorakhpur",
      "Greater Noida":
        "/software-qa-testing-services-in-greater-noida",
      Kanpur:
        "/software-qa-testing-services-in-kanpur",
      Lucknow:
        "/software-qa-testing-services-in-lucknow",
      Meerut:
        "/software-qa-testing-services-in-meerut",
      Moradabad:
        "/software-qa-testing-services-in-moradabad",
      Noida: "/software-qa-testing-services-in-noida",
    },
    Uttarakhand: {
      Dehradun:
        "/software-qa-testing-services-in-dehradun",
    },
    "West Bengal": {
      Kolkata:
        "/software-qa-testing-services-in-kolkata",
    },
  },
  "United Arab Emirates": {
    UAE: {
      "Abu Dhabi": "/software-qa-testing-services-in-abu-dhabi",
      Ajman: "/software-qa-testing-services-in-ajman",
      "Al Ain":
        "/software-qa-testing-services-in-al-ain",
      "Al Dhannah":
        "/software-qa-testing-services-in-al-dhannah",
      "Al Jazirah Al Hamra":
        "/software-qa-testing-services-in-al-jazirah-al-hamra",
      "Ar Rams":
        "/software-qa-testing-services-in-ar-rams",
      // "Dibba Al Fujairah" removed: there is no such page and no redirect for
      // it, so the link was a hard 404. It was invisible while the city list
      // was behind a collapsed accordion; the always-rendered index on
      // /locations-we-serve would have published it to crawlers.
      "Dibba Al Hisn":
        "/software-qa-testing-services-in-dibba-al-hisn",
      Dhaid: "/software-qa-testing-services-in-dhaid",
      Fujairah:
        "/software-qa-testing-services-in-fujairah",
      Ghayathi:
        "/software-qa-testing-services-in-ghayathi",
      Hatta: "/software-qa-testing-services-in-hatta",
      "Jebel Ali":
        "/software-qa-testing-services-in-jebel-ali",
      Kalba: "/software-qa-testing-services-in-kalba",
      "Liwa Oasis":
        "/software-qa-testing-services-in-liwa-oasis",
      // "Madinat Zayed" removed: no page either, and its redirect points back
      // to /locations-we-serve, so linking it from this very page was a loop.
      "Ras Al Khaimah":
        "/software-qa-testing-services-in-ras-al-khaimah",
      Sharjah:
        "/software-qa-testing-services-in-sharjah",
      "Umm Al Quwain":
        "/software-qa-testing-services-in-umm-al-quwain",

    },
  },
  Canada: {
    Ontario: {
      Toronto: "/software-qa-testing-services-in-toronto",
    },
    "British Columbia": {
      Vancouver: "/software-qa-testing-services-in-vancouver",
    },
    Quebec: {
      Montreal: "/software-qa-testing-services-in-montreal",
    },
  },
  US: {
    "New York": {
      "New York": "/software-qa-testing-services-in-new-york",
    },
    California: {
      "Los Angeles": "/software-qa-testing-services-in-los-angeles",
    },
    Illinois: {
      Chicago: "/software-qa-testing-services-in-chicago",
    },
  },
  UK: {
    England: {
      London: "/software-qa-testing-services-in-london",
      Manchester: "/software-qa-testing-services-in-manchester",
    },
    Scotland: {
      Edinburgh: "/software-qa-testing-services-in-edinburgh",
    },
  },
  Australia: {
    "New South Wales": {
      Sydney: "/software-qa-testing-services-in-sydney",
    },
    Victoria: {
      Melbourne: "/software-qa-testing-services-in-melbourne",
    },
    Queensland: {
      Brisbane: "/software-qa-testing-services-in-brisbane",
    },
  },
  "New Zealand": {
    "Auckland Region": {
      Auckland: "/software-qa-testing-services-in-auckland",
    },
    "Wellington Region": {
      Wellington: "/software-qa-testing-services-in-wellington",
    },
    "Canterbury Region": {
      Christchurch: "/software-qa-testing-services-in-christchurch",
    },
  }
};