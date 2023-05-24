import { generateRandomString } from "../shared/utils/react/generateRandomIndex";
import { ITodo } from "../variables/interfaces/ITodo";

export const defaultDataTodo: Array<ITodo> = [
  {
    id: generateRandomString(),
    title: 'Купить хлеб',
    status: true
    },
    {
      id: generateRandomString(),
      title: 'выпить кофе',
      status: false
    },
    {
      id: generateRandomString(),
      title: 'купить шуруповерт',
      status: true
    },
]
