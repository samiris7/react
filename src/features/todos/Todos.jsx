import React from 'react'
import { useGetTodosQuery } from './todosApi';

const Todos = () => {
  const { isLoading, data, isSuccess, isError, error, refetch } = useGetTodosQuery('', {
    pollingInterval: 5000
  });
  if (isLoading) {
    return <div>Loading...</div>
  }
  return (
    <div>

      {data && data.todos.map((todo, i) => {
        return <div key={i}>{todo.todo}</div>
      })}
    </div>
  )
}

export default Todos
