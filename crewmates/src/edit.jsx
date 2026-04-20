import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { supabase } from "./client"
import "./App.css"

export default function Edit() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [special_skill, setSpecialSkill] = useState("")
  const [favorite_food, setFavoriteFood] = useState("")
  const [power, setPower] = useState("")

  useEffect(() => {
    const fetchMember = async () => {
      const { data } = await supabase
        .from("party_members")
        .select()
        .eq("id", id)
        .single()

      if (data) {
        setName(data.name)
        setSpecialSkill(data.special_skill)
        setFavoriteFood(data.favorite_food)
        setPower(data.power)
      }
    }

    fetchMember()
  }, [id])

  const updateMember = async () => {
    await supabase
      .from("party_members")
      .update({
        name,
        special_skill,
        favorite_food,
        power
      })
      .eq("id", id)

    alert("Character updated!")
    navigate("/gallery")
  }

  const deleteMember = async () => {
    await supabase
      .from("party_members")
      .delete()
      .eq("id", id)

    alert("Character deleted!")
    navigate("/gallery")
  }

  return (
    <div className="card">
      <h1>Edit Character</h1>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        value={special_skill}
        onChange={(e) => setSpecialSkill(e.target.value)}
      />

      <input
        value={favorite_food}
        onChange={(e) => setFavoriteFood(e.target.value)}
      />

      <input
        value={power}
        onChange={(e) => setPower(e.target.value)}
      />

      <button onClick={updateMember}>
        Update Character
      </button>

      <button onClick={deleteMember}>
        Delete Character
      </button>
    </div>
  )
}