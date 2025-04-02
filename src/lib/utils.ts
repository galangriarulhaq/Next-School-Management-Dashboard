import { auth } from "@clerk/nextjs/server";

const { sessionClaims } = auth();
export const role = (sessionClaims?.metadata as { role?: string })?.role;
