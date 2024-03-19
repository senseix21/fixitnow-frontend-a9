export const getBaseUrl = (): string => {
    return process.env.url || "https://fixitnow-backend-a9.vercel.app/api/v1" as string;
}