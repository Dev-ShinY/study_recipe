import { fetchRecipeType } from "@/types/Recipe";

export const getRecipe = async (
  ingredients: string,
  start: number,
  end: number
) => {
  const apiUrl = process.env.NEXT_PUBLIC_RECIPE_API_URL;
  const apiKey = process.env.NEXT_PUBLIC_RECIPE_API_KEY;

  return new Promise<fetchRecipeType>((resolve, reject) => {
    const url = `${apiUrl}/${apiKey}/COOKRCP01/json/${start}/${end}/RCP_PARTS_DTLS=${ingredients}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        resolve([data.COOKRCP01.row, Number(data.COOKRCP01.total_count)]);
      })
      .catch((error) => {
        reject("Error fetching Recipe : " + error);
      });
  });
};
