'use client'
import { useState } from 'react'

export default function ResumeForm({
  onSubmit,
}: {
  onSubmit: (data: any) => void
}) {
  const [form, setForm] = useState({
    name: '',
    bio: '',
    skills: '',
    experience: '',
    projects: '',
    links: '',
  })

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    onSubmit({
      ...form,
      skills: form.skills.split(',').map((s) => s.trim()),
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        name="name"
        placeholder="Name"
        className="w-full p-2 border"
        onChange={handleChange}
      />
      <textarea
        name="bio"
        placeholder="Bio"
        className="w-full p-2 border"
        onChange={handleChange}
      />
      <input
        name="skills"
        placeholder="Skills (comma-separated)"
        className="w-full p-2 border"
        onChange={handleChange}
      />
      <input
        name="experience"
        placeholder="Experience"
        className="w-full p-2 border"
        onChange={handleChange}
      />
      <input
        name="projects"
        placeholder="Projects"
        className="w-full p-2 border"
        onChange={handleChange}
      />
      <input
        name="links"
        placeholder="Links"
        className="w-full p-2 border"
        onChange={handleChange}
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Submit
      </button>
    </form>
  )
}
