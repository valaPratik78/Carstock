import mongoose from 'mongoose';

async function testConnection() {
  try {
    // Connect to the local MongoDB database
    await mongoose.connect('mongodb://localhost:27017/carstock');
    console.log("✅ Successfully connected to local MongoDB instance: mongodb://localhost:27017/carstock\n");
    
    // Check collections
    const collections = await mongoose.connection.db.listCollections().toArray();
    console.log("🔍 Here are the tables (collections) currently in your database:");
    if (collections.length === 0) {
      console.log("   No collections found yet. The database is empty.");
    } else {
      for (const collection of collections) {
        const count = await mongoose.connection.db.collection(collection.name).countDocuments();
        console.log(`   - ${collection.name} : ${count} items/records`);
      }
    }
  } catch (error) {
    console.error("❌ Failed to connect to MongoDB:", error.message);
  } finally {
    process.exit(0);
  }
}

testConnection();
