import NextAuth, { NextAuthOptions, Session } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const AuthOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "text", placeholder: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          if (credentials) {
            const res = await fetch(
              "https://authentication-umb0.onrender.com/signin",
              {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  email: credentials.email,
                  password: credentials.password,
                  expiresInMins: 60,
                }),
                redirect: "manual",
              }
            );
            const user = await res.json();

            if (res.ok && user) {
              return {
                ...user,
                redirectTo: "/",
              };
            }
            return null;
          }
        } catch (error) {
          console.error("Authorization error:", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      // console.log("session", session);
      // console.log("token", token);
      const sessionInfo = {
        user: {
          fullName: token.fullName,
          phoneNumber: token.phoneNumber,
          email: token.email,
        },
        expires: session.expires,
        accessToken: token.token,
      };
      console.log("🚀 ~ session ~ sessionInfo:", sessionInfo);

      return sessionInfo as Session;
    },
    async jwt({ token, user, session, trigger }) {
      if (trigger === "update") {
        return { ...token, ...session.user };
      }

      if (user) {
        console.log("🚀 ~ jwt ~ user:", user);
        return { ...token, ...user };
      }
      return token;
    },
    async redirect({ baseUrl }) {
      return baseUrl;
    },
  },
};

const handler = NextAuth(AuthOptions);

export { handler as GET, handler as POST };
