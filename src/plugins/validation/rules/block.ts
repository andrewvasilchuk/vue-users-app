export default [
  (v: string) => v.length <= 256 || 'Block must be less than 256 characters',
]
