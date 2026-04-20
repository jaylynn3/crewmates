import { useState } from "react"
import { supabase } from "./client"
import { useNavigate } from "react-router-dom"

export default function Create() {
  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [special_skill, setSpecialSkill] = useState("")
  const [favorite_food, setFavoriteFood] = useState("")
  const [power, setPower] = useState("")

  const createMember = async () => {
    const { error } = await supabase.from("party_members").insert([
      { name, special_skill, favorite_food, power }
    ])

    if (error) {
      console.log(error)
      alert("Error creating character")
      return
    }

    alert("Character created!")

    navigate("/gallery") // 
  }

  return (
    <div className="card">
      <h1 className="title">Create Character</h1>

      <input
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />

      <h3>Special Skill</h3>
      <button className="attr-btn"
        onClick={() => setSpecialSkill("Happy")}
        style={{ background: special_skill === "Happy" ? "lightgreen" : "" }}
      >
        Happy
      </button>

      <button className="attr-btn"
        onClick={() => setSpecialSkill("Sad")}
        style={{ background: special_skill === "Sad" ? "lightgreen" : "" }}
      >
        Sad
      </button>

      <h3>Favorite Food</h3>
      <button className="attr-btn"
        onClick={() => setFavoriteFood("Orange Juice")}
        style={{ background: favorite_food === "Orange Juice" ? "lightgreen" : "" }}
      >
        Orange Juice
      </button>

      <button className="attr-btn"
        onClick={() => setFavoriteFood("Cookies")}
        style={{ background: favorite_food === "Cookies" ? "lightgreen" : "" }}
      >
        Cookies
      </button>

      <h3>Power</h3>
      <button className="attr-btn"
        onClick={() => setPower("Knife")}
        style={{ background: power === "Knife" ? "lightgreen" : "" }}
      >
        Knife
      </button>

      <button className="attr-btn"
        onClick={() => setPower("Bat")}
        style={{ background: power === "Bat" ? "lightgreen" : "" }}
      >
        Bat
      </button>

      <br />
      <button onClick={createMember}>Create</button>
    </div>
  )
}