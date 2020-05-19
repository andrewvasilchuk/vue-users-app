export default [
  (v: string) => v !== '' || 'Username is required',
  (v: string) => v.length <= 32 || 'Username must be less than 32 characters',
  (v: string) => v.length >= 2 || 'Username must be greater than 2 characters',
]
