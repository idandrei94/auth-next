import NextAuth, { NextAuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                password: { label: "Password", type: "password" }
            },
            async authorize(formData, req)
            {
                console.log('qwe');
                return !!formData?.password && formData.password === process.env.PASSWORD ? { id: '1', name: 'J Smith', email: 'jsmith@example.com' } : null;
            }
        }),
    ],
    pages: {
        signIn: '/login',
        signOut: '/login'
    },
    session: {
        strategy: 'jwt',
        maxAge: 60
    },
    jwt: {
        maxAge: 60,
    }
};

export default NextAuth(authOptions);