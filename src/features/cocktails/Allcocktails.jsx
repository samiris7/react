import { useNavigate } from "react-router";
import { useGetAllDrinksQuery, useLazyGetAllDrinksQuery } from "./cocktailApi"

const AllCocktails = () => {

  const nav = useNavigate();
  const { isLoading, isError, isFetching, data } = useGetAllDrinksQuery();

  const [fetchAll, { isLoading: isLoad, data: val, error }] = useLazyGetAllDrinksQuery();

  if (isLoading) {
    return <h1>Loading....</h1>;
  }

  // const person = {
  //   name: 'ram',
  //   age: 90
  // };

  // Object.entries(person).forEach(([key, value]) => {
  //   console.log(`${key}: ${value}`);
  // });
  // console.log(Object.entries(person));
  return (
    <div className="p-3">

      {
        data && data.drinks.map((cocktail, i) => {

          // const category = cocktail.strCategory.replace('/', '-');

          return <h1 className="shadow-lg p-2 cursor-pointer mb-4" key={i}>{cocktail.strCategory}</h1>
        })
      }

    </div>
  )
}
export default AllCocktails