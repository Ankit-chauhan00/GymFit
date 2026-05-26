interface SignInWithAuthParams{
    provider: "github" | "google";
    providerAccountId: string;
    user: {
        name: string;
        username: string;
        email: string;
        image: string;
    };
}
interface ActionResponse<T = null>  {
    success: boolean;
    data?: T;
    error?: {
        message: string;
        details?: Record<string, string[]>
    };
    status?: number;
}

interface AuthCredentials {
    name: string;
    username: string;
    email: string;
    password: string;
}

interface AdminCreationParams {
    name: string;
    username: string;
    email: string;
    password: string;
    image?: string;
}