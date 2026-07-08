"use client"

import { signIn } from "next-auth/react"
import Image from "next/image"

export default function LoginPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">

            <div
                className="w-full max-w-md bg-white rounded-2xl shadow-lg"
                style={{ padding: '32px' }}
            >

                {/* Header */}
                <h1
                    className="text-2xl font-bold text-center"
                    style={{ marginBottom: '24px' }}
                >
                    Welcome Back 👋
                </h1>

                <p
                    className="text-center text-gray-500"
                    style={{ marginBottom: '28px' }}
                >
                    Sign in to continue
                </p>

                {/* Google Login */}
                <button
                    onClick={() => signIn("google")}
                    className="w-full flex items-center justify-center gap-3 border border-gray-400 hover:bg-gray-100 transition cursor-pointer"
                    style={{
                        marginBottom: '14px',
                        padding: '12px 0',
                        borderRadius: '10px'
                    }}
                >
                    <Image
                        src="/google.svg"
                        alt="google"
                        width={22}
                        height={22}
                    />
                    Continue with Google
                </button>

                {/* Facebook Login */}
                <button
                    onClick={() => signIn("facebook")}
                    className="w-full flex items-center justify-center gap-3 border border-gray-400 hover:bg-gray-100 transition cursor-pointer"
                    style={{
                        marginBottom: '14px',
                        padding: '12px 0',
                        borderRadius: '10px'
                    }}
                >
                    <Image
                        src="/facebook.svg"
                        alt="facebook"
                        width={22}
                        height={22}
                    />
                    Continue with Facebook
                </button>

                {/* GitHub Login */}
                <button
                    onClick={() => signIn("github")}
                    className="w-full flex items-center justify-center gap-3 bg-black text-white hover:bg-gray-800 transition cursor-pointer"
                    style={{
                        marginBottom: '20px',
                        padding: '12px 0',
                        borderRadius: '10px'
                    }}
                >
                    <Image
                        src="/GitHub.svg"
                        alt="github"
                        width={22}
                        height={22}
                        style={{ backgroundColor: 'white', borderRadius: '50%' }}
                    />
                    Continue with GitHub
                </button>

                {/* Divider */}
                <div
                    className="flex gap-2 items-center"
                    style={{ margin: '24px 0' }}
                >
                    <div className="flex-1 h-px bg-gray-300" />
                    <span className="px-3 text-gray-400 text-sm">OR</span>
                    <div className="flex-1 h-px bg-gray-300" />
                </div>

                {/* Email Login */}
                <button
                    onClick={() => signIn("email")}
                    className="w-full border border-gray-400 hover:bg-gray-100 transition cursor-pointer"
                    style={{
                        padding: '12px 0',
                        borderRadius: '10px'
                    }}
                >
                    Continue with Email
                </button>

            </div>
        </div>
    )
}