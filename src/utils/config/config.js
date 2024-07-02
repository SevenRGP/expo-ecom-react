const config = {
  appwriteEndpoint: import.meta.env.VITE_APPWRITE_API_ENDPOINT,
  appwriteProjectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
  appwriteDatabaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
  appwriteCollectionId: import.meta.env.VITE_APPWRITE_COLLECTION_ID
};

export default Object.freeze(config);