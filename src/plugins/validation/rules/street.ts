export default [
  (v: string) => v.length <= 256 || 'Street must be less than 256 characters',
]
