import type { PageLoad } from "./$types";
import { error } from "@sveltejs/kit";

export const prerender = true
// const parser = new Parser()

type Person = {
  name: string;
  age: number;
  weight: number;
};

const MY_BUCKET =
  "https://raw.githubusercontent.com/jiradeto/arbitrary-bucket/main/data/person.json";

export const FetchFromJson = async () => {
  const response = await fetch(MY_BUCKET);
  console.log("fetching person");
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
    return FetchFromJson();
};
