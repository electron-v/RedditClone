import { Client,Databases,Storage,ID,Query } from "appwrite";
import conf from "../conf/conf";

export class Service{

    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client.setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title, slug, content, featuredImage, status, userId}){

        console.log("title",title,"slug",slug,"content",content,"Image",featuredImage,"status",status,
            "user",userId);
        
            try {
                return await this.databases.createDocument(
                    conf.appwriteDatabaseId,
                    conf.appwriteCollectionID,
                    slug,
                    {
                        title,
                        content,
                        featuredImage,
                        status,
                        userId,
                        slug
                    }
                );                
            } catch (error) {
                console.log("Appwrite serive :: createPost :: error", error);
                
            }
    }

    async updatePost(slug, {title, content,status, userId, featuredImage}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
        )
            
        } catch (error) {
            console.log("Appwrite serive :: updatePost :: error", error);
                
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionID,
                slug
            )
            return true;
            
        } catch (error) {
            console.log("Appwrite serive :: deletePost :: error", error);
            return false;   
        }
    }

    async getPost(slug){

        console.log("line no 80", slug);
        
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionID,
                slug);
            
        } catch (error) {
            
            console.log("Appwrite serive :: getPost :: error", error);
            return false;   
        }
    }

    async getPosts(queries = [ Query.equal("status","active")]){
            try {
                return await this.databases.listDocuments(
                    conf.appwriteDatabaseId,
                    conf.appwriteCollectionID,
                    queries
                )
            } catch (error) {
                console.log("Appwrite serive :: getPosts :: error", error);
                return false;   
            }
    }

    // below are file uploading services

    async uploadFile(file){
        try {
            return this.bucket.createFile(
                conf.appwritebucketID, 
                ID.unique(),
                file )
        } catch (error) {
            console.log(111);
            
            console.log("Appwrite serive :: uploadFile :: error", error);
                return false;   
        }
    }

    async deleteFile(fileId){
        try {
            this.bucket.deleteFile(
                conf.appwritebucketID,
                fileId);
            return true;
        } catch (error) {
            console.log("Appwrite serive :: uploadFile :: error", error);
            return false; 
        }
    }

     getFilePreview(fileId){
        try {
            return this.bucket.getFilePreview(
                conf.appwritebucketID,
                fileId
            );
        } catch (error) {
            console.log("Appwrite serive :: getFilePreview :: error", error);
            return false; 
        }
    }

}

const service = new Service();
export default service;