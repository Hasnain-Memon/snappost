import { Client, ID, Databases, Storage, Query } from "appwrite";
import conf from "../conf/conf.ts";

class DatabaseService {
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title, content, featuredIamge, slug, status, userId}) {
        try {
            const post = await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredIamge,
                    status,
                    userId
                }
            )
            return post;
        } catch (error) {
            console.log("Error while creating post:", error);
            throw error;
        }
    }

    async updatePost(slug: string, {title, content, featuredIamge, status}) {
        try {
            const post = await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredIamge,
                    status
                }
            )
            return post;
        } catch (error) {
            console.log("Error while updating post:", error);
            throw error;
        }
    }

    async deletePost(slug: string) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Error while deleting post:", error);
            throw error;
        }
    }

    async getPost(slug: string) {
        try {
            const post = await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return post;
        } catch (error) {
            console.log("Error while geting post:", error);
            throw error;
        }
    }

    async getAllPost(queries = [Query.equal("status", "active")]) {
        try {
            const AllPosts = await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
            )
            return AllPosts;
        } catch (error) {
            console.log("Error while getting All post:", error);
            throw error;
        }
    }

    // file services starts here

    async uploadFile(file: File) {
        try {
            const uploadedFile = await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
            return uploadedFile;
        } catch (error) {
            console.log("Error while uploading file:", error);
            throw error;
        }
    }

    async deleteFile(fileId: string) {
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
        } catch (error) {
            console.log("Error while deleting file:", error);
            throw error;
        }
    }

    async getFilepreview(fileId: string) {
        try {
        return await this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
        } catch (error) {
            console.log("Error while getting file preview file:", error);
            throw error;
        }
    }

}

const databaseService = new DatabaseService();

export default databaseService;