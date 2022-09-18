import type { PageLoad } from "./$types";
import { error } from "@sveltejs/kit";
import payload from "../../payload.json";

export const prerender = true;
// const parser = new Parser()

const useLocalData = true;
type Person = {
  name: string;
  age: number;
  weight: number;
};

const MY_BUCKET =
  "https://raw.githubusercontent.com/jiradeto/arbitrary-bucket/main/data/person.json";

const FetchFromLocalJson = () => {
  try {
    console.log("FetchFromLocalJson:", JSON.stringify(payload));
    return {
      persons: payload["data"]["persons"] as Person[],
    };
  } catch (e) {
    console.log("FetchFromLocalJson error", e);
    return {
      persons: [] as Person[],
    };
  }
};
export const FetchFromJson = async () => {
  const response = await fetch(MY_BUCKET);
  console.log("fetching person", payload);
  if (response.status === 404) {
    // user hasn't created a todo list.
    // start with an empty array
    return {
      persons: [] as Person[],
    };
  }

  if (response.status === 200) {
    return {
      persons: (await response.json())["data"]["persons"] as Person[],
    };
  }

  throw error(response.status);
};

export const load: PageLoad = async () => {
  if (useLocalData) 
    return FetchFromLocalJson();
  return FetchFromJson();
};
