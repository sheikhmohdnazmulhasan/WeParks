const { Schema, default: mongoose } = require("mongoose");

const userSchema = new Schema({ name: String, password: String, email: String });

const User = mongoose.models.Users || mongoose.model('Users', userSchema);

export default User; 