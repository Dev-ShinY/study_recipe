import { fetchRecipeType } from "@/types/Recipe";

export const getRecipe = async (
  ingredients: string,
  start: number,
  end: number
) => {
  const apiUrl = process.env.NEXT_PUBLIC_RECIPE_API_URL;

  return new Promise<fetchRecipeType>((resolve, reject) => {
    const url = `${apiUrl}/${start}/${end}/RCP_PARTS_DTLS=${ingredients}`;

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
