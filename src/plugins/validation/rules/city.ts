export default [
  (v: string) => v.length <= 256 || 'City must be less than 256 characters',
]
