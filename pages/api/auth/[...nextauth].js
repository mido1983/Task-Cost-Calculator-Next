import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                try {
                    // Выполнить запрос к API для получения пользователя вместо прямого импорта модели
                    const res = await fetch('https://defiant-gratia-mido-dor-ede2723e.koyeb.app/api/user', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ email: credentials.email })
                    });

                    const user = await res.json();

                    if (!user || !user.password) {
                        throw new Error('Invalid credentials');
                    }

                    const isValid = await bcrypt.compare(credentials.password, user.password);
                    if (!isValid) {
                        throw new Error('Invalid credentials');
                    }
                    console.log('User from API:', user); // Debug log
                    return {
                        id: user._id.toString(),
                        email: user.email,
                        name: user.name,
                        role: user.role || 'user'
                    };
                } catch (error) {
                    throw new Error(error.message);
                }
            }
        })
    ],
    session: {
        strategy: 'jwt'
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.email = user.email;
                token.name = user.name;
                token.role = user.role;
                console.log('JWT callback - token:', token); // Debug log
            }
            return token;
        },
        async session({ session, token }) {
            session.user.id = token.id;
            session.user.role = token.role;
            console.log('Session callback - session:', session); // Debug log

            return session;
        }
    },
    pages: {
        signIn: '/login',
    },
    secret: process.env.NEXTAUTH_SECRET
});
