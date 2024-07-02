const config = {
  appwriteEndpoint: process.env.VITE_APPWRITE_API_ENDPOINT,
  appwriteProjectId: process.env.VITE_APPWRITE_PROJECT_ID,
  appwriteDatabaseId: process.env.VITE_APPWRITE_DATABASE_ID,
  appwriteCollectionId: process.env.VITE_APPWRITE_COLLECTION_ID
};

export default Object.freeze(config);