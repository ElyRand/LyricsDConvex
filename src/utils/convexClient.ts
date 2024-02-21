import { ConvexHttpClient } from "convex/browser";

const httpClient = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export default httpClient;