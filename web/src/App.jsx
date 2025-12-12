import { SignedIn, SignedOut, SignIn, SignInButton, SignOutButton, UserButton } from '@clerk/clerk-react'
import './App.css'

function App() {

  return (
    <>
      <h1>Hello World</h1>
      <SignedOut>
        <SignInButton mode='modal' />
      </SignedOut>
      <SignedIn>
        <SignOutButton />
      </SignedIn>
      <UserButton />
    </>
  )
}

export default App
