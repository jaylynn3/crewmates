import { useEffect, useState } from "react"
import { supabase } from "./client"
import { Link } from "react-router-dom"

export default function Gallery() {
  const [members, setMembers] = useState([])

  useEffect(() => {
    const fetchMembers = async () => {
      const { data, error } = await supabase
        .from("party_members")
        .select()
        .order("id", { ascending: false }) 

      if (error) console.log(error)
      if (data) setMembers(data)
    }

    fetchMembers()
  }, [])

  return (
    <div>
      <h1 className="title" >Your Party</h1>

      {members.map((m) => (
        <div className="card" key={m.id}>
          <Link to={`/character/${m.id}`}>
            <h3>{m.name}</h3>
          </Link>

          <p>{m.special_skill}</p>
          <p>{m.favorite_food}</p>
          <p>{m.power}</p>
        </div>
      ))}
    </div>
  )
}