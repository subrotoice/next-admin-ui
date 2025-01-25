export interface User {
  id: number;
  name: string;
  email: string;
  email_verified_at?: string | null;
  created_at: string;
  updated_at: string;
}

export interface Profile {
  id: number;
  KnownAs: string;
  KnownAsBangla: string;
  PhotoUrl: string;
  SignatureUrl?: string | null;
}

export interface LoginResponse {
  success: boolean;
  message: string;
  data: {
    user: User;
    isSuperAdmin: boolean;
    isSupportAdmin: boolean;
    profile: Profile[];
    access_token: string;
    expires_at: string;
  };
}
