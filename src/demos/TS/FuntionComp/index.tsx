import { FunctionComponent } from 'react'

// Use type inference; inferred return type is `JSX.Element | null`
const MyComp1 = ({ condition }: { condition: boolean }) =>
  condition ? <div>Hello</div> : null

// Use explicit function return types; Add `null`, if needed
const MyComp2 = (): JSX.Element => <div>Hello</div>
const MyComp3 = (): React.ReactElement => <div>Hello</div>
// Option 3 is equivalent to 2 + we don't need to use a global (JSX namespace)

// Use built-in `FunctionComponent` or `FC` type
const MyComp4: React.FC<MyProps> = () => <div>Hello</div>

// export MyComp1
const MyCompFragment: FunctionComponent = () => <>"Hello"</>
const MyCompCast: FunctionComponent = () => 'Hello' as any
// alternative to `as any`: `as unknown as JSX.Element | null`

// This Answer is great. However, I use React 18 in 2022. The ReactFragment is Iterable<ReactNode> now, there is no type {} anymore.
