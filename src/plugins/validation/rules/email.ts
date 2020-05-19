export default [
  (v: string) => v !== '' || 'Email is required',
  (v: string) => /.+@.+/.test(v) || 'E-mail must be valid',
]
