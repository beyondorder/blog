export type PostType = {
	id: string;
	title: string;
	content: string;
	like?: number;
	comments?: any[]
	createdAt: Date;
	updatedAt: Date;
}