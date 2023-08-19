import { UserInterface } from 'interfaces/user';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface InviteInterface {
  id?: string;
  status: string;
  inviter_id?: string;
  invitee_id?: string;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;

  user_invite_inviter_idTouser?: UserInterface;
  user_invite_invitee_idTouser?: UserInterface;
  organization?: OrganizationInterface;
  _count?: {};
}

export interface InviteGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
  inviter_id?: string;
  invitee_id?: string;
  organization_id?: string;
}
