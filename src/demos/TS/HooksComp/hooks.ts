export function useLoading() {
  const [isLoading, setState] = useState(false)
  const load = (aPromise: Promise<any>) => {
    setState(true)
    return aPromise.finally(() => setState(false))
  }
  return [isLoading, load] // infers [boolean, typeof load] instead of (boolean | typeof load)[]
  // return [isLoading, load] as const // infers [boolean, typeof load] instead of (boolean | typeof load)[]
}
