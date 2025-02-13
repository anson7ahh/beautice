import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
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
              "https://beutice-nestjs-production.up.railway.app/auth/signin",
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
      const sessionInfo = {
        user: {
          fullName: token.fullName,
          phoneNumber: token.phoneNumber,
          email: token.email,
        },
        expires: session.expires,
        accessToken: token.token,
      };
      return sessionInfo;
    },
    async jwt({ token, user, session, trigger }) {
      if (trigger === "update") {
        return { ...token, ...session.user };
      }

      if (user) {
        return { ...token, ...user };
      }
      return token;
    },
    async redirect({ baseUrl }) {
      return baseUrl;
    },
  },
});

export { handler as GET, handler as POST };
