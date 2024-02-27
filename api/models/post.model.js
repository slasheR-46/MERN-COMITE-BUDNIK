import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      default:
        "https://scontent.fscl1-1.fna.fbcdn.net/v/t39.30808-6/274644068_5009259492473999_709880096745657657_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeEXOcPKdlmJ5sRxZyJenRUz3mPbJWSuiCneY9slZK6IKeZ2vm_TW8nW0jbwAaNiLSClxQBFT5m3QAfkRCcJER3n&_nc_ohc=fA6ylX8RVRsAX_-v_zT&_nc_ht=scontent.fscl1-1.fna&oh=00_AfCCu87UoaFzYxjVmqmSj46PsKa_u57bhvsmmFoDyDUBDQ&oe=65E36E23",
    },
    category: {
      type: String,
      default: "sin categoria",
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

export default Post;
