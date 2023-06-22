// semantic ui has a component called Comment which would conflict with this, hence ChatComment
export interface ChatComment {
	id: number;
	createdAt: any;
	body: string;
	username: string;
	displayName: string;
	image: string;
}