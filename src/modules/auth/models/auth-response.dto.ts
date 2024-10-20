import { User } from '@/modules/users/models';

interface Session {
  id: string;
  userId: string;
  fresh: boolean;
  expiresAt: Date;
}

export interface AuthResponse {
  status: string;
  data: {
    session: Session;
    user: User
  };
}
