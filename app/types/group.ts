// File: types/group.ts
export type Member = {
  id: string;
  name: string;
  joinedAt: number;
};

export type Group = {
  id: string;
  name: string;
  ownerId: string;
  members: Member[];
};
