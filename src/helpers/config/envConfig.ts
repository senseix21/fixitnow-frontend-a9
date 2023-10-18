export const getBaseUrl = (): string => {
    return process.env.NEXT_PUBLIC_API_BASE_URL as string || "https://fixitnow-backend-a9-e0lz8ew1v-senseix21.vercel.app/api/v1";
}