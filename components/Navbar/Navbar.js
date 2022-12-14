import React from 'react';
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
        <nav>
            <div>
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/about">
                    <a>about</a>
                </Link>
            </div>
        </nav>
    </div>
  )
}

export default Navbar