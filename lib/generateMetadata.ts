export const generateMetadata = (formData: any) => {
  return {
    name: formData.name,
    description: formData.bio,
    image: formData.image || '', // optional
    attributes: [
      {
        trait_type: 'Skills',
        value: formData.skills.join(', '),
      },
      {
        trait_type: 'Experience',
        value: formData.experience,
      },
      {
        trait_type: 'Projects',
        value: formData.projects,
      },
      {
        trait_type: 'Links',
        value: formData.links,
      },
    ],
  }
}
