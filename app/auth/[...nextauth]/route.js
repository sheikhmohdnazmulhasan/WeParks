import NextAuth from "next-auth/next";
import bcrypt from "bcryptjs"
import User from "@/models/user";
import connectMongoDB from "@/libs/mongodb";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = {
    providers: [
        CredentialsProvider({
            name: 'credentials',

            async authorize(credentials) {
                const { email, password } = credentials;

                try {
                    await connectMongoDB();
                    const user = await User.findOne({ email });

                    if (!user) {
                        return null;

                    } else {
                        const validPassword = await bcrypt.compare(password, user.password);

                        if (!validPassword) {
                            return null
                        }
                    }

                    return user;

                } catch (error) {
                    console.log(error);
                }
            }
        })
    ],

    session: {
        strategy: 'jwt'
    },

    secret: process.env.NEXT_AUTH_SECRET,

    page: '/'
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }