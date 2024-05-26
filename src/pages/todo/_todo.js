import { useParams, useSearchParams } from "react-router-dom"

export const Todo = () => {
    // 1. url-parameter 를 통해 
    const {todoId} = useParams()
    const [searchParams] = useSearchParams() // 쿼리 파라미터를 찾는것
    console.log(todoId, searchParams.get("goods"))

    return <div>{searchParams.get("goods")}</div>
}