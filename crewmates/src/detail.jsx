import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { supabase } from "./client"

export default function Detail() {
  const { id } = useParams()
  const [member, setMember] = useState(null)

  useEffect(() => {
    const fetchMember = async () => {
      const { data } = await supabase
        .from("party_members")
        .select()
        .eq("id", id)
        .single()

      setMember(data)
    }

    fetchMember()
  }, [id])

  if (!member) return <h2>Loading...</h2>

  return (
    <div>
      <h1>{member.name}</h1>
      <p>{member.special_skill}</p>
      <p>{member.favorite_food}</p>
      <p>{member.power}</p>

      <Link to={`/edit/${member.id}`}>
        <button>Edit</button>
      </Link>
    </div>
  )
}