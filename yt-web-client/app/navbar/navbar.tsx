'use client'

import SignIn from "./sign-in"
import Link from "next/link"

import styles from "./navbar.module.css"
// import Upload from "./upload"
import { useEffect, useState } from "react"
import { onAuthStateChangedHelper } from "../firebase/firebase"
import { User } from "firebase/auth"


function NavBar() {

    const [user, setUser] = useState<User | null>(null)

    console.log(user)

    useEffect(() => {
        const unsubscribe = onAuthStateChangedHelper((user) => {
            setUser(user)
        })
        // Cleanup subscription on unmount
        return () => unsubscribe()
    }, [])

    return (
        <nav className={styles.nav}>
            <Link href="/">
                <span className={styles.logoContainer}>
                    <img className={styles.logo} src="/youtube-logo.svg" alt="YouTube Logo" />
                </span>
            </Link>
            {
                // TODO: Add a upload
            }
            <SignIn user={user} />
        </nav>
    )
}

export default NavBar
