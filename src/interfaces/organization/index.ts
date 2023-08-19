import { CronJobInterface } from 'interfaces/cron-job';
import { InviteInterface } from 'interfaces/invite';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OrganizationInterface {
  id?: string;
  description?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  cron_job?: CronJobInterface[];
  invite?: InviteInterface[];
  user?: UserInterface;
  _count?: {
    cron_job?: number;
    invite?: number;
  };
}

export interface OrganizationGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
